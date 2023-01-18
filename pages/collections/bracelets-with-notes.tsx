import apolloClient from "../../lib/apollo";
import React from "react";
import ProductPageComponent from "../../components/product-page.component";
import {getProductsByCollectionIdQuery, specificCollectionProductsDataQuery} from "../../graphql/queries/queries";
import {IFrontPageItem} from "../all";

export async function getServerSideProps() {
    const {data: {SpecificCollectionQuery}} = await apolloClient.query({
        query: getProductsByCollectionIdQuery,
        variables: {
            collectionId: 1,
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

const BraceletsWithNotesCollectionComponent: React.FC<IAllProductsProps> = ({data}) => {

    return (
        <ProductPageComponent data={data} title="Bracelets With Notes"/>
    )
}

export default BraceletsWithNotesCollectionComponent