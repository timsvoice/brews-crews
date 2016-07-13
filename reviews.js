/* eslint-disable no-unused-vars, no-multi-spaces*/
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-apollo';

import {
  AppBar,
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui';

import style from './styles.js';

const networkInterface = createNetworkInterface('http://localhost:8000/graphql');

const client = new ApolloClient({
  networkInterface,
});

const ReviewListItem = ({ review }) => (
  <Card
    style={style.listItem}
  >
    <CardHeader
    title={review.beer.name}
    subtitle={review.beer.style}
    avatar="http://lorempixel.com/100/100/food"
    />
    <CardMedia
    >
    { review.beer.label ? <img src={review.beer.label} /> : <img src="http://lorempixel.com/290/290/food" /> }
    </CardMedia>
    <CardTitle subtitle="Ideal Location" />
    <CardText>{ review.location }</CardText>
  </Card>
);

const ReviewList = ({ reviews }) => (
  <div style={style.list}>
    { reviews.map((review) => <ReviewListItem review={ review } key={ review._id } />) }
  </div>
);

const Reviews = ({ params, data }) => {
  if (data.loading) return (<div>Loading!</div>);
  return (
    <div>
      <ReviewList reviews={ data.reviews } />
    </div>
  );
};

const ReviewsData = connect({
  mapQueriesToProps({ ownProps, state }) {
    return {
      data: {
        query: gql`
          {
            reviews {
              _id
              beer {
                name
                description
                label
                style
              }
              rating
              location
            }
          }
        `,
      },
    };
  },
})(Reviews);

export default ReviewsData;
