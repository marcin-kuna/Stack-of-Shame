import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Movie extends Component {

    addMovie = (dispatch) => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: {title: this.props.movie.title, id: this.props.movie.id}
        })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, addMovie } = value;
                    return (
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5>{this.props.movie.title}</h5>
                                    <img src={`http://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light"/>
                                    <div>
                                    <Link to={`details/movie/${this.props.movie.id}`} className="btn btn-dark py-3 my-2 col-md-6"> 
                                        <i className="fas fa-chevron-right pr-2"></i> View Details
                                    </Link>
                                    <button className="btn btn-primary py-3 my-2 col-md-6" onClick={() => addMovie(this.props.movie.title, this.props.movie.id, this.props.movie.poster_path, new Date)}><i className="fas fa-plus pr-2" ></i>Add to SoS</button>
                                    {/* <button className="btn btn-primary py-3 my-2 col-md-6" onClick={this.addMovie.bind(this, dispatch)}><i className="fas fa-plus pr-2" ></i>Add to SoS</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                }}
            </Consumer>
            )
        }
    }

export default Movie;
