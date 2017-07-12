import React from 'react';

//components
import App from './App';
import Movie from './scenes/Movie/Movie';
import Tv from './scenes/Tv/Tv';
import Person from './scenes/Person/Person';

// routes
import {Route} from 'react-router-dom'

const Routes = () => (
  <div>
    <Route path="/home" component={App}></Route>
    <Route path="/discover" component={Movie}></Route>
    <Route path="/movie" component={Movie}></Route>
    <Route path="/tv" component={Tv}></Route>
    <Route path="/person" component={Person}></Route>
  </div>
)

export default Routes;
