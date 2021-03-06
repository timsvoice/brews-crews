/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Reviews from './reviews';
import NewReview from './reviews.new';
import Search from './search';
import { SearchData } from './search.components';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://09a9kplbc2.execute-api.us-east-1.amazonaws.com/dev/graphql'),
});

const App = ({ children, params, location }) => (
  <div className="container">
    {children}
  </div>
);

ReactDOM.render((
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={Reviews} />
            <Route path="/search" component={SearchData}>
              <Route path="?beer=:query" component={SearchData}/>
            </Route>
            <Router path="/new/review/:beerId" component={NewReview} />
          </Route>
      </Router>
    </ApolloProvider>
  </MuiThemeProvider>),
  document.getElementById('App')
);
