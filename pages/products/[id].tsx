import styled from "styled-components";
import React, {useState} from "react";
import Image from "next/image";
import {PrismaClient} from "@prisma/client";
import {IDataItem} from "../../data/data";
import styles from "../../styles/FrontImage.module.css"

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`

const TopSectionContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 1043px;
`

const  BottomSectionContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 1043px;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const MultipleImageContainer = styled.div`
  display: flex;
  gap: 15px;
`

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-top: 50px;
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

const QuantityContainer = styled.p`
  align-self: flex-start;
`

const AddToCartButton = styled.button`
  width: inherit;
  height: 60px;
  background-color: rgb(58,170,53);
  color: white;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-size: 24px;
`

const CustomInput = styled.input`
  width: inherit;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: rgb(247,247,247);
  text-align: center;
`

const InputContainer = styled.div`
  width: inherit;
  height: 30px;
  position: relative;
`

const ButtonLeft  = styled.button`
  position: absolute;
  height: inherit;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  width: 20px;
  z-index: 2;
`

const ButtonRight  = styled.button`
  position: absolute;
  height: inherit;
  top: 50%;
  right: -5px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  font-size: 22px;
  font-weight: bold;
  width: 20px;
  z-index: 2;
`

const TextContainer = styled.p`
  width: 1043px;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
`

export async function getStaticProps(staticProps: any) {

    const prisma = new PrismaClient();
    let productInfo;

    try {
        productInfo = await prisma.product.findFirst({
            where: {
                productId: {
                    equals: +staticProps.params.id
                }
            }
        });
    } catch (e: any) {
        console.log(e.message);
    } finally {
        await prisma.$disconnect();
    }


    return {
        props: {
            productInfo
        },
    };
}

export async function getStaticPaths() {
    const prisma = new PrismaClient();
    let productInfo;

    try {
        productInfo = await prisma.product.findMany({});
    } catch (e: any) {
        console.log(e.message);
    } finally {
        await prisma.$disconnect();
    }

    if (productInfo) {
        const paths = productInfo.map((product) => {
            return {
                params: {
                    id: product.productId.toString(),
                },
            };
        });
        return {
            paths,
            fallback: false,
        };
    }

    return {

    }
}

interface IProductPageProps {
    productInfo: IDataItem
}

const ProductPage:React.FC<IProductPageProps> = ({productInfo}) => {
    const [quantity, setQuantity] = useState<number>(1);
    const {frontImageUrl, extraImageUrls, bannerImageUrls, itemName, rating, price, discountedPrice} = productInfo;
    const [mainImage, setMainImage] = useState<string>(frontImageUrl);

    const handleAddButtonClick = () => {
        setQuantity(prevState => prevState+1);
    }

    const handleRemoveButtonClick = () => {
        if (quantity===1) return;
        setQuantity(prevState => prevState-1);
    }

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value>=0) {
            setQuantity(Math.floor(+e.currentTarget.value));
        }
    }

    const handleImageClick = (index: number) => {
        setMainImage(extraImageUrls[index]);
    }

    return(
        <ProductPageContainer>
            <TopSectionContainer>
                <ImagesContainer>
                    <Image src={mainImage} alt="product-image" width={623} height={623} className={styles.imageRound}/>
                    <MultipleImageContainer>
                        {extraImageUrls.map((imageUrl, index) =>
                            <Image key={index} src={imageUrl} alt="small-image" width={109} height={109} className={styles.imageRound} onClick={()=>handleImageClick(index)}/>)}
                    </MultipleImageContainer>
                </ImagesContainer>
                <ItemInfoContainer>
                    <h1>{itemName}</h1>
                    <StarContainer>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <Image src="/icons/star.png" alt="star icon" width={24} height={24}/>
                        <span>
                            ({rating})
                        </span>
                    </StarContainer>
                    <PriceContainer>
                        <OriginalPriceContainer>${price}</OriginalPriceContainer>
                        <DiscountedPriceContainer>${discountedPrice}</DiscountedPriceContainer>
                    </PriceContainer>
                    <QuantityContainer>Quantity</QuantityContainer>
                    <InputContainer>
                        <ButtonLeft onClick={handleRemoveButtonClick}>-</ButtonLeft>
                        <CustomInput onChange={handleInputChange} type="text" value={quantity}/>
                        <ButtonRight onClick={handleAddButtonClick}>+</ButtonRight>
                    </InputContainer>
                    <AddToCartButton>
                        ADD TO CART
                    </AddToCartButton>
                </ItemInfoContainer>
            </TopSectionContainer>
            <TextContainer>A portion of every purchase at Bee Kind Shop is donated to Pollinator Partnership and other non-profit organizations that help save bee colonies around the globe.</TextContainer>
            <BottomSectionContainer>
                {
                    bannerImageUrls.map((imageUrl, index)=> <Image key={index} src={imageUrl} alt="small-image" width={280} height={280} className={styles.imageRound}/>)
                }
            </BottomSectionContainer>
        </ProductPageContainer>
    )
}

export default ProductPage