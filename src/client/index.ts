import {
    ApolloClient,
    ApolloLink,
    NormalizedCacheObject,
    HttpLink,
    gql
} from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { onError } from '@apollo/client/link/error';
import { typeDefs, resolvers } from './resolvers';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';

const cache = new InMemoryCache();

persistCache({
    cache,
    storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>
});

export const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.forEach(
                    ({ message, locations, path }) => {
                        console.log(
                            `[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                        );
                    }
                );
            }
            if (networkError) {
                console.log(`[Network Error]: ${networkError}`);
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
cache.writeQuery({
    query: gql`
        query UserData {
            firstName
            lastName
            username
        }
    `,
    data: {
        firstName: '',
        lastName: '',
        username: ''
    }
});