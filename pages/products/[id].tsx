import styled from "styled-components";
import React, {useState} from "react";
import Image from "next/image";
import {IDataItem} from "../../data/data";
import styles from "../../styles/FrontImage.module.css"
import {gql} from "@apollo/client";
import apolloClient from "../../lib/apollo";
import EmailInput from "../../components/email-input/email-input";
import FooterContainer from "../../components/footer-container/footer-container";
import {useDispatch} from "react-redux";
import {addCartItems} from "../../store/slices/cartSlice";
import ItemsSuggestion from "../../components/items-suggestion/items-suggestion";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`

const TopSectionContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 680px) {
    gap: 10px;
  }
`

const  BottomSectionContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  @media (max-width: 680px) {
    flex-direction: column;
    margin-bottom: -60px;
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 680px) {
    justify-content: center;
  }
`

const MultipleImageContainer = styled.div`
  display: flex;
  gap: 15px;
`

const MultipleGridImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  
  h1 {
    @media (max-width: 1064px) {
      font-size: 22px;
    }
    @media (max-width: 680px) {
      font-size: 14px;
    }
    
  }
  
  @media (max-width: 1064px) {
    width: 250px;
  }

  @media (max-width: 680px) {
    width: 150px;
  }
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
  cursor: pointer;
  font-weight: bold;
  
  @media (max-width: 680px) {
    height: 30px;
    font-size: 12px;
  }
  
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
  cursor: pointer;
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
  cursor: pointer;
`

const TextContainer = styled.p`
  width: 1043px;
  text-align: center;
  font-weight: bold;
  font-size: 22px;

  @media (max-width: 1064px) {
    width: 100%;
  }

  @media (max-width: 680px) {
    font-size: 14px;
  }
`

export async function getServerSideProps(staticProps: any) {
    const queryById = gql`
        query($id: Int!) {
            ProductById(id: $id) {
                productId
                bannerImageUrls
                discountedPrice
                extraImageUrls
                frontImageUrl
                itemName
                price
                rating
            }
        }
    `

    const {data: {ProductById}} = await apolloClient.query({
        query: queryById,
        variables: {
            id: +staticProps.params.id
        }
    })

    return {
        props: {
            ProductById
        },
    };
}

interface IOnlyIdProduct {
    productId: String
}

// export async function getStaticPaths() {
//     const allIdsDataQuery = gql`
//         query {
//             ProductsList {
//                 productId
//             }
//         }
//     `;
//
//     const {data: {ProductsList}} = await apolloClient.query({
//         query: allIdsDataQuery
//     })
//
//     const paths = ProductsList.map((product: IOnlyIdProduct) => {
//         return {
//             params: {
//                 id: product.productId.toString(),
//             },
//         };
//     });
//
//
//     return {
//         paths,
//         fallback: false,
//     };
//
// }

interface IProductPageProps {
    ProductById: IDataItem
}

const ProductPage:React.FC<IProductPageProps> = ({ProductById}) => {
    const [quantity, setQuantity] = useState<number>(1);
    const {frontImageUrl, extraImageUrls, bannerImageUrls, itemName, rating, price, discountedPrice, productId} = ProductById;
    const [mainImage, setMainImage] = useState<string>(frontImageUrl);
    const infoToAdd = {
        frontImageUrl,
        itemName,
        price,
        discountedPrice,
        productId: productId as number,
        quantity
    }
    const dispatch = useDispatch();
    const isLaptopScreen = useMediaQuery('(max-width: 1064px)');
    const isSmallScreen = useMediaQuery('(max-width: 680px)');

    const handleAddButtonClick = () => {
        setQuantity(prevState => prevState+1);
    }

    const handleRemoveButtonClick = () => {
        if (quantity===1) return;
        setQuantity(prevState => prevState-1)
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
                    <Image src={mainImage} alt="product-image" width={isSmallScreen ? 160 : isLaptopScreen ? 400 : 623} height={isSmallScreen ? 160 : isLaptopScreen ? 400 : 623}
                           className={styles.imageRound} priority={true}/>
                    {!isSmallScreen && <MultipleImageContainer>
                        {extraImageUrls.map((imageUrl, index) =>
                            <Image key={index} src={imageUrl} alt="small-image" width={isLaptopScreen ? 80 : 109}
                                   height={isLaptopScreen ? 80 : 109}
                                   className={styles.imageRound} onClick={() => handleImageClick(index)}
                                   priority={true} style={{cursor: "pointer"}}/>)}
                    </MultipleImageContainer>}
                </ImagesContainer>
                <ItemInfoContainer>
                    <h1>{itemName}</h1>
                    {rating!=0 && <StarContainer>
                        {[0, 1, 2, 3, 4].map(el => <Image src="/icons/star.png" alt="star icon" width={isLaptopScreen ? 16 : 24}
                                                          height={isLaptopScreen ? 16 : 24} key={el}/>)}
                        <span>
                            ({rating})
                        </span>
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
                    <QuantityContainer>Quantity</QuantityContainer>
                    <InputContainer>
                        <ButtonLeft onClick={handleRemoveButtonClick}>-</ButtonLeft>
                        <CustomInput onChange={handleInputChange} type="text" value={quantity}/>
                        <ButtonRight onClick={handleAddButtonClick}>+</ButtonRight>
                    </InputContainer>
                    <AddToCartButton onClick={()=> {
                        dispatch(addCartItems(infoToAdd));
                        setQuantity(1);
                    }}>
                        ADD TO CART
                    </AddToCartButton>
                </ItemInfoContainer>
            </TopSectionContainer>
            {isSmallScreen && <MultipleGridImageContainer>
                {extraImageUrls.map((imageUrl, index) =>
                    <Image key={index} src={imageUrl} alt="small-image" width={110}
                           height={110}
                           className={styles.imageRound} onClick={() => handleImageClick(index)}
                           priority={true} style={{cursor: "pointer"}}/>)}
            </MultipleGridImageContainer>}
            <TextContainer>A portion of every purchase at Bee Kind Shop is donated to Pollinator Partnership and other non-profit organizations that help save bee colonies around the globe.</TextContainer>
            <BottomSectionContainer>
                {
                    bannerImageUrls.map((imageUrl, index)=> <Image key={index} src={imageUrl} alt="small-image"
                                                                   width={isLaptopScreen ? 200 :280} height={isLaptopScreen ? 200 :280} className={styles.imageRound} priority={true}/>)
                }
            </BottomSectionContainer>
            <ItemsSuggestion/>
            <EmailInput mainColor={"white"} title={"SUBSCRIBE FOR A CHANCE TO WIN A $100 GIFT CARD"}/>
            <FooterContainer/>
        </ProductPageContainer>
    )
}

export default ProductPage