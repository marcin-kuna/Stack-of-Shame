import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Details from './components/movies/Details';
import Stack from './components/layout/Stack';
import GameDetails from './components/games/GameDetails';
import BookDetails from './components/books/BookDetails';
import { Provider } from './context'
import './App.css';
import './Badges.scss';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/details/movie/:id" component={Details}/>
              <Route exact path="/stack" component={Stack}/>
              <Route exact path="/details/game/:id" component={GameDetails}/>
              <Route exact path="/details/book/:id" component={BookDetails}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
