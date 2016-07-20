/* eslint-disable no-unused-vars */
import { Review, Beer } from './connectors';

const resolvers = {
  Query: {
    review(_, args) {
      // return a review from the local mongoDB
      return Review.findOne({ _id: args._id });
    },
    reviews(_, args) {
      return Review.find().limit(10).then((res) => res);
    },
    beer(_, args) {
      //  return a beer from the breweryDB via id
      return Beer.getBeer(args.beerId);
    },
    search(_, args) {
      // return a beer array from the breweryDB via name search
      return Beer.searchBeer(args.query);
    },
  },
  Mutation: {
    submitReview(_, { beerId, rating, location }) {
      const review = new Review({ beerId, rating, location });
      return review.save((err, res) => {
        if (err) console.log(err);
        console.log(res);
        return res;
      });
    },
  },
  Review: {
    beer(review) {
      //  return a beer from the breweryDB via id
      return Beer.getBeer(review.beerId);
    },
  },
};

export default resolvers;
