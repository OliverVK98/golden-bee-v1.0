import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {setIsSignInModalOpen} from "../store/slices/modalSlice";
import axios from "axios";
import {ICartItem} from "../store/slices/cartSlice";
import React, {useState} from "react";
import ButtonLoaderComponent from "./button-loader.component";
import {useRouter} from "next/router";

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
    const userInfo = useSelector((state: RootState) => state.userState.userData);
    const [checkoutLoading, setCheckoutLoading] = useState(false);
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            setCheckoutLoading(true);
            const response = await axios.post("http://localhost:3000/api/stripe/checkout_session", {
                cartItems
            });
            setCheckoutLoading(false);
            if (response.data.url) {
                router.push(response.data.url);
            }
        } catch (e: any) {
            console.log(e)
        }
    }

    const handleAuthCheckout = async () => {
        try {
            setCheckoutLoading(true);
            const response = await axios.post("http://localhost:3000/api/stripe/checkout_session", {
                cartItems,
                userId: userInfo.userId
            })
            setCheckoutLoading(false);
            if (response.data.url) {
                window.location.href = response.data.url;
            }
        } catch (e: any) {
            console.log(e)
        }
    }

    if(isUserAuthenticated) return(
        <ButtonsContainer>
            <CustomShopButton onClick={()=> handleAuthCheckout()}>
                {!checkoutLoading ? "Checkout" : <ButtonLoaderComponent/>}
            </CustomShopButton>
        </ButtonsContainer>
    )

    return (
        <ButtonsContainer>
            <CustomShopButton onClick={()=>dispatch(setIsSignInModalOpen(true))}>
                Sign In
            </CustomShopButton>
            <CustomShopButton onClick={()=>handleCheckout()}>
                {!checkoutLoading ? "Checkout as a Guest" : <ButtonLoaderComponent/>}
            </CustomShopButton>
        </ButtonsContainer>
    )
}

export default GuestOrUserComponent