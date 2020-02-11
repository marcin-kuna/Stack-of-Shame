import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Details from './components/movies/Details';
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
              <Route exact path="/details/movie/:id" component={Details}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
