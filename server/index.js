const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const ArticlesAPI = require('./apis/articles');
const CommentsAPI = require('./apis/comments');
const UsersAPI = require('./apis/user');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        articles: new ArticlesAPI(),
        comments: new CommentsAPI(),
        users: new UsersAPI()
    }),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});