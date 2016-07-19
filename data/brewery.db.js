/* eslint-disable consistent-return, no-unused-vars */
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
        if (res.data === undefined) resolve('No data');
        res.data.splice(10, res.totalResults);
        const results = res.data.map((result) => {
          const { id, name, description, abv, glasswareId, style } = result;
          const beerData = { id, name, description, abv, glasswareId, style: style.name };
          if (!result.labels) beerData.label = 'http://www.kilduffs.com/Beer_116_Baltimore_FredBauernschmidtsAmericanBreweryBeer_Label.jpg';
          else beerData.label = result.labels.large;

          return beerData;
        });
        resolve(results);
      })
      .catch((err) => reject(err));
  });
};

export { findBeer, searchBeer };
