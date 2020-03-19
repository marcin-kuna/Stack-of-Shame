import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Book from './Book';

class Books extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { heading, media_list, search_code } = value;
                    // if (media_list === undefined || media_list.length === 0) {
                    //     return <Spinner/>}
                    if (search_code !== 'B') {
                        return <span></span>} 
                    // if (media_list.length === 1) {
                    //     return <p>Hey, i'm solo!</p>
                    // }
                    else {
                        // {console.log(media_list.length)}
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {media_list.slice(0,4).map(item => (
                                        <Book key={item.isbn} {...item}/>
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

export default Books;