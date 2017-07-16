import React from 'react';

//components
import App from './App';
import Movie from './scenes/Movie/Movie';
import Tv from './scenes/Tv/Tv';
import Person from './scenes/Person/Person';
import Home from './scenes/Home/Home';

// routes
import {Switch, Route} from 'react-router-dom'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/discover" component={Movie}></Route>
      <Route path="/movie" component={Movie}></Route>sta
      <Route path="/tv" component={Tv}></Route>
      <Route path="/person" component={Person}></Route>
    </Switch>
  </div>
)

export default Routes;
