/* eslint-disable consistent-return */
import rp from 'request-promise';

const BASE_URL = 'http://api.brewerydb.com/v2/';
const KEY = process.env.BREWDB;

const findBeer = (beerId) => {
  return new Promise((resolve, reject) => {
    rp(`${BASE_URL}beer/${beerId}?key=${KEY}`)
      .then((res) => JSON.parse(res))
      .then((res) => {
        const { id, name, description, abv, glasswareId, style, labels } = res.data;
        const beerData = {
          id,
          name,
          description,
          abv,
          glasswareId,
          style: style.name,
          label: labels.large,
        };
        resolve(beerData);
      })
      .catch((err) => console.log(err));
  });
};

const searchBeer = (beerName) => {
  const query = beerName.split(' ').join('+');
  return new Promise((resolve, reject) => {
    rp(`${BASE_URL}search?q=${query}&key=${KEY}&type=beer`)
      .then((res) => JSON.parse(res))
      .then((res) => {
        if (res.data === undefined) reject('No data');
        const resultsArray = res.data.splice(4, res.totalResults);
        const results = resultsArray.map((result) => {
          const { id, name, description, abv, glasswareId, lables } = result;
          const beerData = { id, name, description, abv, glasswareId, lables: lables.large };
          return beerData;
        });
        resolve(results);
      })
      .catch((err) => reject(err));
  });
};

export { findBeer, searchBeer };
