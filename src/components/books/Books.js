import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Book from './Book';
import ArrowDown from '../../img/arrow-down-white.svg';

class Books extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { heading, media_list, search_code } = value;
                    if (search_code !== 'B') {
                        return <span></span>} 
                    // if (media_list.length === 1) {
                    //     return <p>Hey, i'm solo!</p>
                    // }
                    else {
                        if (media_list === undefined || media_list.length === 0) {
                            return <Spinner/>}
                        else {
                            return (
                                <div className="px-2 mb-4">
                                    <div className="row mb-2 ml-1">
                                        <h2 className="text-left text-white mb-4">{heading}</h2>
                                        <img src={ArrowDown} alt="" className="arrow-down"/>
                                    </div>
                                    <div className="row">
                                        {media_list.slice(0,4).map(item => (
                                            <Book key={item.id} {...item}/>
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

export default Books;