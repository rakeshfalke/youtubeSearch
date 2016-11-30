import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <Input
        fluid
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        placeholder='Search...'
        icon='search' />
      );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
