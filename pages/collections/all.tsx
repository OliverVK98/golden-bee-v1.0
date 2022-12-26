import styled from "styled-components";
import {gql} from "@apollo/client";
import apolloClient from "../../lib/apollo";
import React from "react";
import FrontPageItemComponent from "../../components/front-page-item.component";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 250px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export async function getStaticProps() {
    const frontPageProductDataQuery = gql`
        query {
            ProductsList {
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

    const {data} = await apolloClient.query({
        query: frontPageProductDataQuery
    })

    return {
        props: {
            data: data.ProductsList,
        }
    }
}

export interface IFrontPageItem{
    productId: number,
    price: number,
    discountedPrice: number,
    frontImageUrl: string,
    rating: number,
    itemName: string,
    isAvailable: boolean
}

interface IAllProductsProps {
    data: IFrontPageItem[]
}

const AllProducts: React.FC<IAllProductsProps> = ({data}) => {

    return (
        <Container>
            <GridContainer>
                {data.map((itemInfo) => <FrontPageItemComponent key={itemInfo.productId} {...itemInfo}/>)}
            </GridContainer>
        </Container>

    )
}

export default AllProducts