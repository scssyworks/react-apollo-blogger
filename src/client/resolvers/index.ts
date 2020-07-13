import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Resolvers } from 'apollo-client';
import { CurrentUser } from '../../components/SignUpForm/queries/getCurrentUserQuery';

export const typeDefs = gql`
    type Query {
        firstName: String
        lastName: String
        username: String
        loggedInUserId: ID
    }

    type Mutation {
        updateFirstName(firstName: String!): String
        updateLastName(lastName: String!): String
        updateUsername(username: String!): String
        setUserId(id: ID!): String
    }
`;

type ResolverFn = (
    parent: any,
    args: any,
    { cache }: { cache: InMemoryCache }
) => any;

interface ResolverMap {
    [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
    Mutation: ResolverMap
}

const resolverFn = (_: any, data: Partial<CurrentUser>, { cache }: { cache: InMemoryCache }): string => {
    cache.writeData({
        data
    });
    return 'success';
};

export const resolvers: AppResolvers = {
    Mutation: {
        updateFirstName: resolverFn,
        updateLastName: resolverFn,
        updateUsername: resolverFn,
        setUserId: (_: any, { id }: { id: string }, { cache }: { cache: InMemoryCache }): string => {
            cache.writeData({
                data: {
                    loggedInUserId: id
                }
            });
            return 'success';
        }
    }
};