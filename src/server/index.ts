import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import Articles from './apis/articles';
import Comments from './apis/comments';
import Users from './apis/user';

const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        articles: new Articles(),
        comments: new Comments(),
        users: new Users()
    }),
    resolvers
});

server.listen().then(({ url }: { url: string }) => {
    console.log(`Server ready at ${url}`);
});