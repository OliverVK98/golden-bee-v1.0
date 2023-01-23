import {gql} from "@apollo/client";

export const specificCollectionProductsDataQuery = gql`
    query($id: [Int]!) {
        ProductsByMultipleIds(id: $id) {
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

export const getProductsByCollectionIdQuery = gql`
    query($collectionId: Int!) {
        SpecificCollectionQuery(collectionId: $collectionId) {
            productId
        }
    }
`;

export const getProductsByCollectionIdQueryString = gql`
    query($collectionId: Int!) {
        SpecificCollectionQuery(collectionId: $collectionId) {
            productId
        }
    }
`;

export const frontPageProductDataQuery = gql`
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

export const productsFromSpecificCollection = gql`
    query($collectionId: Int!) {
        ProductsByCollectionId(collectionId: $collectionId) {
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