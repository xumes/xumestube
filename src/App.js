import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import SearchBar from './componentes/SearchBar';
import store from './store'
import VideoList from './componentes/VideoList';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <SearchBar />
          <VideoList />
        </div>
      </Provider>
    );
  }
}

export default App;
