import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";


const link = createHttpLink({
    uri: 'https://gapi.storyblok.com/v1/api',
    headers: {
        token: process.env.NEXT_PUBLIC_STORYBLOCK_TOKEN,
        version: 'draft'
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export default client