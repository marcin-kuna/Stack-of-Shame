import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import InfoImg from '../../img/information.svg';
import NoGameImg from '../../img/no-game-img.jpg';
import AddImg from '../../img/plus.svg';

class Game extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { addMultimedia, games_list_sos } = value;
                    
                    return (
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card mb-4 shadow h-100 card-game">
                                <div className="card-body card-body-medium">
                                    <h2 className="text-center card-header-medium">{this.props.name}</h2>

                                    <div>
                                        {this.props.image.original_url ? <img src={this.props.image.original_url} alt="" className="card-img waves-effect waves-block waves-light"/> : <img src={NoGameImg} className="card-img waves-effect waves-block waves-light"/>}
                                        
                                        <Link to={`details/game/${this.props.guid}`} className="btn btn-block py-3 my-2 details-btn"> 
                                            <img src={InfoImg} className="btn-icon"/> View Details
                                        </Link>

                                        <button className="btn btn-block py-3 my-2 add-game-btn" onClick={() => addMultimedia(games_list_sos, 'games_list_sos', {title: this.props.name, id: this.props.guid, image: this.props.image.original_url, date: new Date})}><img src={AddImg} className="btn-icon"/> Add to SoS</button>
                                        
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
