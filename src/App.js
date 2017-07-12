import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import OnTheAirContainer from "./containers/OnTheAirContainer";
import store from './store';

// routes
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes.js';

// components
import Header from './components/Header/Header';
import NowPlaying from './scenes/Home/components/NowPlaying/NowPlaying';

// styled components
const Main = styled.main `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
`;

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
        <Main>
          <Provider store={store}>
            <OnTheAirContainer />
          </Provider>
          <NowPlaying />
        </Main>
      </div>
    );
  }
}
