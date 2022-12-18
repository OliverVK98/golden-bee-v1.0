import Document, {Html, Main, Head, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preload" href="/fonts/MartianMono-VariableFont_wdth,wght.ttf"
                          as="font" crossOrigin="anonymous"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument