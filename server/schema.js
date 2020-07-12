const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        articles(userId: ID!): [Article]
        article(id: ID!): Article
        user(id: ID!): User
    }

    type User {
        id: ID
        firstName: String
        lastName: String
        username: String
    }

    type Article {
        id: ID
        user: User
        title: String
        description: String
        comments: [Comment]
    }

    type Comment {
        id: ID
        article: Article
        user: User
        title: String
        description: String
    }

    type Mutation {
        addArticle(title: String!, description: String!, userId: ID!): Article
        deleteArticle(id: ID!): Article
        updateArticle(title: String, description: String, id: ID!): Article
        addComment(title: String!, description: String!, articleId: ID!, userId: ID!): Comment
        deleteComment(id: ID!): Comment
        editComment(title: String, description: String, id: ID!): Comment
        createUser(firstName: String!, lastName: String!, username: String!): User
    }
`;

module.exports = typeDefs;