import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MovieList} exact path="/trybe-react-project-movie-card-library-crud" />
        <Route component={NewMovie} exact path="/movies/new" />
        <Route component={EditMovie} exact path="/movies/:id/edit" />
        <Route component={MovieDetails} exact path="/movies/:id" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
