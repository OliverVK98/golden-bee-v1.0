import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from "../components/header.component";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../lib/apollo";
import SignInModalComponent from "../components/sign-in-modal.component";
import {ModalSignInProvider} from "../contexts/sign-in-modal.context";
import SignUpModalComponent from "../components/sign-up-modal.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ModalSignInProvider>
          <ApolloProvider client={apolloClient}>
            <HeaderComponent/>
            <Component {...pageProps} />
            <SignInModalComponent/>
            <SignUpModalComponent/>
          </ApolloProvider>
      </ModalSignInProvider>
  )
}
