/* eslint-disable no-unused-vars */
import { Review, Beer, Search } from './connectors';

const resolvers = {
  Query: {
    review(_, args) {
      // return a review from the local mongoDB
      return Review.findOne({ _id: args._id });
    },
    beer(_, args) {
      //  return a beer from the breweryDB via id
    },
    search(_, args) {
      // return a beer from the breweryDB via name search
    },
  },
  Review: {
    beer(review) {
      //  return a beer from the breweryDB via id
      return review.beer;
    },
  }
};

export default resolvers;
