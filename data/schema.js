import Resolvers from './resolvers.js';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefinitions = `
  type Review {
    _id: String,
    beerId: String,
    beer: Beer,
    rating: Int,
    location: String,
  }

  type Beer {
    id: String,
    name: String,
    description: String,
    abv: String,
    glasswareId: Int,
    style: String,
  }

  type Labels {
    icon: String,
    medium: String,
    large: String!
  }

  type Query {
    review(_id: String): Review,
    reviews : [ Review ],
    beer( beerId: String): Beer,
    search( query: String ): [ Beer ],
  }

  type Mutation {
    submitReview( beerId: String, location: String, rating: Int): Review,
  }

  schema {
    query: Query,
    mutation: Mutation,
  }
`;

const executableSchema = makeExecutableSchema({
  typeDefs: typeDefinitions,
  resolvers: Resolvers,
});

export default executableSchema;
