import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class GameDetails extends Component {
    state = {
        details: {},
    }

    parseOverview = () => {
        return {__html: this.state.details.description}
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

        if (details === undefined || Object.keys(details).length === 0) {
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
                            {/* <div className="card-body">
                                <p className="card-text" dangerouslySetInnerHTML={this.parseOverview()}></p>
                            </div> */}
                        </div>
                        <ul className="list-group my-3">
                            <li className="list-group-item list-group-item-dark text-center">
                                <strong>Game details</strong>
                            </li>
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
                                    <span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                ))}
                            </li>
                            <li className="list-group-item">
                                <strong>Developers</strong>: {details.developers.map((item, index) => (
                                    <span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                ))}
                            </li>
                            <li className="list-group-item">
                                <strong>Publishers</strong>: {details.publishers.map((item, index) => (
                                    <span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                ))}
                            </li>
                            <li className="list-group-item">
                                <strong>Rating</strong>: {details.original_game_rating ? details.original_game_rating.map((item, index) => (
                                    <span key={item.id}>{(index ? ', ' : '')}{item.name}</span>
                                )) : <span>No data</span>}
                            </li>
                            <li className="list-group-item">
                                <strong>Similar Games</strong>: {details.similar_games ? details.similar_games.map((item, index) => (
                                    <span key={item.id}>{(index ? ', ' : '')}<a href={item.site_detail_url} target="_blank">{item.name}</a></span>
                                )) : <span>No data</span>}
                            </li>
                            {/* <li className="list-group-item">
                                <strong>Homepage</strong>: {details.homepage ? (<a href={details.homepage} target="_blank">{details.homepage}</a>) : (<span>none</span>)}
                            </li> */}
                            <li className="list-group-item">
                                <strong>Overview</strong>: <a href={details.site_detail_url} target="_blank">{details.name}</a>
                            </li>
                        </ul>
                    </div>
            )
        }
    }
}

export default GameDetails;