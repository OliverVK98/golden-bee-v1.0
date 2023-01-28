import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setIsSignInModalOpen} from "../redux/slices/modalSlice";
import axios from "axios";
import {ICartItem} from "../redux/slices/cartSlice";
import React, {useState} from "react";
import ButtonLoaderComponent from "./button-loader.component";

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

    const handleCheckout = async () => {
        try {
            setCheckoutLoading(true);
            console.log(cartItems);
            const response = await axios.post("http://localhost:3000/api/checkout_session", {
                cartItems
            });
            setCheckoutLoading(false);
            if (response.data.url) {
                window.location.href = response.data.url;
            }
        } catch (e: any) {
            console.log(e)
        }
    }

    const handleAuthCheckout = async () => {
        await axios.post("http://localhost:3000/api/checkout_session", {
            cartItems,
            userId: userInfo.userId
        })
    }

    if(isUserAuthenticated) return(
        <ButtonsContainer>
            <CustomShopButton onClick={()=> handleAuthCheckout()}>
                Checkout
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