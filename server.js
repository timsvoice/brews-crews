import path from 'path';
import express from 'express';
import { graphqlExpress } from 'graphql-server-express';
import Schema from './data/schema';
import bodyParser from 'body-parser';

const GRAPHQL_PORT = (process.env.PORT || 8000);

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: Schema,
}));

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
