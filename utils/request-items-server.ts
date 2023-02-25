import apolloClient from "../lib/apollo";
import {productsByIdsQuery} from "../graphql/queries/queries";

const requestItemsServer = async ([a, b, c, d]: number[]) => {
    return await apolloClient.query({
        query: productsByIdsQuery,
        variables: {
            id: [a, b, c, d]
        }
    }).then((data) => data.data.ProductsByMultipleIds);
}

export default requestItemsServer
