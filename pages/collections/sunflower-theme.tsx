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
            collectionId: 4,
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

const SunflowerThemeCollectionComponent: React.FC<IAllProductsProps> = ({data}) => {
    return (
        <ContentContainer>
            <CustomTitle>Sunflower Theme</CustomTitle>
            <ProductPage initialData={data}/>
        </ContentContainer>
    )
}

export default SunflowerThemeCollectionComponent