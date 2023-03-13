import apolloClient from "../../lib/apollo";
import React from "react";
import ProductPage from "../../components/product-page/product-page";
import {
    productsFromSpecificCollection,
} from "../../graphql/queries/queries";
import {ContentContainer, CustomTitle, IFrontPageItem} from "../all";

export async function getServerSideProps() {
    const {data} = await apolloClient.query({
        query: productsFromSpecificCollection,
        variables: {
            collectionId: 7,
        }
    })

    return {
        props: {
            data: data.ProductsByCollectionId,
        }
    }
}

interface IAllProductsProps {
    data: IFrontPageItem[]
}

const ModernStylesComponent: React.FC<IAllProductsProps> = ({data}) => {
    return (
        <ContentContainer>
            <CustomTitle>Premium Jewelry</CustomTitle>
            <ProductPage initialData={data}/>
        </ContentContainer>
    )
}

export default ModernStylesComponent