export const Article = `
    type Article {
        id: ID
        user: User
        title: String
        description: String
        comments: [Comment]
    }
`;