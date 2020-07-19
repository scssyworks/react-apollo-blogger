import { makeExecutableSchema } from 'graphql-tools';
import { Article } from './schemas/Article';
import { Comment } from './schemas/Comment';
import { Mutation } from './schemas/Mutation';
import { User } from './schemas/User';
import { resolvers } from './resolvers';

const Query = `
    type Query {
        articles(userId: ID!): [Article]
        article(id: ID!): Article
        user(id: ID!): User
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [Article, Comment, User, Query, Mutation],
    resolvers
});

export { schema };