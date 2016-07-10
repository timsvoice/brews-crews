const resolvers = {
  Query: {
    author(_, args) {
      return { id: 1, firstName: 'Paul', lastName: 'Voice' };
    },
    post(_, args) {
      return [{ id: 2, title: 'Rauls Explained', text: 'Some philosophy' }];
    },
  },
  Author: {
    posts(author) {
      return [{ id: 2, title: 'Rauls Explained', text: 'Some philosophy' }];
    },
  },
  Post: {
    author(post) {
      return { id: 1, firstName: 'Paul', lastName: 'Voice' };
    },
  },
};

export default resolvers;
