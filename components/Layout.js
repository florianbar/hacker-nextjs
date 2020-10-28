import Head from 'next/head';
import Link from 'next/link';
//import Router from 'next/router';
//import NProgress from 'nprogress';

// Router.onRouteChangeStart = url => {
//     console.log(url);
//     NProgress.start();
// };

// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();

export default function Layout({ children, title, description }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <div className="container">
                <nav>
                    <Link href="/">
                        <a>
                            <span className="main-title">Hacker Next</span>
                        </a>
                    </Link>
                </nav>

                {children}

                <style jsx>{`
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        background: #f6f6ef;
                    }
                    nav {
                        background: #f60;
                        padding: 1em;
                    }
                    nav > * {
                        display: inline-block;
                        color: #000;
                    }
                    nav a {
                        text-decoration: none;
                    }
                    nav .main-title {
                        font-weight: bold;
                    }
                `}</style>
                <style global jsx>{`
                   body {
                       background: #fff;
                       font-family: Verdana, Geneva, sans-serif;
                   } 
                `}</style>
            </div>
        </div>
    );
};