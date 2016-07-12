/* eslint-disable no-unused-vars, new-cap */

import Mongoose from 'mongoose';
import rp from 'request-promise';
import { findBeer, searchBeer } from './brewery.db';
// Set Mongoose promises to native promises
Mongoose.Promise = global.Promise;
const MONGOURU = process.env.MONGODB_URI;

// Local Mongo Data
const mongo = Mongoose.connect('MONGOURI');

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
