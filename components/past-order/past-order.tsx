import styled from "styled-components";
import React from "react";
import {useQuery} from "@apollo/client";
import {productsByIdsQuery} from "../../graphql/queries/queries";
import {IOrderData} from "../../store/slices/orderSlice";
import CheckoutItem from "../checkout-item";
import roundDecimals from "../../utils/round-decimals";
import SkeletonOrderList from "../skeleton-order-list/skeleton-order-list";
import ContentLoader from "react-content-loader";
import useMediaQuery from "@mui/material/useMediaQuery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TopTextContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: fit-content;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 320px;
  }
`

const DateContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: fit-content;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom: -10px;
  margin-top: 10px;
  border-top: 1px solid black;

  @media (max-width: 800px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 320px;
  }
`

const CustomTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: ITextProps) => props.isCenter ? "center" : "flex-start" };
  width: ${(props: ITextProps) => props.width}px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`

interface ITextProps {
    width: number,
    isCenter: boolean
}

export interface IPastOrder {
    createdAt: string,
    productList: number[],
    quantity: number[],
    isSkeleton?: boolean
}

const TotalContainer = styled.div`
  display: flex;
  width: 750px;
  align-items: center;
  height: 80px;
  font-size: 30px;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 320px;
    font-size: 20px;
  }
`

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PastOrder: React.FC<IPastOrder> = ({isSkeleton = false, productList, quantity, createdAt}) => {
    const {data, loading} = useQuery(productsByIdsQuery, {
        variables: {
            id: productList
        }
    });

    const orderItems: IOrderData[] = data?.ProductsByMultipleIds.map((item: any, index: number) => ({...item, quantity: quantity[index]}));
    const orderDate = (new Date(createdAt)).toLocaleString();
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    return (
        <Container>
            <DateContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 320 : isSmallScreen ? 600: 750}>
                    Order Date:
                    {
                        !loading&&!isSkeleton ? orderDate : (
                            <ContentLoader
                                speed={2}
                                width={150}
                                height={20}
                                viewBox="-10 0 150 20"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
                            </ContentLoader>
                        )
                    }
                </CustomTextContainer>
            </DateContainer>
            <TopTextContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 80 : isSmallScreen ? 150: 200}>
                    Product
                </CustomTextContainer>
                <CustomTextContainer isCenter={false} width={isMobileScreen ? 80 : isSmallScreen ? 150: 200}>
                    Description
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 80 : isSmallScreen ? 150: 200}>
                    Quantity
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={isMobileScreen ? 80 : isSmallScreen ? 150: 200}>
                    Price
                </CustomTextContainer>
            </TopTextContainer>
            {
                (loading||isSkeleton) ? (
                    <SkeletonOrderList/>
                ) : (
                    <>
                        <CartItemsContainer>
                            {
                                orderItems?.map((item, index) => <CheckoutItem isOrder={true} key={index} {...item}/>)
                            }
                        </CartItemsContainer>
                        <TotalContainer>
                            TOTAL: ${
                            roundDecimals(orderItems?.reduce((totalSum, {quantity, price, discountedPrice})=>{
                                return totalSum + (quantity as number) * (discountedPrice ? discountedPrice : price);
                            }, 0))
                        }
                        </TotalContainer>
                    </>
                )
            }
        </Container>
    )
}

export default PastOrder

