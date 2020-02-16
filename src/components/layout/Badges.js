import React, { Component } from 'react';
import { Consumer } from '../../context';

class Badges extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_watched } = value;
                    
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="progress" data-percentage={movies_watched.length * 10}>
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            {movies_watched.length * 10}%
                                            <br/>
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="progress" data-percentage="60">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            60%
                                            <br/>
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="progress" data-percentage="90">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            90%
                                            <br/>
                                            <span>Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
                }
            </ Consumer>
        )
    }
}


export default Badges;
