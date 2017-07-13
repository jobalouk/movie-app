import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

// container
import OnTheAirContainer from "./containers/OnTheAirContainer";

// routes
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes.js';

// components
import Header from './components/Header/Header';
import NowPlaying from './scenes/Home/components/NowPlaying/NowPlaying';

// styled components
import Main from './scenes/Main'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Routes />
          </div>
        </Router>
        <Main className="group">
          <div className="block_center group">
            <Provider store={store}>
              <OnTheAirContainer />
            </Provider>
            <NowPlaying />
          </div>
        </Main>
      </div>
    );
  }
}
