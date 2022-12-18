import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from "../components/header.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <HeaderComponent/>
        <Component {...pageProps} />
      </div>
  )
}
