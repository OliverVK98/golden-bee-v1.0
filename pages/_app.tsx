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
import {useRouter} from "next/router";
import {ReactElement, ReactNode, useEffect} from "react";
import {SessionProvider} from "next-auth/react";
import {NextPage} from "next";
import BurgerMenuComponent from "../components/burger-menu.component";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps}: AppPropsWithLayout) {
    const persistor = persistStore(store);
    const router = useRouter();
    useEffect(() => storePathValues, [router.asPath]);

    if (Component.getLayout) {
        return Component.getLayout(
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <SessionProvider session={pageProps.session}>
                            <ApolloProvider client={apolloClient}>
                                <Component {...pageProps} />
                                <SignInModalComponent/>
                                <SignUpModalComponent/>
                                <CartComponent/>
                                <BurgerMenuComponent/>
                            </ApolloProvider>
                        </SessionProvider>
                    </PersistGate>
                </Provider>
        )
    }

    return (
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            <SessionProvider session={pageProps.session}>
                              <ApolloProvider client={apolloClient}>
                                <HeaderComponent/>
                                <Component {...pageProps} />
                                <SignInModalComponent/>
                                <SignUpModalComponent/>
                                <CartComponent/>
                                <BurgerMenuComponent/>
                              </ApolloProvider>
                            </SessionProvider>
                        </PersistGate>
                    </Provider>
      )
}

function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    storage.setItem("currentPath", globalThis.location.pathname);
}
