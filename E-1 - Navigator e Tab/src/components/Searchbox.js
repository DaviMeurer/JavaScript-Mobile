import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Escreva aqui..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}