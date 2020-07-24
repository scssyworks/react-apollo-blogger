import gql from 'graphql-tag';
import { InMemoryCache } from '@apollo/client/cache';
import { Resolvers } from '@apollo/client';
import { CurrentUser } from '../../components/SignUpForm/queries/getCurrentUserQuery';
// @ts-ignore
import { setCookie } from 'argon-storage';

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

const resolverFn = (type: string) => {
    return (_: any, data: Partial<CurrentUser>, { cache }: { cache: InMemoryCache }): string => {
        let currentData: any;
        switch (type) {
            case 'firstName': currentData = data.firstName; break;
            case 'lastName': currentData = data.lastName; break;
            default: currentData = currentData = data.username;
        }
        cache.modify({
            fields: {
                [type]: () => currentData
            }
        });
        return 'success';
    };
};

export const resolvers: AppResolvers = {
    Mutation: {
        updateFirstName: resolverFn('firstName'),
        updateLastName: resolverFn('lastName'),
        updateUsername: resolverFn('username'),
        setUserId: (_: any, { id }: { id: string }, { cache }: { cache: InMemoryCache }): string => {
            cache.modify({
                fields: {
                    loggedInUserId: () => {
                        setCookie('loggedInUserId', id);
                        return id;
                    }
                }
            });
            return 'success';
        }
    }
};