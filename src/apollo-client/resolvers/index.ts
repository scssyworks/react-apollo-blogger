import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Resolvers } from 'apollo-client';
import { CURRENT_USER, CurrentUser } from '../../components/SignUpForm/queries/getCurrentUserQuery';
import { clean } from '../../utils';

export const typeDefs = gql`
    type Query {
        newUser: NewUser!
    }

    type NewUser {
        firstName: String
        lastName: String
        username: String
    }

    type Mutation {
        updateUser(firstName:String, lastName: String, username: String): NewUser
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

export const resolvers: AppResolvers = {
    Mutation: {
        updateUser: (_: any, args: Partial<CurrentUser>, { cache }: { cache: InMemoryCache }): any => {
            const { newUser } = cache.readQuery({ query: CURRENT_USER }) as { newUser: Partial<CurrentUser> };
            const updatedUser = Object.assign(newUser, clean(args));
            cache.writeData({
                data: {
                    newUser: updatedUser
                }
            });
            return args;
        }
    }
};