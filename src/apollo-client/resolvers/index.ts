import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Resolvers } from 'apollo-client';
import { CurrentUser } from '../../components/SignUpForm/queries/getCurrentUserQuery';

export const typeDefs = gql`
    type Query {
        firstName: String
        lastName: String
        username: String
    }

    type Mutation {
        updateFirstName(firstName: String!): String
        updateLastName(lastName: String!): String
        updateUsername(username: String!): String
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

const resolverFn = (_: any, data: Partial<CurrentUser>, { cache }: { cache: InMemoryCache }): any => {
    cache.writeData({
        data
    });
    return 'success';
};

export const resolvers: AppResolvers = {
    Mutation: {
        updateFirstName: resolverFn,
        updateLastName: resolverFn,
        updateUsername: resolverFn
    }
};