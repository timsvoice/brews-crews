/* eslint-disable no-unused-vars, no-multi-spaces, max-len */
import React from 'react';
import { browserHistory } from 'react-router';
import _ from 'underscore';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
  TextField,
  FlatButton,
} from 'material-ui';

import { SearchList, SearchListItem } from './search.components';
import './style.scss';

const SearchBar = React.createClass({
  getInitialState(e) {
    this.inputChange = _.debounce(this.inputChange, 1000);
    return { searchResults: [] };
  },
  handleSubmit(e) {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    browserHistory.push(`search?beer=${searchQuery}`);
  },
  render() {
    const beers = this.state.searchResults;
    return (
      <div>
        <Toolbar className="search-container" >
          <ToolbarGroup className="search-box-container" >
          <form onSubmit={this.handleSubmit} >
            <div className="search-box" >
              <i className="search-icon">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </i>
              <input
                type="text"
                id="search"
                placeholder="Review a New Beer"
                className="search-box-input" />
              </div>
          </form>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  },
});

export default SearchBar;
