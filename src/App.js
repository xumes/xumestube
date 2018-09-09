import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.css';
import SearchBar from './componentes/SearchBar';
import store from './store'
import VideoList from './componentes/VideoList';
import VideoPlayer from './componentes/VideoPlayer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <SearchBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
