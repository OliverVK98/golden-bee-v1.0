import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {setIsSignInModalOpen} from "../../store/slices/modalSlice";
import axios from "axios";
import {ICartItem} from "../../store/slices/cartSlice";
import React, {useState} from "react";
import ButtonLoaderWhite from "../button-loader-white";
import {useRouter} from "next/router";
import {setOrderData} from "../../store/slices/orderSlice";
import {WEBSITE_URL} from "../../config/const";

const CustomShopButton = styled.button`
  border: none;
  background-color: rgb(58,167,51);
  color: white;
  width: 400px;
  height: 55px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  letter-spacing: .5px;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 800px) {
    width: 250px;
  }
  
  @media (max-width: 600px) {
    width: 150px;
    font-size: 12px;
    height: 30px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 600px) {
  gap: 10px
  }
`

interface IProps {
    cartItems: ICartItem[]
}

const GuestOrUser: React.FC<IProps> = ({cartItems}) => {
    const isUserAuthenticated = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.userState.userData);
    const providerUserData = useSelector((state: RootState) => state.userState.providerUserData);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            setCheckoutLoading(true);
            const response = await axios.post(`${WEBSITE_URL}/api/stripe/checkout_session`, {
                cartItems
            });
            setCheckoutLoading(false);
            if (response.data.url) {
                dispatch(setOrderData(response.data.cartItems));
                router.push(response.data.url);
            }
        } catch (e: any) {
            console.log(e)
        }
    }

    const handleAuthCheckout = async () => {
        try {
            setCheckoutLoading(true);
            const response = await axios.post(`${WEBSITE_URL}/api/stripe/checkout_session`, {
                cartItems,
                [Object.keys(userData).length > 0 ? "userId" : "providerId"]: Object.keys(userData).length > 0 ? userData.userId : providerUserData.providerId
            })
            setCheckoutLoading(false);
            if (response.data.url) {
                dispatch(setOrderData(response.data.cartItems));
                router.push(response.data.url);
            }
        } catch (e: any) {
            console.log(e)
        }
    }

    if(isUserAuthenticated) return(
        <ButtonsContainer>
            <CustomShopButton onClick={()=> handleAuthCheckout()}>
                {!checkoutLoading ? "Checkout" : <ButtonLoaderWhite/>}
            </CustomShopButton>
        </ButtonsContainer>
    )

    return (
        <ButtonsContainer>
            <CustomShopButton onClick={()=>dispatch(setIsSignInModalOpen(true))}>
                Sign In
            </CustomShopButton>
            <CustomShopButton onClick={()=>handleCheckout()}>
                {!checkoutLoading ? "Checkout as a Guest" : <ButtonLoaderWhite/>}
            </CustomShopButton>
        </ButtonsContainer>
    )
}

export default GuestOrUser