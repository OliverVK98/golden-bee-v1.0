import CheckoutItem from "../checkout-item/checkout-item";
import roundDecimals from "../../utils/round-decimals";
import styled from "styled-components";
import React from "react";
import {IOrderData} from "../../store/slices/orderSlice";
import useMediaQuery from "@mui/material/useMediaQuery";

const UserOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const TopTextContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: fit-content;
  padding-bottom: 20px;
  margin-bottom: 10px;
`

const CustomTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: ITextProps) => props.isCenter ? "center" : "flex-start" };
  width: ${(props: ITextProps) => props.width}px;

  @media (max-width: 600px) {
  font-size: 13px;
}
`

interface ITextProps {
    width: number,
    isCenter: boolean
}

const TotalContainer = styled.div`
  display: flex;
  width: 750px;
  align-items: center;
  height: 80px;
  font-size: 30px;
  justify-content: flex-end;
  
  @media (max-width: 800px) {
    width: 600px;
    font-size: 26px;
  }

  @media (max-width: 600px) {
    width: 320px;
    font-size: 18px;
  }
`

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface IUserOrderProps {
    cartItems: IOrderData[]
}

const UserOrder:React.FC<IUserOrderProps> = ({cartItems}) => {
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    return (
        <UserOrderContainer>
            <TopTextContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 80 : isSmallScreen ? 150 : 200}>
                    Product
                </CustomTextContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 80 : isSmallScreen ? 150 : 200}>
                    Description
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 80 : 150}>
                    Quantity
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 80 : 150}>
                    Price
                </CustomTextContainer>
            </TopTextContainer>
            <CartItemsContainer>
                {
                    cartItems.map((item, index) => <CheckoutItem isOrder={true} key={index} {...item}/>)
                }
            </CartItemsContainer>
            <TotalContainer>
                TOTAL: ${
                roundDecimals(cartItems.reduce((totalSum, {quantity, price, discountedPrice})=>{
                    return totalSum + (quantity as number) * (discountedPrice ? discountedPrice : price);
                }, 0))
            }
            </TotalContainer>
        </UserOrderContainer>
    )
}

export default UserOrder