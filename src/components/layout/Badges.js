import React, { Component } from 'react';
import { Consumer } from '../../context';

class Badges extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_watched, games_played, books_read } = value;
                    
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="progress" data-percentage={movies_watched.length * 10}>
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value progress-movies">
                                            {movies_watched.length * 10}%
                                            <br/>
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="progress" data-percentage={games_played.length * 10}>
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value progress-games">
                                            {games_played.length * 10}%
                                            <br/>
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                    <div>
                                    {games_played.length * 10}%
                                            <br/>
                                            <span>Bronze Badge Completed</span>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="progress" data-percentage={books_read.length * 10}>
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value progress-books">
                                            {books_read.length * 10}%
                                            <br/>
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
                }
            </ Consumer>
        )
    }
}


export default Badges;
