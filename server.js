import express from 'express';
import { apolloServer } from 'apollo-server';
import Schema from './data/schema';
import Resolvers from './data/resolvers';

const GRAPHQL_PORT = 8000;

console.log(process.env.MONGODB_URI);

const graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
