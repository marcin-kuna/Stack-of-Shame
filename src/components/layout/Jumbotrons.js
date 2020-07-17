import React, { Component } from 'react';
import { Consumer } from '../../context';
import BookImg from '../../img/book.svg';
import MovieImg from '../../img/movie.svg';
import GameImg from '../../img/game.svg';

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
                            <div className="row px-2">
                                <div className="col-4 text-center rounded-left p-2 jumbo-1">
                                    <img src={MovieImg} alt="" className="img-fluid"/>
                                    <h2>{movies_list_sos.length}</h2>
                                    <h2>Movie{singularOrPluralM}</h2>
                                </div>
                                <div className="col-4 text-center p-2 jumbo-2">
                                    <img src={GameImg} alt="" className="img-fluid"/>
                                    <h2>{games_list_sos.length}</h2>
                                    <h2>Game{singularOrPluralG}</h2>
                                </div>
                                <div className="col-4 text-center rounded-right p-2 jumbo-3">
                                    <img src={BookImg} alt="" className="img-fluid"/>
                                    <h2>{books_list_sos.length}</h2>
                                    <h2>Book{singularOrPluralB}</h2>
                                </div>
                            </div>                            
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Jumbotrons;