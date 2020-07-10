const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const ContentAPI = require('./apis/articles');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        contentAPI: new ContentAPI()
    }),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});