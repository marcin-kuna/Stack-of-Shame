import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import PinImg from '../../img/pin.png';
import InfoImg from '../../img/information.svg';
import Page from '../../img/page.png';
import Clip from '../../img/clip.png';

class Movie extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { addMultimedia, movies_list_sos } = value;
                    // console.log(value)
                    return (
                        <div className="col-md-3">
                            <div className="card mb-4 shadow"
                            //   style={{transform: `rotate(${Math.random() * 5 - 2.5}deg`, backgroundImage: `url(${Page})`, backgroundSize: `cover`}}
                              >
                                <div className="card-body">
                                    <div className="row">
                                        {/* <img src={PinImg} alt="pin" className="pin mx-auto mb-2" style={{transform: `rotate(${Math.random() * 100 - 100}deg`}}/> */}
                                    </div>
                                    <h3>{this.props.title}</h3>
                                    <img src={`http://image.tmdb.org/t/p/w500${this.props.poster_path}`} alt="" className="card-img waves-effect waves-block waves-light" 
                                    // style={{transform: `rotate(${Math.random() * 5 - 2.5}deg`}}
                                    />

                                    {/* <img src={Clip} alt="" className="clip" style={{top: `${Math.random() * 250 + 150}px`}}/> */}
                                    
                                    <Link to={`details/movie/${this.props.id}`} className="btn btn-secondary btn-block py-3 my-2"> 
                                        <img src={InfoImg} className="icon"/> View Details
                                        {/* <i className="fas fa-chevron-right pr-2"></i> View Details */}
                                    </Link>
                                    <button className="btn btn-primary btn-block py-3 my-2" onClick={() => addMultimedia(movies_list_sos, 'movies_list_sos', {title: this.props.title, id: this.props.id, image: this.props.poster_path, date: new Date})}><i className="fas fa-plus pr-2" ></i>Add to SoS</button>
                                    
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
