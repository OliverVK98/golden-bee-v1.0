import apolloClient from "../../lib/apollo";
import React from "react";
import ProductPageComponent from "../../components/product-page.component";
import {getProductsByCollectionIdQuery, specificCollectionProductsDataQuery} from "../../graphql/queries/queries";
import {IFrontPageItem} from "../all";

export async function getStaticProps() {
    const {data: {SpecificCollectionQuery}} = await apolloClient.query({
        query: getProductsByCollectionIdQuery,
        variables: {
            collectionId: 2,
        }
    })

    const {data: {ProductsByMultipleIds}} = await apolloClient.query({
        query: specificCollectionProductsDataQuery,
        variables: {
            id: SpecificCollectionQuery.map((arr: {productId: number}) => arr.productId)
        }
    })

    return {
        props: {
            data: ProductsByMultipleIds,
        }
    }
}

interface IAllProductsProps {
    data: IFrontPageItem[]
}

const SilverStyleJewelryCollectionComponent: React.FC<IAllProductsProps> = ({data}) => {
    return (
        <ProductPageComponent data={data} title="Silver Style Jewelry"/>
    )
}

export default SilverStyleJewelryCollectionComponent