import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import ArrowDown from '../../img/arrow-down-white.svg';

class Movies extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { heading, media_list, search_code } = value;
                    if (search_code !== 'M') {
                        return <span></span>
                    } else {
                        if (media_list === undefined || media_list.length === 0) {
                            return <Spinner/>}
                        else{
                            return (
                                <div className="px-2">
                                    <div className="row mb-2 ml-1">
                                        <h2 className="text-left text-white mb-4">{heading}</h2>
                                        <img src={ArrowDown} alt="" className="arrow-down"/>
                                    </div>
                                    
                                    <div className="row" 
                                    // style={{backgroundColor: `red`}}
                                    >
                                        {media_list.slice(0,4).map(item => (
                                            <Movie key={item.id} {...item}/>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    }
                }}
            </Consumer>
        )
    }
}

export default Movies