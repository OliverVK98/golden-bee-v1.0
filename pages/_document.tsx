import Document, {Html, Main, Head, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                    <Main/>
                    <div id="modal-portal"/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument