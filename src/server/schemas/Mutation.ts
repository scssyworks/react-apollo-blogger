export const Mutation = `
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