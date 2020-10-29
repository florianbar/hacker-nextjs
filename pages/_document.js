import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};