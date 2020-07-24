import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    gql
} from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { onError } from '@apollo/client/link/error';
import { typeDefs, resolvers } from './resolvers';
// @ts-ignore
import { getCookie } from 'argon-storage';

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.forEach(
                    ({ message, locations, path }) => {
                        console.error(
                            `[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                        );
                    }
                );
            }
            if (networkError) {
                console.error(`[Network Error]: ${networkError}`);
            }
        }),
        new HttpLink({
            uri: 'http://localhost:4000/graphql',
            credentials: 'same-origin'
        })
    ]),
    typeDefs,
    resolvers
});


// Writing local cache defaults
const loggedInUserId = getCookie('loggedInUserId') || '';
cache.writeQuery({
    query: gql`
        query UserData {
            firstName
            lastName
            username
            loggedInUserId
        }
    `,
    data: {
        firstName: '',
        lastName: '',
        username: '',
        loggedInUserId
    }
});

export { client };