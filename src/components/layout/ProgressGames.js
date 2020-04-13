import React, { Component } from 'react';
import { Consumer } from '../../context';
import Checkmark from '../../img/checkmark.svg';


class ProgressGames extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { games_played} = value;
                    
                    return(
                        <div className='progress progress-games mb-4'>
                            <div className='progress-bar progress-bar-games'
                                role='progressbar'
                                aria-valuenow={games_played.length}
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{width: `${games_played.length}%`}}>
                                <span className="progress-text px-2" style={{fontSize: '20px'}}>{games_played.length} <img src={Checkmark} className="pb-1" style={{height: '20px'}}/></span>
                            </div>
                        </div>
                    )
                }
                }
            </ Consumer>
        )
    }
}


export default ProgressGames;
