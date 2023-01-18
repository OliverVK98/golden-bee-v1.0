import styled from "styled-components";
import React from "react";
import {addOneCartItemById, deleteOneCartItemById, ICartItem} from "../redux/slices/cartSlice";
import Image from "next/image";
import {useDispatch} from "react-redux";

const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 85%;
`

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width:  220px;
`

const ItemNameContainer = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const PriceContainer = styled.div`

`

const QuantityContainer = styled.div`
  display: flex;
  gap: 3px;
  font-size: 16px;
`

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100px;
  height: 100px;
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

const CartItemComponent: React.FC<ICartItem> = ({itemName, frontImageUrl, price, discountedPrice, productId, quantity}) => {
    const dispatch = useDispatch();

    return (
        <CartItemContainer>
            <ImageContainer>
                <Image src={frontImageUrl} alt="item-image" height={100} width={100}/>
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

export default CartItemComponent