import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class GameDetails extends Component {
    state = {
        details: {},
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/game/${this.props.match.params.id}/?api_key=${process.env.REACT_APP_GIANTBOMB_KEY}&format=json`)
        .then(res => {
            console.log(res.data.results)
            this.setState({details: res.data.results})
        })
        .catch(err => console.log(err))
    }

    render() {
        const { details } = this.state;
        // return(
        //     <h1>Game details</h1>
        // )

        if (details === undefined || Object.keys(details).length === 0 || Object.keys(details).length === 0) {
            return <Spinner />
        } else {
            return (
                <div className="col-md-6 mx-auto">
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
                    <div className="card">
                        <h5 className="card-header">{details.name}</h5>
                        <img src={details.image.original_url} alt="" className="card-img waves-effect waves-block waves-light"/>
                        <div className="card-body">
                            <p className="card-text">{details.deck}</p>
                        </div>
                    </div>
                    <ul className="list-group my-3">
                        <li className="list-group-item list-group-item-dark text-center">
                            <strong>Game details</strong>
                        </li>
                        {/* <li className="list-group-item">
                            <strong>Score</strong>: {details.vote_average}
                        </li> */}
                        <li className="list-group-item">
                            <strong>Genre</strong>: {details.genres.map((item, index) => (
                                <span key={item.id} className="text-lowercase">{(index ? ', ' : '')}{item.name}</span>
                            ))}
                        </li>
                        <li className="list-group-item">
                            <strong>Release date</strong>: {details.original_release_date}
                        </li>
                        <li className="list-group-item">
                            <strong>Platforms</strong>: {details.platforms.map((item, index) => (
                                <span key={item.id} className="text-lowercase">{(index ? ', ' : '')}{item.name}</span>
                            ))}
                        </li>
                        <li className="list-group-item">
                            <strong>Developers</strong>: {details.developers.map((item, index) => (
                                <span key={item.id} className="text-lowercase">{(index ? ', ' : '')}{item.name}</span>
                            ))}
                        </li>
                        <li className="list-group-item">
                            <strong>Publishers</strong>: {details.publishers.map((item, index) => (
                                <span key={item.id} className="text-lowercase">{(index ? ', ' : '')}{item.name}</span>
                            ))}
                        </li>
                        {/* <li className="list-group-item">
                            <strong>Tagline</strong>: {details.tagline}
                        </li> */}
                        {/* <li className="list-group-item">
                            <strong>Homepage</strong>: {details.homepage ? (<a href={details.homepage} target="_blank">{details.homepage}</a>) : (<span>none</span>)}
                        </li> */}
                        <li className="list-group-item">
                            <strong>GiantBomb</strong>: <a href={details.site_detail_url} target="_blank">{details.name}</a>
                        </li>
                    </ul>
                    {/* <ul className="list-group my-3">
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
                    </ul> */}
                </div>
            )
        }
    }
}

export default GameDetails;