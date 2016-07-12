/* eslint-disable no-unused-vars, new-cap */

import Mongoose from 'mongoose';
import rp from 'request-promise';
import { findBeer, searchBeer } from './brewery.db';
// Set Mongoose promises to native promises
Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/beers');

const ReviewSchema = Mongoose.Schema({
  beerId: String,
  rating: Number,
  location: String,
});

const Review = Mongoose.model('reviews', ReviewSchema);

const Beer = {
  getBeer(beerId) {
    const beer = findBeer(beerId)
      .then((res) => (res));
    return beer;
  },
  searchBeer(query) {
    const results = searchBeer(query)
      .then((res) => (res));
    return results;
  },
};

export { Review, Beer };
