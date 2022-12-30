import {gql} from "@apollo/client";
import apolloClient from "../lib/apollo";
import React from "react";
import ProductPageComponent from "../components/product-page.component";

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

const AllProductsComponent: React.FC<IAllProductsProps> = ({data}) => {
    return (
        <ProductPageComponent data={data} title="Save Bees Collection"/>
    )
}

export default AllProductsComponent