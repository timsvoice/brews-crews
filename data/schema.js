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
    label: String,
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

export default [typeDefinitions];
