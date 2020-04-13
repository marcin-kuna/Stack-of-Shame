import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import AddImg from '../../img/plus.svg';
import Arrow from '../../img/arrow.svg';
import ToStack from '../layout/ToStack';

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
                <Consumer>
                    {value => {
                        const { addMultimedia, games_list_sos } = value;
                            return (
                                <div className="row mb-4">
                                    <ToStack />

                                    <div className="col-md-6 mt-3"> 
                                        <div className="card card-game">
                                            <h2 className="card-header card-header-game card-header-medium rounded-0 text-center">{details.name}</h2>
                                            <img src={details.image.original_url} alt="" className="card-img waves-effect waves-block waves-light rounded-0"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                                        <ul className="card card-game">
                                            <li className="card-header card-header-game rounded-0 text-center">
                                                <h3>Synopsis</h3>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="card-body">
                                                    <p className="card-text">{details.deck}</p>
                                                </div>
                                            </li>
                                        </ul>  

                                        <ul className="card card-game">
                                            <li className="card-header card-header-game rounded-0 text-center">
                                                <h3>Game details</h3>
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Genre</strong>: {details.genres.map((item, index) => (
                                                    <span key={item.id} className="text-lowercase">{(index ? ', ' : '')}{item.name}</span>
                                                ))}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Release date</strong>: {details.original_release_date ? details.original_release_date : <span>No data</span>}
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
                                                    <span key={item.id}>{(index ? ', ' : '')}<a href={item.site_detail_url} target="_blank" className="text-decoration-none">{item.name}</a></span>
                                                )) : <span>No data</span>}
                                            </li>
                                            {/* <li className="list-group-item">
                                                <strong>Homepage</strong>: {details.homepage ? (<a href={details.homepage} target="_blank">{details.homepage}</a>) : (<span>none</span>)}
                                            </li> */}
                                            <li className="list-group-item">
                                                <strong>Overview</strong>: <a href={details.site_detail_url} target="_blank" className="text-decoration-none">{details.name}</a>
                                            </li>
                                        </ul>

                                        <div>
                                            <Link to="/" className="btn btn-block btn-go-back py-3">
                                                <img src={Arrow} alt="" className="go-back-arrow"/> Go back
                                            </Link>

                                            <button className="btn btn-block py-3 add-game-btn add-btn-details" onClick={() => addMultimedia(games_list_sos, 'games_list_sos', {title: details.name, id: details.guid, image: details.image.original_url, date: new Date})}><img src={AddImg} className="btn-icon"/> Add to SoS</button>
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

export default GameDetails;