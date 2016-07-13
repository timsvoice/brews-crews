import express from 'express';
import { apolloServer } from 'apollo-server';
import Schema from './data/schema';
import Resolvers from './data/resolvers';

const GRAPHQL_PORT = process.env.PORT;

const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
}));
graphQLServer.get('/', (req, res) => {
  res.sendFile('./index.html');
});
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
