import React from 'react';
import Movies from '../movies/Movies';
import Search from '../movies/Search';
import Jumbotrons from '../layout/Jumbotrons';
import Games from '../games/Games';
import Books from '../books/Books';

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Movies />
            <Games />
            <Books />
            <Jumbotrons />
        </React.Fragment>
    )
}

export default Index