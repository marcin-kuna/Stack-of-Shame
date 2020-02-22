import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Movie extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { addMultimedia, movies_list_sos } = value;
                    // console.log(value)
                    return (
                        <div className="col-md-3">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5>{this.props.movie.title}</h5>
                                    <img src={`http://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light"/>
                                    
                                    <Link to={`details/movie/${this.props.movie.id}`} className="btn btn-dark btn-block py-3 my-2"> 
                                        <i className="fas fa-chevron-right pr-2"></i> View Details
                                    </Link>
                                    <button className="btn btn-primary btn-block py-3 my-2" onClick={() => addMultimedia(movies_list_sos, 'movies_list_sos', {title: this.props.movie.title, id: this.props.movie.id, image: this.props.movie.poster_path, date: new Date})}><i className="fas fa-plus pr-2" ></i>Add to SoS</button>
                                    
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
