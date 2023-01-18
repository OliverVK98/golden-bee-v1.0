import apolloClient from "../../lib/apollo";
import React from "react";
import ProductPageComponent from "../../components/product-page.component";
import {getProductsByCollectionIdQuery, specificCollectionProductsDataQuery} from "../../graphql/queries/queries";
import {IFrontPageItem} from "../all";

export async function getStaticProps() {
    const {data: {SpecificCollectionQuery}} = await apolloClient.query({
        query: getProductsByCollectionIdQuery,
        variables: {
            collectionId: 4,
        }
    })

    const {data: {ProductsByMultipleIds}} = await apolloClient.query({
        query: specificCollectionProductsDataQuery,
        variables: {
            id: SpecificCollectionQuery[0].productId
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

const SunflowerThemeCollectionComponent: React.FC<IAllProductsProps> = ({data}) => {
    return (
        <ProductPageComponent data={data} title="Sunflower Theme"/>
    )
}

export default SunflowerThemeCollectionComponent