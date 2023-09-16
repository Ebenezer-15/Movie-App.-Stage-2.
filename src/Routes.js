import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; 
import MovieDetails from './MovieDetails'; 

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" component={MovieDetails} />
      
      </Switch>
    </Router>
  );
}

export default Routes;
