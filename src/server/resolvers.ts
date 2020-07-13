export const resolvers = {
    Query: {
        articles: (_: any, { userId }: { userId: string }, { dataSources }: { dataSources: any }) => dataSources.articles.getArticles(userId),
        article: (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => dataSources.articles.getArticle(id),
        user: (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => dataSources.users.getUser(id)
    },
    Article: {
        comments: ({ id }: { id: string }, _: any, { dataSources }: { dataSources: any }) => dataSources.comments.getComments(id),
        user: ({ userId }: { userId: string }, _: any, { dataSources }: { dataSources: any }) => dataSources.users.getUser(userId)
    },
    Comment: {
        user: ({ userId }: { userId: string }, _: any, { dataSources }: { dataSources: any }) => dataSources.users.getUser(userId),
        article: ({ articleId }: { articleId: string }, _: any, { dataSources }: { dataSources: any }) => dataSources.articles.getArticle(articleId)
    },
    Mutation: {
        addArticle: (_: any, args: any, { dataSources }: { dataSources: any }) => dataSources.articles.addArticle(args),
        deleteArticle: (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => dataSources.articles.deleteArticle(id),
        updateArticle: (_: any, args: any, { dataSources }: { dataSources: any }) => dataSources.articles.updateArticle(args),
        addComment: (_: any, args: any, { dataSources }: { dataSources: any }) => dataSources.comments.addComment(args),
        deleteComment: (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => dataSources.comments.deleteComment(id),
        editComment: (_: any, args: any, { dataSources }: { dataSources: any }) => dataSources.comments.editComment(args),
        createUser: (_: any, args: any, { dataSources }: { dataSources: any }) => dataSources.users.createUser(args)
    }
};