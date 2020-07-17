import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import Moment from 'react-moment';
import ProgressMovies from './ProgressMovies';
import ProgressGames from './ProgressGames';
import ProgressBooks from './ProgressBooks';
import InfoImg from '../../img/information.svg';
import Checkmark from '../../img/checkmark.svg';
import Trash from '../../img/trashcan.svg';


class Stack extends Component {
    render() {
        return (
            
            <Consumer>
            {value => {
                const { movies_list_sos, games_list_sos, books_list_sos, removeMultimedia, addToWatched, addToPlayed, addToRead} = value;
                   
                    return (
                        <React.Fragment>
                            <h1 className="text-center color-M mb-4">Movies to watch</h1>

                            <div>
                                {movies_list_sos.length === 0 ?
                                <div>
                                    <h1 className="text-center color-M mb-4">NONE!</h1> 
                                    <ProgressMovies />
                                </div>
                                : 
                                <div className="px-2">
                                    <div className="row">
                                    {movies_list_sos.map(item => (
                                    <div className="col-md-6 col-lg-3 mb-4">
                                        <div className="card mb-4 shadow h-100 card-movie">
                                            <div className="card-body card-body-medium" key={item.id}>
                                                <h3 className="text-center card-header-medium">{item.title}</h3>

                                                <div>
                                                    <img src={`http://image.tmdb.org/t/p/w500${item.image}`} alt="" className="card-img waves-effect waves-block waves-light"/>

                                                    <div className="card-text d-flex justify-content-between">
                                                        <Link to={`details/movie/${item.id}`} className="btn details-btn py-2 my-2">
                                                            <img src={InfoImg} className="btn-icon" alt="info-icon"/>
                                                        </Link>

                                                        <button className="btn check-medium-btn py-2 my-2" onClick={() => addToWatched(movies_list_sos, 'movies_list_sos', item.title, item.id)}>
                                                            <img src={Checkmark} className="btn-icon" alt="checkmark"/>
                                                        </button>

                                                        <button className="btn trash-medium-btn py-2 my-2" onClick={() => removeMultimedia(movies_list_sos, 'movies_list_sos', item.id)}>
                                                        <img src={Trash} className="btn-icon" alt="trash-icon"/>
                                                        </button>
                                                    </div>

                                                    <p className="date-added">Added: <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </div>
                                    <ProgressMovies />
                                </div>
                                }  
                            </div>

                            <h1 className="text-center color-G mb-4">Games to play</h1>

                            <div>
                                {games_list_sos.length === 0 ? 
                                <div>
                                    <h1 className="text-center color-G mb-4">NONE!</h1>
                                    <ProgressGames />
                                </div>
                                :
                                <div className="px-2">
                                    <div className="row">
                                    {games_list_sos.map(item => (
                                    <div className="col-md-6 col-lg-3 mb-4">
                                        <div className="card mb-4 shadow h-100 card-game">
                                            <div className="card-body card-body-medium" key={item.id}>
                                                <h3 className="text-center card-header-medium">{item.title}</h3>

                                                <div>
                                                    <img src={item.image} alt="" className="card-img waves-effect waves-block waves-light"/>

                                                    <div className="card-text d-flex justify-content-between">
                                                        <Link to={`details/game/${item.id}`} className="btn details-btn py-2 my-2">
                                                            <img src={InfoImg} className="btn-icon" alt="info-icon"/>
                                                        </Link>

                                                        <button className="btn check-medium-btn py-2 my-2" onClick={() => addToPlayed(games_list_sos, 'games_list_sos', item.title, item.id)}>
                                                            <img src={Checkmark} className="btn-icon" alt="checkmark"/>
                                                        </button>

                                                        <button className="btn trash-medium-btn py-2 my-2" onClick={() => removeMultimedia(games_list_sos, 'games_list_sos', item.id)}>
                                                            <img src={Trash} className="btn-icon" alt="trash-icon"/>
                                                        </button>
                                                    </div>

                                                    <p className="date-added">Added: <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </div>
                                    <ProgressGames />
                                </div>
                                }
                            </div>

                            <h1 className="text-center color-B mb-4">Books to read</h1>

                            <div>
                                {books_list_sos.length === 0 ? 
                                <div>
                                    <h1 className="text-center color-B mb-4">NONE!</h1>
                                    <ProgressBooks />
                                </div>
                                :
                                <div className="px-2">
                                    <div className="row">
                                        {books_list_sos.map(item => (
                                        <div className="col-md-6 col-lg-3 mb-4">
                                            <div className="card mb-4 shadow h-100 card-book">
                                                <div className="card-body card-body-medium" key={item.id}>

                                                    <h3 className="text-center card-header-medium">{item.title}</h3>

                                                    <div>
                                                        <img src={item.image} alt="" className="card-img waves-effect waves-block waves-light"/>

                                                        <div className="card-text d-flex justify-content-between">
                                                            <Link to={`details/book/${item.id}`} className="btn details-btn py-2 my-2">
                                                                <img src={InfoImg} className="btn-icon" alt="info-icon"/>
                                                            </Link>

                                                            <button className="btn check-medium-btn py-2 my-2" onClick={() => addToRead(books_list_sos, 'books_list_sos', item.title, item.id)}>
                                                                <img src={Checkmark} className="btn-icon" alt="checkmark"/>
                                                            </button>

                                                            <button className="btn trash-medium-btn py-2 my-2" onClick={() => removeMultimedia(books_list_sos, 'books_list_sos', item.id)}>
                                                                <img src={Trash} className="btn-icon" alt="trash-icon"/>
                                                            </button>
                                                        </div>

                                                        <p className="date-added">Added: <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                        </div>
                                        <ProgressBooks />
                                    </div>
                                    }
                                </div>
                        </React.Fragment>
                    )
                // }
            }}
        </Consumer>
        )
    }
}

export default Stack;