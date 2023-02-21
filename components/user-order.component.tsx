import CheckoutItemComponent from "./checkout-item.component";
import roundDecimals from "../utils/round-decimals";
import styled from "styled-components";
import React from "react";
import {IOrderData} from "../store/slices/orderSlice";

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
  width: ${(props: ITextProps) => props.width}px
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
`

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface IUserOrderProps {
    cartItems: IOrderData[]
}

const UserOrderComponent:React.FC<IUserOrderProps> = ({cartItems}) => {
    return (
        <UserOrderContainer>
            <TopTextContainer>
                <CustomTextContainer isCenter={false} width={200}>
                    Product
                </CustomTextContainer>
                <CustomTextContainer isCenter={false} width={250}>
                    Description
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={150}>
                    Quantity
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={150}>
                    Price
                </CustomTextContainer>
            </TopTextContainer>
            <CartItemsContainer>
                {
                    cartItems.map((item, index) => <CheckoutItemComponent isOrder={true} key={index} {...item}/>)
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

export default UserOrderComponent