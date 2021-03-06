/* eslint-disable no-unused-vars, new-cap */

import Mongoose from 'mongoose';
import rp from 'request-promise';
import { findBeer, searchBeer } from './brewery.db';
// Set Mongoose promises to native promises
Mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.MONGODB_URI;

// Local Mongo Data
const mongo = Mongoose.connect(MONGODB_URI);

const ReviewSchema = Mongoose.Schema({
  beerId: String,
  rating: Number,
  location: String,
});

const Review = Mongoose.model('reviews', ReviewSchema);

// Remote BreweryDB Data
const Beer = {
  getBeer(beerId) {
    const beer = findBeer(beerId)
      .then((res) => (res))
      .catch((err) => { console.log(err); });
    return beer;
  },
  searchBeer(query) {
    const results = searchBeer(query)
      .then((res) => (res))
      .catch((err) => { console.log(err); });
    return results;
  },
};

export { Review, Beer };
