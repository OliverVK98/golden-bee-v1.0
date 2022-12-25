import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from "../components/header.component";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../lib/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={apolloClient}>
        <HeaderComponent/>
        <Component {...pageProps} />
      </ApolloProvider>
  )
}
