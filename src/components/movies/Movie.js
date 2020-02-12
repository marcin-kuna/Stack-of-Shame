import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const { movie } = props;
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{movie.title}</h5>
                    <p className="card-text">
                        {/* <strong><i className="fas fa-poll"></i>Score</strong>: {movie.vote_average} */}
                        {/* <br/> */}
                        {/* <strong><i className="far fa-file-alt"></i>Synopsis</strong>: {movie.overview} */}
                    </p>
                    <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light"/>
                    <Link to={`details/movie/${movie.id}`} className="btn btn-dark btn-block py-3 my-2"> 
                        <i className="fas fa-chevron-right"></i> View Movie Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;
