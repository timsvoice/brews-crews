const typeDefinitions = `
  type Review {
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

  type Query {
    review(_id: String): Review,
    beer( beerId: String): Beer,
    search( query: String ): [ Beer ],
  }

  schema {
    query: Query
  }
`;

export default [typeDefinitions];
