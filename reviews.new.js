/* eslint-disable no-unused-vars, no-multi-spaces*/
import React from 'react';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import _ from 'underscore';

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
  Divider,
  TextField,
} from 'material-ui';
import './style.scss';

const starValues = [1, 2, 3, 4, 5];

const Star = React.createClass({
  render() {
    return (
      <div>
        <i
          className={ `${this.props.star} material-icons review-star` }>
          {this.props.star}
        </i>
      </div>
    );
  },
});

const NewReview = React.createClass({
  getInitialState() {
    return { stars: 0, location: '' };
  },
  handleClick(index) {
    this.setState({ stars: index + 1 });
  },
  handleSubmit(e) {
    e.preventDefault();
    const { state, props } = this;
    const { mutations } = this.props;
    const review = {
      beerId: props.params.beerId,
      location: state.location,
      rating: state.stars,
    };
    console.log(review);
    mutations.submitReview(review.beerId, review.location, review.rating)
      .then((res, err) => {
        if (err) console.log(err);
        else browserHistory.push('/');
      });
  },
  updateLocation(e) {
    this.setState({ location: e.target.value });
  },
  render() {
    const { data } = this.props;
    if (data.loading) return (<div>Loading</div>);
    return (
      <form className="review-container" onSubmit={this.handleSubmit}>
        <Card zDepth={1} className="review-card">
          <CardHeader
            title={data.beer.name}
            subtitle={data.beer.style}
            avatar={data.beer.label} />
          <CardText>
            <TextField
              className="review-location"
              hintText="The Perfect Location"
              fullWidth={true}
              onChange={this.updateLocation}
            />
            <br />
            <div className="review-star-container">
              { starValues.map((value, index) => {
                const star = (i) => {
                  if (this.state.stars < index + 1) return 'star_border';
                  return 'star';
                };
                return (
                <div onClick={this.handleClick.bind(null, index)} key={ index }>
                  <Star
                    value={ value }
                    index={ index }
                    star={ star(index) }
                  />
                </div>
                );
              })}
            </div>
          </CardText>
          <CardActions>
            <FlatButton
              label="Submit"
              className="review-submit-button"
              type="submit"/>
          </CardActions>
        </Card>
      </form>
    );
  },
});

const NewReviewWithData = connect({
  mapQueriesToProps({ ownProps, state }) {
    return {
      data: {
        query: gql`
          query getBeer($beerId: String!) {
            beer( beerId: $beerId ) {
              id
              name
              description
              label
              style
            }
          }
        `,
        variables: {
          beerId: ownProps.params.beerId,
        },
      },
    };
  },
  mapMutationsToProps({ ownProps, state }) {
    return {
      submitReview: (beerId, location, rating) => ({
        mutation: gql`
          mutation submitReview(
            $beerId: String!,
            $rating: Int!,
            $location: String!,
          ) {
            submitReview(
              beerId: $beerId,
              rating: $rating,
              location: $location,
            ) {
              _id
              beer {
                name
              }
              rating
              location
            }
          }
        `,
        variables: {
          beerId,
          location,
          rating,
        },
      }),
    };
  },
})(NewReview);

export default NewReviewWithData;
