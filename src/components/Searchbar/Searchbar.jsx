import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBarHead, SearchForm, SearchFormBtn, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled'

class Searchbar extends Component {
 
  state = {
    query: '',
  };

  handleChange = event => {     
    this.setState({ query: event.target.value });    
  };

  handleSubmit = event => {    
    event.preventDefault();
    if (!this.state.query.trim()) { 
      return
    }
    this.props.onSubmit(this.state.query);
    // this.setState({ query: '' });
  };

  render() {
    // const { query } = this.state;
    
    return (
      <SearchBarHead>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormBtn>

          <SearchFormInput            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarHead>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
