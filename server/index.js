const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const ArticlesAPI = require('./apis/articles');
const CommentsAPI = require('./apis/comments');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        articles: new ArticlesAPI(),
        comments: new CommentsAPI()
    }),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});