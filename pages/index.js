import Link from 'next/link';
import Error from 'next/error';

import Layout from '../components/Layout';
import StoryList from '../components/StoryList';

export async function getServerSideProps({ query }) {
    let storiesData = [];
    const page = Number(query.page) || 1;

    try {
        const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
        storiesData = await response.json();
    } catch (error) {
        console.log(error);
    }
    
    return {
        props: {
            stories: storiesData,
            page
        }
    };
};

const Index = ({ stories, page }) => {
    if (stories.length === 0) {
        return <Error statusCode={503} />;
    }

    return (
        <Layout title="Hacker Next" description="A Hacker News Clone made with Next.js">
            <StoryList stories={stories} />

            <footer>
                <Link href={`/?page=${page + 1}`}>
                    <a>Page {page + 1}</a>   
                </Link>
            </footer>

            <style jsx>{`
                footer {
                    padding: 1em;
                }
                footer a {
                    font-weight: bold;
                    color: #000;
                    text-decoration: none;
                }
            `}</style>
        </Layout>
    );
};

export default Index;
