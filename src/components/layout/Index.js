import React from 'react';
import Movies from '../movies/Movies';
import Search from '../movies/Search';
import Jumbotrons from '../layout/Jumbotrons'

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Jumbotrons />
            <Movies />
        </React.Fragment>
    )
}

export default Index