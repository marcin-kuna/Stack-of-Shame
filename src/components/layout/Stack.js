import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import Moment from 'react-moment';
import Badges from './Badges';


class Stack extends Component {
    render() {
        return (
            
            <Consumer>
            {value => {
                const { movies_list_sos, games_list_sos, books_list_sos, removeMultimedia, addToWatched, addToPlayed, addToRead} = value;
                // if (movies_list_sos === undefined || movies_list_sos.length === 0) {
                //     return (
                //         <h1>No movies to watch</h1>
                //     )
                // } else {
                   
                    return (
                        <React.Fragment>
                            <Link to="/" className="btn btn-dark btn-sm mb-4">Home</Link>
                            <h3 className="text-center mb-4">Movies to watch</h3>
                            <div className="container row">
                                {movies_list_sos.map(item => (
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                        <div className="card-body" key={item.id}>
                                            <h5 className="card-title">{item.title}</h5>
                                            <img src={`http://image.tmdb.org/t/p/w500${item.image}`} alt="" className="card-img waves-effect waves-block waves-light img-block"/>
                                            <p>Added: <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                            <Link to={`details/movie/${item.id}`} className="btn btn-info col-md-4"><i className="fas fa-info-circle"></i></Link>
                                            <button className="btn btn-danger col-md-4" onClick={() => removeMultimedia(movies_list_sos, 'movies_list_sos', item.id)}><i className="fas fa-trash"></i></button>
                                            {/* <button className="btn btn-danger col-md-4" onClick={() => deleteMovie(item.id)}><i className="fas fa-trash"></i></button> */}
                                            <button className="btn btn-success col-md-4" onClick={() => addToWatched(movies_list_sos, 'movies_list_sos', item.title, item.id)}><i className="fas fa-check-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <h3 className="text-center mb-4">Games to play</h3>
                            <div className="container row">
                                {games_list_sos.map(item => (
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                        <div className="card-body" key={item.id}>
                                            <h5 className="card-title">{item.title}</h5>
                                            <img src={item.image} alt="" className="card-img waves-effect waves-block waves-light img-block"/>
                                            <p>Added: <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                            <Link to={`details/game/${item.id}`} className="btn btn-info col-md-4"><i className="fas fa-info-circle"></i></Link>
                                            <button className="btn btn-danger col-md-4" onClick={() => removeMultimedia(games_list_sos, 'games_list_sos', item.id)}><i className="fas fa-trash"></i></button>
                                            <button className="btn btn-success col-md-4" onClick={() => addToPlayed(games_list_sos, 'games_list_sos', item.title, item.id)}><i className="fas fa-check-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <h3 className="text-center mb-4">Books to read</h3>
                            <div className="container row">
                                {books_list_sos.map(item => (
                                <div className="col-md-4">
                                    {console.log(item)}
                                    <div className="card mb-4 shadow-sm">
                                        <div className="card-body" key={item.id}>
                                            <h5 className="card-title">{item.title}</h5>
                                            <img src={item.image} alt="" className="card-img waves-effect waves-block waves-light img-block"/>
                                            <p>Added: <Moment format="DD/MM/YYYY">{item.date}</Moment></p>
                                            <Link to={`details/book/${item.id}`} className="btn btn-info col-md-4"><i className="fas fa-info-circle"></i></Link>
                                            <button className="btn btn-danger col-md-4" onClick={() => removeMultimedia(books_list_sos, 'books_list_sos', item.id)}><i className="fas fa-trash"></i></button>
                                            <button className="btn btn-success col-md-4" onClick={() => addToRead(books_list_sos, 'books_list_sos', item.title, item.id)}><i className="fas fa-check-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                                
                            <Badges />
                        </React.Fragment>
                    )
                // }
            }}
        </Consumer>
        )
    }
}

export default Stack