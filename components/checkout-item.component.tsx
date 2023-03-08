import styled from "styled-components";
import Image from "next/image";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteOneCartItemById, addOneCartItemById, deleteCartItemById} from "../store/slices/cartSlice";
import roundDecimals from "../utils/round-decimals";
import useMediaQuery from "@mui/material/useMediaQuery";

const ComponentContainer = styled.div`
  display: flex;
  padding-top: -10px;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  
  @media (max-width: 800px) {
    width: 600px;
  }
  
  @media (max-width: 600px) {
    width: 320px;
    font-size: 13px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 150px;

  @media (max-width: 800px) {
    width: 150px;
    font-size: 15px;
  }
  
  @media (max-width: 600px) {
    width: 70px;
    font-size: 12px;
  }
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
    quantity?: number,
    isOrder?: boolean
}

const CheckoutItemComponent: React.FC<ICheckoutComponentProps> = ({isOrder,itemName, frontImageUrl, quantity, productId, price, discountedPrice}) => {
    const dispatch = useDispatch();
    const isLaptopScreen = useMediaQuery('(max-width: 1000px)');
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    return (
        <ComponentContainer>
            <ImageContainer>
                <Image src={frontImageUrl} alt="item-image" width={!isOrder ? (isMobileScreen ? 65 : isLaptopScreen ? 100 : 150) : (isMobileScreen ? (70) : (isSmallScreen ? 100 : 150))} height={!isOrder ? (isMobileScreen ? 65 : isLaptopScreen ? 100 : 150) : (isMobileScreen ? (70) : (isSmallScreen ? 100 : 150))}/>
            </ImageContainer>
            <ContentContainer isCenter={false} width={!isOrder ? (isMobileScreen ? 70 : isLaptopScreen ? 120 : 150) : (isMobileScreen ? 80 : (isSmallScreen ? 150 : 250))}>
                {itemName}
            </ContentContainer>
            <ContentContainer isCenter={true} width={!isOrder ? isMobileScreen ? 70 : (isLaptopScreen ? 120 : 150) : 150}>
                {!isOrder&&<Image src="/icons/cart-arrow-left.png" alt="arrow-left" width={24} height={24}
                        style={{cursor: "pointer"}} onClick={() => dispatch(deleteOneCartItemById(productId))}/>}
                {quantity}
                {!isOrder&&<Image src="/icons/cart-arrow-right.png" alt="arrow-left" width={24} height={24}
                        style={{cursor: "pointer"}} onClick={() => dispatch(addOneCartItemById(productId))}/>}
            </ContentContainer>
            <ContentContainer isCenter={true} width={!isOrder ? (isMobileScreen ? 70 : isLaptopScreen ? 120 : 150) : 150}>
                ${discountedPrice ? roundDecimals(discountedPrice*(quantity as number)) : roundDecimals(price*(quantity as number))}
            </ContentContainer>
            {!isOrder&&<ContentContainer isCenter={true} width={isMobileScreen ? 30 : isLaptopScreen ? 120 : 150}>
                <Image src="/icons/red-cross.png" alt="red-cross" width={24} height={24}
                       style={{cursor: "pointer"}} onClick={() => dispatch(deleteCartItemById(productId))}/>
            </ContentContainer>}
        </ComponentContainer>
    )
}

export default CheckoutItemComponent