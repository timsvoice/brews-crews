/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Reviews from './reviews';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

const client = new ApolloClient();

const App = ({ params, data }) => (
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <Reviews />
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>),
  document.getElementById('App')
);
