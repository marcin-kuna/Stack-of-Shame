import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import BookImg from '../../img/book.svg';
import MovieImg from '../../img/movie.svg';
import GameImg from '../../img/game.svg';
// import Arrow from '../../img/arrow.svg';

class Jumbotrons extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_list_sos, games_list_sos, books_list_sos } = value;

                    let singularOrPluralM = '';
                    let singularOrPluralG = '';
                    let singularOrPluralB = '';

                    if (movies_list_sos.length !== 1) {
                        singularOrPluralM = 's'
                    }
                    if (games_list_sos.length !== 1) {
                        singularOrPluralG = 's'
                    }
                    if (books_list_sos.length !== 1) {
                        singularOrPluralB = 's'
                    }
                    
                    return(
                        <div className="col-lg-6 mb-4">
                            <div className="row justify-content-between px-2">
                                <div className="col-3 text-center rounded p-2 jumbo-1">
                                    <img src={MovieImg} alt="" className="img-fluid"/>
                                    <h2>{movies_list_sos.length}</h2>
                                    <h2>Movie{singularOrPluralM}</h2>
                                    {/* <h4>to watch</h4> */}
                                </div>
                                <div className="col-3 text-center rounded p-2 jumbo-2">
                                    <img src={GameImg} alt="" className="img-fluid"/>
                                    <h2>{games_list_sos.length}</h2>
                                    <h2>Game{singularOrPluralG}</h2>
                                </div>
                                <div className="col-3 text-center rounded p-2 jumbo-3">
                                    <img src={BookImg} alt="" className="img-fluid"/>
                                    <h2>{books_list_sos.length}</h2>
                                    <h2>Book{singularOrPluralB}</h2>
                                </div>
                            </div>
                            {/* <div className="card-deck">
                                <div className="card text-center bg-warning  h-100">
                                    <img src={MovieImg} alt="" className="card-img-top p-4"/>
                                    <div className="card-body">
                                        <h2 className="card-subtitle mb-2">{movies_list_sos.length} Movies</h2>
                                        <h1 className="card-title">Movies</h1>
                                        <p className="card-text">to watch</p>
                                    </div>
                                </div>
                                <div className="card text-center bg-warning h-100">
                                    <img src={GameImg} alt="" className="card-img-top p-4"/>
                                    <div className="card-body">
                                        <h2 className="card-subtitle mb-2">{games_list_sos.length}</h2>
                                        <h1 className="card-title">Games</h1>
                                        <p className="card-text">to play</p>
                                    </div>
                                </div>
                                <div className="card text-center bg-warning h-100">
                                    <img src={BookImg} alt="" className="card-img-top p-4"/>
                                    <div className="card-body">
                                        <h2 className="card-subtitle mb-2">{books_list_sos.length}</h2>
                                        <h1 className="card-title">Books</h1>
                                        <p className="card-text">to read</p>
                                    </div>
                                </div>
                            </div> */}
                            
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Jumbotrons