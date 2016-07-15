import path from 'path';
import express from 'express';
import { apolloServer } from 'apollo-server';
import Schema from './data/schema';
import Resolvers from './data/resolvers';

const GRAPHQL_PORT = (process.env.PORT || 8000);

const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
}));
graphQLServer.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/') });
});
graphQLServer.get('bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: path.join(__dirname, '/') });
});
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
