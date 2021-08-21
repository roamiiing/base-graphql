import {PORT} from '@env';
import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import {buildSchema} from '@api';

export default async function setupServer() {
  const server = new ApolloServer({
    schema: await buildSchema(),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });
  const {url} = await server.listen(PORT || 8080);
  console.log('🚀 Server is ready at', url);
}
