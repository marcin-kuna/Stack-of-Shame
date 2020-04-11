import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import AddImg from '../../img/plus.svg';
import Arrow from '../../img/arrow.svg';


class MovieDetails extends Component {
    state = {
        details: {},
        credits: {}
    }

    componentDidMount() {
        axios.all([
            axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`),
            axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        ]).then(axios.spread((detailsRes, creditsRes) => {
            this.setState({details: detailsRes.data});
            this.setState({credits: creditsRes.data});
        }))
        .catch(err => console.log(err))
    }

    render() {
        const { details, credits } = this.state;

        if (details === undefined || credits === undefined || Object.keys(details).length === 0 || Object.keys(credits).length === 0) {
            return <Spinner />
        } else {
            return (
                <Consumer>
                    {value => {
                        const { addMultimedia, movies_list_sos } = value;
                            return(
                                <div className="row mb-4">

                                    <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                                        
                                        <div className="card card-movie">
                                            <h2 className="card-header card-header-movie card-header-medium rounded-0 text-center">{details.title}</h2>
                                            <img src={`http://image.tmdb.org/t/p/original${details.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light rounded-0"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex flex-column justify-content-between mt-3">

                                        <ul className="card card-movie">
                                            <li className="card-header card-header-movie rounded-0 text-center">
                                                <h3>Synopsis</h3>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="card-body">
                                                    <p className="card-text">{details.overview}</p>
                                                </div>
                                            </li>
                                        </ul>  
                                        

                                        <ul className="card card-movie">
                                            <li className="card-header card-header-movie rounded-0 text-center">
                                                <h3>Movie details</h3>
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Score</strong>: {details.vote_average}/10
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Genre</strong>: {details.genres.map((item, index) => (
                                                    <span key={item.id} className="text-lowercase">{(index ? ', ' : '')}{item.name}</span>
                                                ))}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Release date</strong>: {details.release_date}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Runtime</strong>: {details.runtime} minutes
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Tagline</strong>: {details.tagline}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Homepage</strong>: {details.homepage ? (<a href={details.homepage} target="_blank" className="text-decoration-none">{details.homepage}</a>) : (<span>none</span>)}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>IMDb</strong>: <a href={`https://www.imdb.com/title/${details.imdb_id}`} target="_blank" className="text-decoration-none">{details.title}</a>
                                            </li>
                                        </ul>

                                        <ul className="card card-movie">
                                            <li className="card-header card-header-movie rounded-0 text-center">
                                                <h3>Credits</h3>
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Cast</strong>: {credits.cast !== undefined ? credits.cast.slice(0,5).map((item, index) => (<span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                                )) : (<div>Loading...</div>)}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Director</strong>: {credits.crew !== undefined ? credits.crew.filter((person) => {
                                                return person.job === 'Director'
                                                }).map((item, index) => (<span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                                )) : (<div>Loading...</div>)}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Screenplay</strong>: {credits.crew !== undefined ? credits.crew.filter((person) => {
                                                return person.job === 'Screenplay' || person.job === 'Writer'
                                                }).map((item, index) => (<span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                                )) : (<div>Loading...</div>)}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Music</strong>: {credits.crew !== undefined ? credits.crew.filter((person) => {
                                                return person.job === 'Original Music Composer' || person.job === 'Music'
                                                }).map((item, index) => (<span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                                )) : (<div>Loading...</div>)}
                                            </li>
                                        </ul>

                                        <div>
                                            <Link to="/" className="btn btn-block btn-go-back py-3">
                                                <img src={Arrow} alt="" className="go-back-arrow"/> Go back
                                            </Link>

                                            <button className="btn btn-block py-3 add-movie-btn add-movie-btn-details" onClick={() => 
                                                // console.log(this.state.details)
                                                addMultimedia(movies_list_sos, 'movies_list_sos', {title: details.title, id: details.id, image: details.poster_path, date: new Date})}>
                                                <img src={AddImg} className="btn-icon-details"/> Add Movie
                                            </button>
                                        </div>    
                                    </div>
                                </div>
                            )
                    }}
                </Consumer>
            )
        }
    }
}

export default MovieDetails;