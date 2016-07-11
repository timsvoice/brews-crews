import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    beer: (root, args) => {
      return { firstName: args.firstName, lastName: args.lastName };
    },
  }),
  Beer: () => ({
    brewerydb_id: () => casual.word,
    name: () => casual.title,
    description: () => casual.words(20),
    abv: () => casual.integer(),
    glassware_id: () => casual.integer(),
    style: () => casual.short_description,
  }),
  Review: () => ({
    rating: casual.integer(),
    location: casual.sentences(1),
  }),
};

export default mocks;
