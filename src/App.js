import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import SearchBar from './componentes/SearchBar';
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  }
}

export default App;
