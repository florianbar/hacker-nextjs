import Error from 'next/error';

import StoryList from '../components/StoryList';

export async function getStaticProps(context) {
    let storiesData = [];

    try {
        const response = await fetch("https://node-hnapi.herokuapp.com/news?page=1");
        storiesData = await response.json();
    } catch (error) {
        console.log(error);
    }
    
    return {
        props: {
            stories: storiesData
        }
    };
};

export default function Index({ stories }) {
    if (stories.length === 0) {
        return <Error statusCode={503} />;
    }

    return (
        <div>
            <h1>Hacker Next</h1>
            <StoryList stories={stories} />
        </div>
    );
};
