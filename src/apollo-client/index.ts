import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { typeDefs, resolvers } from './resolvers';

const cache = new InMemoryCache();
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
        newUser: {
            __typename: 'NewUser',
            firstName: '',
            lastName: '',
            username: ''
        }
    }
});