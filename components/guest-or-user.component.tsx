import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {setIsSignInModalOpen} from "../store/slices/modalSlice";
import axios from "axios";
import {ICartItem} from "../store/slices/cartSlice";
import React, {useState} from "react";
import ButtonLoaderWhiteComponent from "./button-loader-white.component";
import {useRouter} from "next/router";
import {setOrderData} from "../store/slices/orderSlice";

const CustomShopButton = styled.button`
  border: none;
  background-color: rgb(58,167,51);
  color: white;
  width: 400px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  line-height: 1.5;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  letter-spacing: .5px;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px
`

interface IProps {
    cartItems: ICartItem[]
}

const GuestOrUserComponent: React.FC<IProps> = ({cartItems}) => {
    const isUserAuthenticated = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.userState.userData);
    const providerUserData = useSelector((state: RootState) => state.userState.providerUserData);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            setCheckoutLoading(true);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/stripe/checkout_session`, {
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
            const response = await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/stripe/checkout_session`, {
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
                {!checkoutLoading ? "Checkout" : <ButtonLoaderWhiteComponent/>}
            </CustomShopButton>
        </ButtonsContainer>
    )

    return (
        <ButtonsContainer>
            <CustomShopButton onClick={()=>dispatch(setIsSignInModalOpen(true))}>
                Sign In
            </CustomShopButton>
            <CustomShopButton onClick={()=>handleCheckout()}>
                {!checkoutLoading ? "Checkout as a Guest" : <ButtonLoaderWhiteComponent/>}
            </CustomShopButton>
        </ButtonsContainer>
    )
}

export default GuestOrUserComponent