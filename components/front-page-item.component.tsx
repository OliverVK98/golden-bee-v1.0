import React from "react";
import Image from "next/legacy/image";
import styles from "../styles/FrontImage.module.css"
import styled from "styled-components";
import Link from "next/link";
import {IDataItem} from "../data/data";

const AddToCartButton = styled.button`
  color: rgb(58,170,53);
  background-color: transparent;
  border: 1px solid rgb(58,170,53);
  width: 300px;
  height: 40px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    color: white;
    background-color: rgb(58,170,53);
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
`

const BottomItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
  
  :hover {
    opacity: 0.6;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  height: 300px;
  width: 300px;
`

const ItemText = styled.p`
  font-size: 20px;
  align-self: center;
  
`

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px
`

const OriginalPriceContainer = styled.span`
  text-decoration: line-through;
`

const DiscountedPriceContainer = styled.span`
  color: rgb(58,170,53);
`

const FrontPageItemComponent: React.FC<IDataItem> = (props) => {
    const {itemName, frontImageUrl, price, discountedPrice, rating, productId} = props;
    const url = `/products/${productId}`;

    return (
        <ItemContainer>
            <ImageWrapper>
                <Link href={url}>
                    <Image className={styles.image}
                           src={frontImageUrl}
                           alt={"trending-image"}
                           width={300} height={300}/>
                </Link>
            </ImageWrapper>
            <AddToCartButton>ADD TO CART</AddToCartButton>
            <Link href={url}>
                <BottomItemContainer>
                    <ItemText>{itemName}</ItemText>
                    <StarContainer>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <p>
                            ({rating})
                        </p>
                    </StarContainer>
                    <PriceContainer>
                        <OriginalPriceContainer>${price}</OriginalPriceContainer>
                        <DiscountedPriceContainer>${discountedPrice}</DiscountedPriceContainer>
                    </PriceContainer>
                </BottomItemContainer>
            </Link>
        </ItemContainer>
    )
}

export default FrontPageItemComponent