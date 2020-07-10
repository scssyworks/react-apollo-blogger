const resolvers = {
    Query: {
        articles: (_, __, { dataSources }) => dataSources.articles.getArticles(),
        article: (_, { id }, { dataSources }) => dataSources.articles.getArticle(id)
    },
    Article: {
        comments: ({ id }, _, { dataSources }) => dataSources.comments.getComments(id)
    },
    Mutation: {
        addArticle: (_, args, { dataSources }) => dataSources.articles.addArticle(args),
        deleteArticle: (_, { id }, { dataSources }) => dataSources.articles.deleteArticle(id),
        updateArticle: (_, args, { dataSources }) => dataSources.articles.updateArticle(args),
        addComment: (_, args, { dataSources }) => dataSources.comments.addComment(args),
        deleteComment: (_, { id }, { dataSources }) => dataSources.comments.deleteComment(id),
        editComment: (_, args, { dataSources }) => dataSources.comments.editComment(args)
    }
};

module.exports = resolvers;