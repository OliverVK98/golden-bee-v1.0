import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from "../components/header.component";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../lib/apollo";
import SignInModalComponent from "../components/sign-in-modal.component";
import SignUpModalComponent from "../components/sign-up-modal.component";
import {Provider} from "react-redux"
import {store} from "../store/store";
import CartComponent from "../components/cart.component";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

export async function getInitialProps () {
    return {
        props: {
            isAuth: true
        }
    }
}

export default function App({ Component, pageProps}: AppProps) {
    const persistor = persistStore(store);

    return (
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                          <ApolloProvider client={apolloClient}>
                            <HeaderComponent/>
                            <Component {...pageProps} />
                            <SignInModalComponent/>
                            <SignUpModalComponent/>
                            <CartComponent/>
                          </ApolloProvider>
                        </PersistGate>
                    </Provider>
      )
}


