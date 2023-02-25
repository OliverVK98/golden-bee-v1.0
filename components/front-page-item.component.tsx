import React from "react";
import Image from "next/legacy/image";
import styles from "../styles/FrontImage.module.css"
import styled from "styled-components";
import Link from "next/link";
import {IFrontPageItem} from "../pages/all";
import {useDispatch} from "react-redux";
import {addCartItems} from "../store/slices/cartSlice";
import useMediaQuery from "@mui/material/useMediaQuery";

const AddToCartButton = styled.button`
  color: rgb(58,170,53);
  background-color: transparent;
  border: 1px solid rgb(58,170,53);
  width: 250px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    color: white;
    background-color: rgb(58,170,53);
  }
  
  @media (max-width: 600px) {
    font-size: 12px;
    width: 150px;
  }
  
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  @media (max-width: 600px) {
    width: 150px;
  }
`

const BottomItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  
  :hover {
    opacity: 0.6;
  }
  @media (max-width: 600px) {
    width: 150px;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 250px;

  @media (max-width: 600px) {
    width: 150px;
  }
`

const ItemText = styled.p`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  
  @media (max-width: 600px) {
    font-size: 13px;
  }
`

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`

const OriginalPriceContainer = styled.span`
  text-decoration: line-through;
`

const DiscountedPriceContainer = styled.span`
  color: rgb(58,170,53);
`

const FrontPageItemComponent: React.FC<IFrontPageItem> = (props) => {
    const {itemName, frontImageUrl, price, discountedPrice, rating, productId, isImageLoadPriority=false} = props;
    const url = `/products/${productId}`;
    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const height = isSmallScreen ? 150 : 250;
    const width = isSmallScreen ? 150 : 250;
    const starDimensions = isSmallScreen ? 12 : 24;

    const addToCartHandler = () => {
        dispatch(addCartItems({
            itemName,
            frontImageUrl,
            price,
            discountedPrice,
            productId,
        }))
    }

    return (
        <ItemContainer>
            <ImageWrapper>
                <Link href={url}>
                    <Image className={styles.image}
                           src={frontImageUrl}
                           alt={"trending-image"}
                           width={width} height={height}
                           priority={isImageLoadPriority}/>
                </Link>
            </ImageWrapper>
            <AddToCartButton onClick={()=>addToCartHandler()}>ADD TO CART</AddToCartButton>
            <Link href={url}>
                <BottomItemContainer>
                    <ItemText>{itemName}</ItemText>
                    {rating!=0 && <StarContainer>
                        {[0, 1, 2, 3, 4].map(el => <Image src="/icons/star.png" alt="star icon" width={starDimensions}
                                                          height={starDimensions} key={el}/>)}
                        <p>
                            ({rating})
                        </p>
                    </StarContainer>}
                        {
                            discountedPrice===0 ?
                                (
                                    <PriceContainer>
                                        <span>${price}</span>
                                    </PriceContainer>
                                ) :
                                (
                                    <PriceContainer>
                                        <OriginalPriceContainer>${price}</OriginalPriceContainer>
                                        <DiscountedPriceContainer>${discountedPrice}</DiscountedPriceContainer>
                                    </PriceContainer>
                                )
                        }
                </BottomItemContainer>
            </Link>
        </ItemContainer>
    )
}

export default FrontPageItemComponent