// Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import MovieDetails from './MovieDetails'; // Import your MovieDetails component

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" component={MovieDetails} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
}

export default Routes;
