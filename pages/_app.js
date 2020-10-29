import React from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
        <Head>
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="hacker-next" />
            <meta name="apple-mobile-web-app-title" content="hacker-next" />
            <meta name="theme-color" content="#f60" />
            <meta name="msapplication-navbutton-color" content="#f60" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="msapplication-starturl" content="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Component {...pageProps} />
    </React.Fragment>
  );
};