import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Game from './Game';

class Games extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { games_list, heading } = value;
                    if (games_list === undefined || games_list.length === 0) {
                        return <Spinner/>
                    } else {
                        // console.log(games_list)
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {games_list.slice(0,9).map(item => (
                                        <Game key={item.id} game = {item}/>
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Games;