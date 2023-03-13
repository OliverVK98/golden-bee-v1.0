import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/header/header";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "../lib/apollo";
import SignInModal from "../components/sign-in-modal/sign-in-modal";
import SignUpModal from "../components/sign-up-modal/sign-up-modal";
import {Provider} from "react-redux"
import {store} from "../store/store";
import Cart from "../components/cart";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {useRouter} from "next/router";
import {ReactElement, ReactNode, useEffect} from "react";
import {SessionProvider} from "next-auth/react";
import {NextPage} from "next";
import BurgerMenu from "../components/burger-menu";
import Head from "next/head";

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
                            <Head>
                                <title>Golden Bee</title>
                            </Head>
                            <Component {...pageProps} />
                            <SignInModal/>
                            <SignUpModal/>
                            <Cart/>
                            <BurgerMenu/>
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
                        <Head>
                            <title>Golden Bee</title>
                        </Head>
                        <Header key={Math.random()}/>
                        <Component {...pageProps} />
                        <SignInModal />
                        <SignUpModal />
                        <Cart />
                        <BurgerMenu />
                    </ApolloProvider>
                </SessionProvider>
            </PersistGate>
        </Provider>
    );
}

function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    storage.setItem("currentPath", globalThis.location.pathname);
}
