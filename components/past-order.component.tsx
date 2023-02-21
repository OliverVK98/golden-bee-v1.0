import styled from "styled-components";
import React from "react";
import {useQuery} from "@apollo/client";
import {productsByIdsQuery} from "../graphql/queries/queries";
import {IOrderData} from "../store/slices/orderSlice";
import CheckoutItemComponent from "./checkout-item.component";
import roundDecimals from "../utils/round-decimals";
import SkeletonOrderListComponent from "./skeleton-order-list.component";
import ContentLoader from "react-content-loader";

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
`

const CustomTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: ITextProps) => props.isCenter ? "center" : "flex-start" };
  width: ${(props: ITextProps) => props.width}px;
  font-size: 20px;
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
`

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PastOrderComponent: React.FC<IPastOrder> = ({isSkeleton = false, productList, quantity, createdAt}) => {
    const {data, loading} = useQuery(productsByIdsQuery, {
        variables: {
            id: productList
        }
    });

    const orderItems: IOrderData[] = data?.ProductsByMultipleIds.map((item: any, index: number) => ({...item, quantity: quantity[index]}));
    const orderDate = (new Date(createdAt)).toLocaleString();

    return (
        <Container>
            <DateContainer>
                <CustomTextContainer isCenter={false} width={750}>
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
                <CustomTextContainer isCenter={false} width={200}>
                    Product
                </CustomTextContainer>
                <CustomTextContainer isCenter={false} width={250}>
                    Description
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={150}>
                    Quantity
                </CustomTextContainer>
                <CustomTextContainer isCenter={true}  width={150}>
                    Price
                </CustomTextContainer>
            </TopTextContainer>
            {
                (loading||isSkeleton) ? (
                    <SkeletonOrderListComponent/>
                ) : (
                    <>
                        <CartItemsContainer>
                            {
                                orderItems?.map((item, index) => <CheckoutItemComponent isOrder={true} key={index} {...item}/>)
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

export default PastOrderComponent

