/* eslint-disable no-unused-vars, no-multi-spaces*/
import React from 'react';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import SearchBar from './search';

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
} from 'material-ui';

import './style.scss';
import style from './oldstyles';

const client = new ApolloClient();

const SearchResults = ({ params, data }) => {
  if (data.errors) return (<div><SearchBar /><div>No Beers Found. Try Again!</div></div>);
  return (
    <div>
      <SearchBar />
      { !data.loading ? <SearchList beers={ data.search } /> : <div>Loading!</div> }
    </div>
  );
};

const SearchList = ({ beers }) => (
  <div style={ style.list }>
    { beers.map((beer) =>
      <SearchListItem
        beer={ beer }
        key={ beer.id }
      />
    )}
  </div>
);

const SearchListItem = ({ beer }) => {
  return (
    <Card style={style.listItem} >
      <CardHeader
        title={beer.name}
        subtitle={beer.style}
        avatar="http://lorempixel.com/100/100/food"
      />
      <CardMedia className="beer-card-image">
        { beer.label ?
          <img src={beer.label} /> :
          <img src="http://lorempixel.com/290/290/food" />
        }
      </CardMedia>
      <CardActions className="beer-card-actions">
        <FlatButton label="Review this Beer" />
      </CardActions>
    </Card>
  );
};

const SearchData = connect({
  mapQueriesToProps({ ownProps, state }) {
    return {
      data: {
        query: gql`
          query getSearch($searchQuery: String!) {
            search( query: $searchQuery ) {
              id
              name
              description
              label
              style
            }
          }
        `,
        variables: {
          searchQuery: ownProps.location.query.beer,
        },
      },
    };
  },
})(SearchResults);

export { SearchList, SearchListItem, SearchData };
