import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import Articles from './apis/articles';
import Comments from './apis/comments';
import Users from './apis/user';

const server = new ApolloServer({
    dataSources: () => ({
        articles: new Articles(),
        comments: new Comments(),
        users: new Users()
    }),
    schema
});

server.listen().then(({ url }: { url: string }) => {
    console.log(`Server ready at ${url}`);
});