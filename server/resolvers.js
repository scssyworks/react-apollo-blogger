const resolvers = {
    Query: {
        articles: (_, { userId }, { dataSources }) => dataSources.articles.getArticles(userId),
        article: (_, { id }, { dataSources }) => dataSources.articles.getArticle(id),
        user: (_, { id }, { dataSources }) => dataSources.users.getUser(id)
    },
    Article: {
        comments: ({ id }, _, { dataSources }) => dataSources.comments.getComments(id),
        user: ({ userId }, _, { dataSources }) => dataSources.users.getUser(userId)
    },
    Comment: {
        user: ({ userId }, _, { dataSources }) => dataSources.users.getUser(userId),
        article: ({ articleId }, _, { dataSources }) => dataSources.articles.getArticle(articleId)
    },
    Mutation: {
        addArticle: (_, args, { dataSources }) => dataSources.articles.addArticle(args),
        deleteArticle: (_, { id }, { dataSources }) => dataSources.articles.deleteArticle(id),
        updateArticle: (_, args, { dataSources }) => dataSources.articles.updateArticle(args),
        addComment: (_, args, { dataSources }) => dataSources.comments.addComment(args),
        deleteComment: (_, { id }, { dataSources }) => dataSources.comments.deleteComment(id),
        editComment: (_, args, { dataSources }) => dataSources.comments.editComment(args),
        createUser: (_, args, { dataSources }) => dataSources.users.createUser(args)
    }
};

module.exports = resolvers;