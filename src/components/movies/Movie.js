import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import InfoImg from '../../img/information.svg';
import NoMovieImg from '../../img/no-movie-img.jpg';
import AddImg from '../../img/plus.svg';

class Movie extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { addMultimedia, movies_list_sos } = value;

                    return (
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card mb-4 shadow h-100 card-movie">
                                <div className="card-body card-body-medium">
                                    <h2 className="text-center card-header-medium">{this.props.title}</h2>

                                    <div>
                                        {this.props.poster_path ? <img src={`http://image.tmdb.org/t/p/w500${this.props.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light"/> : <img src={NoMovieImg} className="card-img waves-effect waves-block waves-light"/>}
                                        
                                        <Link to={`details/movie/${this.props.id}`} className="btn btn-block py-3 my-2 details-btn"> 
                                            <img src={InfoImg} className="btn-icon"/> Viev Details
                                        </Link>

                                        <button className="btn btn-block py-3 my-2 add-movie-btn" onClick={() => addMultimedia(movies_list_sos, 'movies_list_sos', {title: this.props.title, id: this.props.id, image: this.props.poster_path, date: new Date})}><img src={AddImg} className="btn-icon"/> Add Movie</button>
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
