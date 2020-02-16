import React from 'react';
import Movies from '../movies/Movies';
import Search from '../movies/Search';
import Jumbotrons from '../layout/Jumbotrons';
import GameSearch from '../games/GameSearch';
import Games from '../games/Games';

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <GameSearch />
            <Jumbotrons />
            <Movies />
            <Games />
        </React.Fragment>
    )
}

export default Index