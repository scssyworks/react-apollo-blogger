const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        articles: [Article]
        article(id:ID!): Article
    }

    type Article {
        id: ID
        title: String
        content: String
        comments: [Comments]
    }

    type Comment {
        id: ID
        articleId: ID
        title: String
        description: String
    }

    type Mutation {
        addArticle(title: String!, description: String!): Article
        deleteArticle(id: ID!): Article
        updateArticle(title: String!, description: String!, id: ID!): Article
        addComment(title: String!, description: String!, articleId: ID!): Comment
        deleteComment(id: ID!): Comment
        editComment(id: ID!): Comment
    }
`;

module.exports = typeDefs;