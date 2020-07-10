import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
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
    ])
});