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

                    return(
                        <div className="col-lg-6 mb-3">
                            <div className="row justify-content-between px-4">
                                <div className="col-3 text-center rounded p-2 jumbo-1">
                                    <img src={MovieImg} alt="" className="img-fluid"/>
                                    <h2>{movies_list_sos.length} Movies</h2>
                                    <h4>to watch</h4>
                                </div>
                                <div className="col-3 text-center rounded p-2 jumbo-2">
                                    <img src={GameImg} alt="" className="img-fluid"/>
                                    <h2>{games_list_sos.length} Games</h2>
                                    <h4>to play</h4>
                                </div>
                                <div className="col-3 text-center rounded p-2 jumbo-3">
                                    <img src={BookImg} alt="" className="img-fluid"/>
                                    <h2>{books_list_sos.length} Books</h2>
                                    <h4>to read</h4>
                                </div>
                            </div>
                            {/* <div className="to-stack text-center p-2">   
                                <Link to="/stack">
                                <svg width="100%" className="to-stack-text">
                                    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,378.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent"/>
                                    <text width="100%">
                                    <textPath xlinkHref="#curve">
                                        To Stack!
                                    </textPath>
                                    </text>
                                </svg>
                                <img src={Arrow} alt="" className="to-stack-arrow py-5"/>
                                </Link>
                            </div> */}
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