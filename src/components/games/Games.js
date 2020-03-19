import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Game from './Game';

class Games extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { heading, media_list, search_code } = value;
                    
                    if (search_code !== 'G') {
                        return <span></span>
                    } else {
                        if (media_list === undefined || media_list.length === 0) {
                        return <Spinner/>}
                        else{
                            return (
                                <React.Fragment>
                                    <h3 className="text-center mb-4">{heading}</h3>
                                    <div className="row">
                                        {media_list.slice(0,4).map(item => (
                                            <Game key={item.id} {...item}/>
                                        ))}
                                    </div>
                                </React.Fragment>
                            )
                        }
                    }
                }}
            </Consumer>
        )
    }
}

export default Games;