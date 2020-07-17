import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Stack from './components/layout/Stack';
import MovieDetails from './components/movies/MovieDetails';
import GameDetails from './components/games/GameDetails';
import BookDetails from './components/books/BookDetails';
import Footer from './components/layout/Footer';
import { Provider } from './context'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/stack" component={Stack}/>
              <Route exact path="/details/movie/:id" component={MovieDetails}/>
              <Route exact path="/details/game/:id" component={GameDetails}/>
              <Route exact path="/details/book/:id" component={BookDetails}/>
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
