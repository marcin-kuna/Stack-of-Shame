import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import BookImg from '../../img/book.svg';
import MovieImg from '../../img/movie.svg';
import GameImg from '../../img/game.svg';

class Jumbotrons extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_list_sos, games_list_sos } = value;

                    return(
                        <div className="jumbotrons col-md-6 d-inline-block">
                            <div className="container row justify-content-between">
                                <div className="jumbotron col-md-3 text-center">
                                    {/* <i className="fas fa-film display-3"></i> */}
                                    <img src={MovieImg} alt="" className="icon-jumbo"/>
                                    <h1 className="display-5">Movies</h1>
                                    <p className="lead">{movies_list_sos.length} to watch</p>
                                </div>
                                <div className="jumbotron col-md-3 text-center">
                                    {/* <i className="fas fa-gamepad display-3"></i> */}
                                    <img src={GameImg} alt="" className="icon-jumbo"/>
                                    <h1 className="display-5">Games</h1>
                                    <p className="lead">{games_list_sos.length} to play</p>
                                </div>
                                <div className="jumbotron col-md-3 text-center">
                                    {/* <i className="fas fa-book display-3"></i> */}
                                    <img src={BookImg} alt="" className="icon-jumbo"/>
                                    <h1 className="display-5">Books</h1>
                                    <p className="lead">{movies_list_sos.length} to read</p>
                                </div>
                            </div>
                            <Link to="/stack" className="btn btn-dark btn-block mb-4">To stack</Link>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Jumbotrons