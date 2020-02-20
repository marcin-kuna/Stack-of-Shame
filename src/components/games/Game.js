import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Game extends Component {

    addMovie = (dispatch) => {
        dispatch({
            type: 'ADD_GAME',
            payload: {title: this.props.game.name, id: this.props.game.guid}
        })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, addGame, addMultimedia, games_list_sos } = value;
                    // console.log(this.props)
                    return (
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5>{this.props.game.name}</h5>
                                    <img src={this.props.game.image.original_url} alt="" className="card-img waves-effect waves-block waves-light"/>
                                    <div>
                                    <Link to={`details/game/${this.props.game.guid}`} className="btn btn-dark py-3 my-2 col-md-6"> 
                                        <i className="fas fa-chevron-right pr-2"></i> View Details
                                    </Link>
                                    <button className="btn btn-primary py-3 my-2 col-md-6" onClick={() => addMultimedia(games_list_sos, 'games_list_sos', {title: this.props.game.name, id: this.props.game.guid, image: this.props.game.image.original_url, date: new Date})}><i className="fas fa-plus pr-2" ></i>Add to SoS</button>
                                    {/* <button className="btn btn-primary py-3 my-2 col-md-6" onClick={() => addGame(this.props.game.name, this.props.game.guid, this.props.game.image.original_url, new Date)}><i className="fas fa-plus pr-2" ></i>Add to SoS</button> */}
                                    {/* <button className="btn btn-primary py-3 my-2 col-md-6" onClick={this.addGame.bind(this, dispatch)}><i className="fas fa-plus pr-2" ></i>Add to SoS</button> */}
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

export default Game;
