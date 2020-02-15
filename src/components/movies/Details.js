import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class Details extends Component {
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

        if (details === undefined || credits === undefined || Object.keys(details).length === 0 || Object.keys(details).length === 0) {
            return <Spinner />
        } else {
            return (
                <div className="col-md-6 mx-auto">
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
                    <div className="card">
                        <h5 className="card-header">{details.title}</h5>
                        <img src={`http://image.tmdb.org/t/p/original${details.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light"/>
                        <div className="card-body">
                            <p className="card-text">{details.overview}</p>
                        </div>
                    </div>
                    <ul className="list-group my-3">
                        <li className="list-group-item list-group-item-dark text-center">
                            <strong>Movie details</strong>
                        </li>
                        <li className="list-group-item">
                            <strong>Score</strong>: {details.vote_average}
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
                            <strong>Homepage</strong>: {details.homepage ? (<a href={details.homepage} target="_blank">{details.homepage}</a>) : (<span>none</span>)}
                        </li>
                        <li className="list-group-item">
                            <strong>IMDb</strong>: <a href={`https://www.imdb.com/title/${details.imdb_id}`} target="_blank">{details.title}</a>
                        </li>
                    </ul>
                    <ul className="list-group my-3">
                        <li className="list-group-item list-group-item-dark text-center">
                            <strong>Credits</strong>
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
                </div>
            )
        }
    }
}

export default Details;