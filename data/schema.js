const typeDefinitions = `
  type Review {
    beer: Beer
    rating: Int,
    location: String,
  }

  type Beer {
    brewerydb_id: String,
    name: String,
    description: String,
    abv: Int,
    glassware_id: Int,
    style: String,
  }

  type Query {
    review(_id: String): Review,
    beer( name: String, brewerydb_id: String): Beer,
    search( name: String ): Beer,
  }

  schema {
    query: Query
  }
`;

export default [typeDefinitions];
