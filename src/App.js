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
import OnTheAir from './scenes/Home/components/OnTheAir/OnTheAir';

// styled components
const Wrapper = styled.main `
  display: flex;
  height: 100vh;
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
          <Wrapper>
            <Provider store={store}>
              <OnTheAirContainer />
            </Provider>
            <NowPlaying />
          </Wrapper>
      </div>
    );
  }
}
