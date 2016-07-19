import path from 'path';
import express from 'express';
import { apolloServer } from 'apollo-server';
import Schema from './data/schema';
import Resolvers from './data/resolvers';

const GRAPHQL_PORT = (process.env.PORT || 8000);

const app = express();

app.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
}));

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
