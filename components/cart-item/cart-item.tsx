import styled from "styled-components";
import React from "react";
import {addOneCartItemById, deleteOneCartItemById, ICartItem} from "../../store/slices/cartSlice";
import Image from "next/image";
import {useDispatch} from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 85%;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 576px) {
    gap: 10px;
  }
`

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width:  220px;

  @media (max-width: 768px) {
    gap: 10px;
    width:  150px;
  }

  @media (max-width: 576px) {
    gap: 10px;
  }
`

const ItemNameContainer = styled.div`
  font-size: 15px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 576px) {
    font-size: 13px;
  }
`

const PriceContainer = styled.div`
  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 576px) {
    font-size: 13px;
  }
`

const QuantityContainer = styled.div`
  display: flex;
  gap: 3px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 576px) {
    font-size: 13px;
  }
`

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
`

const PriceAndQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const QuantityButton = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
`

const CartItem: React.FC<ICartItem> = ({itemName, frontImageUrl, price, discountedPrice, productId, quantity}) => {
    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const height = isSmallScreen ? 80 : 100;
    const width = isSmallScreen ? 80 : 100;

    return (
        <CartItemContainer>
            <ImageContainer>
                <Image src={frontImageUrl} alt="item-image" height={height} width={width}/>
            </ImageContainer>
            <ItemDetailsContainer>
                <ItemNameContainer>
                    {itemName}
                </ItemNameContainer>
                <PriceAndQuantityContainer>
                    <PriceContainer>
                        ${discountedPrice ? discountedPrice : price}
                    </PriceContainer>
                    <QuantityContainer>
                        <QuantityButton onClick={()=>dispatch(deleteOneCartItemById(productId))}>
                            -
                        </QuantityButton>
                        {quantity}
                        <QuantityButton onClick={()=>dispatch(addOneCartItemById(productId))}>
                            +
                        </QuantityButton>
                    </QuantityContainer>
                </PriceAndQuantityContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem