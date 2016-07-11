/* eslint-disable no-unused-vars, new-cap */

import casual from 'casual';
import Mongoose from 'mongoose';
import rp from 'request-promise';
import _ from 'underscore';
// Set Mongoose promises to native promises
Mongoose.Promise = global.Promise;

// views in MongoDB
const mongo = Mongoose.connect('mongodb://localhost/beers');

const ReviewSchema = Mongoose.Schema({
  beer: Object,
  rating: Number,
  location: String,
});

const Review = Mongoose.model('reviews', ReviewSchema);

const beer = {
  brewerydb_id: casual.word,
  name: casual.title,
  description: casual.words(20),
  abv: casual.integer(),
  glassware_id: casual.integer(),
  style: casual.short_description,
};

const review = {
  beer,
  rating: casual.integer(1),
  location: casual.short_description,
};

casual.seed(123);
_.times(2, () => {
  const newReview = new Review(review);
  newReview.save();
});

export { Review };
