import React from 'react';
import Search from './Search';
import Jumbotrons from './Jumbotrons';
import Movies from '../movies/Movies';
import Games from '../games/Games';
import Books from '../books/Books';
import ToStack from './ToStack';

const Index = () => {
    return (
        <React.Fragment>
            <ToStack />
            <div className="container">
                <div className="row">
                    <Search />
                    <Jumbotrons />
                </div>
            </div>
            <Movies />
            <Games />
            <Books />
        </React.Fragment>
    )
}

export default Index;