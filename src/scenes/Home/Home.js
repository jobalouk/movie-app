import React, { Component } from 'react';

// components
import NowPlaying from './components/NowPlaying/NowPlaying'
import OnTheAir from './components/OnTheAir/OnTheAir'

export default class App extends Component {
  render() {
    return (
      <div>
        <NowPlaying />
        <OnTheAir />
      </div>
    );
  }
}
