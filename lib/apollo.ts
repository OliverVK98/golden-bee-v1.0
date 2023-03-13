import {ApolloClient, InMemoryCache} from "@apollo/client";
import {WEBSITE_URL} from "../config/const";

const apolloClient = new ApolloClient({
    uri: `${WEBSITE_URL}/api/graphql`,
    cache: new InMemoryCache(),
});

export default apolloClient