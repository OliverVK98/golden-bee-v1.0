import styled from "styled-components";
import Image from "next/image";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteOneCartItemById, addOneCartItemById, deleteCartItemById} from "../redux/slices/cartSlice";
import roundDecimals from "../utils/round-decimals";

const ComponentContainer = styled.div`
  display: flex;
  padding-top: -10px;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 150px;
`

interface IJustifyCenter {
    isCenter: boolean,
    width: number,
}

const ContentContainer = styled.div`
  display: flex;
  width: ${(props: IJustifyCenter) => props.width}px;
  height: 150px;
  align-items: center;
  justify-content: ${(props: IJustifyCenter) => props.isCenter ? "center" : "flex-start" };
`

interface ICheckoutComponentProps {
    itemName: string,
    frontImageUrl: string,
    price: number,
    discountedPrice: number
    productId: number,
    quantity?: number
}

const CheckoutItemComponent: React.FC<ICheckoutComponentProps> = ({itemName, frontImageUrl, quantity, productId, price, discountedPrice}) => {
    const dispatch = useDispatch();

    return (
        <ComponentContainer>
            <ImageContainer>
                <Image src={frontImageUrl} alt="item-image" width={150} height={150}/>
            </ImageContainer>
            <ContentContainer isCenter={false} width={250}>
                {itemName}
            </ContentContainer>
            <ContentContainer isCenter={true} width={150}>
                <Image src="/icons/cart-arrow-left.png" alt="arrow-left" width={24} height={24}
                       style={{cursor: "pointer"}} onClick={()=>dispatch(deleteOneCartItemById(productId))}/>
                {quantity}
                <Image src="/icons/cart-arrow-right.png" alt="arrow-left" width={24} height={24}
                       style={{cursor: "pointer"}} onClick={()=>dispatch(addOneCartItemById(productId))}/>
            </ContentContainer>
            <ContentContainer isCenter={true} width={150}>
                ${discountedPrice ? roundDecimals(discountedPrice*(quantity as number)) : roundDecimals(price*(quantity as number))}
            </ContentContainer>
            <ContentContainer isCenter={true} width={150}>
                <Image src="/icons/red-cross.png" alt="red-cross" width={24} height={24}
                       style={{cursor: "pointer"}} onClick={()=>dispatch(deleteCartItemById(productId))}/>
            </ContentContainer>
        </ComponentContainer>
    )
}

export default CheckoutItemComponent