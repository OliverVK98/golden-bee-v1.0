import {ApolloClient, InMemoryCache} from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
    cache: new InMemoryCache(),
});

export default apolloClient