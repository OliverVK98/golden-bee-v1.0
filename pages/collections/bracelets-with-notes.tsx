import apolloClient from "../../lib/apollo";
import React from "react";
import ProductPageComponent from "../../components/product-page.component";
import {
    productsFromSpecificCollection,
} from "../../graphql/queries/queries";
import {ContentContainer, CustomTitle, IFrontPageItem} from "../all";

export async function getStaticProps() {
    const {data} = await apolloClient.query({
        query: productsFromSpecificCollection,
        variables: {
            collectionId: 1,
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

const BraceletsWithNotesCollectionComponent: React.FC<IAllProductsProps> = ({data}) => {

    return (
        <ContentContainer>
            <CustomTitle>Bracelets With Notes</CustomTitle>
            <ProductPageComponent initialData={data}/>
        </ContentContainer>
    )
}

export default BraceletsWithNotesCollectionComponent