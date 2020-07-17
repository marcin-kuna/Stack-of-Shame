import React, { Component } from 'react';
import { Consumer } from '../../context';
import Checkmark from '../../img/checkmark.svg';


class ProgressMovies extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_watched} = value;
                    
                    return(
                        <div className='progress progress-movies mb-4'>
                            <div className='progress-bar progress-bar-movies'
                                role='progressbar'
                                aria-valuenow={movies_watched.length}
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{width: `${movies_watched.length}%`}}>
                                <span className="progress-text px-2" style={{fontSize: '20px'}}>{movies_watched.length} <img src={Checkmark} className="pb-1" style={{height: '20px'}} alt="checkmark"/></span>
                            </div>
                        </div>
                    )
                }
                }
            </ Consumer>
        )
    }
}


export default ProgressMovies;
