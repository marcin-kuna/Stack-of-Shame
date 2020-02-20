import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Jumbotrons extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_list_sos, games_list_sos } = value;

                    return(
                        <div className="container row">
                            <div className="jumbotron col-md-4 text-center">
                                <i className="fas fa-film display-3"></i>
                                <h1 className="display-3">Movies</h1>
                                <p className="lead">{movies_list_sos.length} to watch</p>
                            </div>
                            <div className="jumbotron col-md-4 text-center">
                                <i className="fas fa-gamepad display-3"></i>
                                <h1 className="display-3">Games</h1>
                                <p className="lead">{games_list_sos.length} to play</p>
                            </div>
                            <div className="jumbotron col-md-4 text-center">
                                <i className="fas fa-book display-3"></i>
                                <h1 className="display-3">Books</h1>
                                <p className="lead">{movies_list_sos.length} to read</p>
                            </div>
                            <Link to="/stack" className="btn btn-dark btn-sm mb-4">To stack</Link>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Jumbotrons