import styled from "styled-components";
import React, {useState} from "react";
import Image from "next/image";
import {IDataItem} from "../../data/data";
import styles from "../../styles/FrontImage.module.css"
import PreviewFourItemsComponent from "../../components/preview-four-items.component";
import {gql, useQuery} from "@apollo/client";
import apolloClient from "../../lib/apollo";
import EmailInputComponent from "../../components/email-input.component";
import FooterContainerComponent from "../../components/footer-container.component";
import {useDispatch} from "react-redux";
import {addCartItems, addOneCartItemById} from "../../redux/slices/cartSlice";

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
  cursor: pointer;
  font-weight: bold;
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
`

const ProposedItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`

const RelativeContainer = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  height: 390px;
  width: 1060px;
  display: block;
  overflow: hidden;
`

const ProposedTextContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,222,89);
  width: 300px;
  height: 2rem;
`

export async function getStaticProps(staticProps: any) {
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

export async function getStaticPaths() {
    const allIdsDataQuery = gql`
        query {
            ProductsList {
                productId
            }
        }
    `;

    const {data: {ProductsList}} = await apolloClient.query({
        query: allIdsDataQuery
    })

    const paths = ProductsList.map((product: IOnlyIdProduct) => {
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

    const productsByIdsQuery = gql`
        query ($id: [Int]!){
            ProductsByMultipleIds(id: $id) {
                productId
                itemName
                rating
                price
                discountedPrice
                frontImageUrl
                isAvailable
            }
        }
    `;

    const {loading, data, error} = useQuery(productsByIdsQuery, {
        variables: {id: [1, 2, 3, 4]}
    })

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
                    <Image src={mainImage} alt="product-image" width={623} height={623}
                           className={styles.imageRound} priority={true}/>
                    <MultipleImageContainer>
                        {extraImageUrls.map((imageUrl, index) =>
                            <Image key={index} src={imageUrl} alt="small-image" width={109} height={109}
                                   className={styles.imageRound} onClick={()=>handleImageClick(index)}
                                   priority={true} style={{cursor: "pointer"}}/>)}
                    </MultipleImageContainer>
                </ImagesContainer>
                <ItemInfoContainer>
                    <h1>{itemName}</h1>
                    {rating!=0 && <StarContainer>
                        {[0, 1, 2, 3, 4].map(el => <Image src="/icons/star.png" alt="star icon" width={24}
                                                          height={24} key={el}/>)}
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
            <TextContainer>A portion of every purchase at Bee Kind Shop is donated to Pollinator Partnership and other non-profit organizations that help save bee colonies around the globe.</TextContainer>
            <BottomSectionContainer>
                {
                    bannerImageUrls.map((imageUrl, index)=> <Image key={index} src={imageUrl} alt="small-image"
                                                                   width={280} height={280} className={styles.imageRound} priority={true}/>)
                }
            </BottomSectionContainer>
            <ProposedItemsContainer>
                <ProposedTextContainer>
                    You may also like
                </ProposedTextContainer>
                <RelativeContainer>
                    <PreviewFourItemsComponent transitionActive={false} dataArr={data?.ProductsByMultipleIds}/>
                </RelativeContainer>
            </ProposedItemsContainer>
            <EmailInputComponent mainColor={"white"} title={"SUBSCRIBE FOR A CHANCE TO WIN A $100 GIFT CARD"}/>
            <FooterContainerComponent/>
        </ProductPageContainer>
    )
}

export default ProductPage