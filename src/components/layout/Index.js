import React from 'react';
import Search from './Search';
import Jumbotrons from './Jumbotrons';
import Movies from '../movies/Movies';
import Games from '../games/Games';
import Books from '../books/Books';

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Jumbotrons />
            <Movies />
            <Games />
            <Books />
        </React.Fragment>
    )
}

export default Index