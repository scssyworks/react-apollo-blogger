import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
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
cache.writeData({
    data: {
        firstName: '',
        lastName: '',
        username: ''
    }
});