import {gql, useQuery} from "@apollo/client";
import apolloClient from "../lib/apollo";
import React, {useEffect, useState} from "react";
import ProductPageComponent from "../components/product-page.component";
import {
    frontPageProductDataQuery,
    getProductsByCollectionIdQuery,
    getProductsByCollectionIdQueryString
} from "../graphql/queries/queries";
import SearchBarComponent from "../components/search-bar.component";
import axios from "axios";
import styled from "styled-components";

export interface IFrontPageItem{
    productId: number,
    price: number,
    discountedPrice: number,
    frontImageUrl: string,
    rating: number,
    itemName: string,
    isAvailable: boolean,
    isImageLoadPriority?: boolean
}

interface IAllProductsProps {
    initialData: IFrontPageItem[]
}

const CustomTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 40px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export async function getStaticProps() {
    const {data} = await apolloClient.query({
        query: frontPageProductDataQuery
    })

    return {
        props: {
            initialData: data.ProductsList,
        }
    }
}


const AllProductsComponent: React.FC<IAllProductsProps> = ({initialData}) => {
    const [displayData, setDisplayData] = useState(initialData);
    const [displayDataIndex, setDisplayDataIndex] = useState<number>(3);
    const {data, loading} = useQuery(getProductsByCollectionIdQuery, {
        variables: {
            collectionId: displayDataIndex
        }
    });

    useEffect(()=> {
        console.log(data?.productId);
    }, [data])


    return (
        <ContentContainer>
            <CustomTitle>Save Bees Collection</CustomTitle>
            <SearchBarComponent setDisplayDataIndex={setDisplayDataIndex} setDisplayData={setDisplayData}/>
            <ProductPageComponent dataIsLoading={displayDataIndex!=0 && loading} data={displayData}/>
        </ContentContainer>
    )
}

export default AllProductsComponent