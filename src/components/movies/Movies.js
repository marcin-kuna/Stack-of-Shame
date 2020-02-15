import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Movie from './Movie';

class Movies extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { movies_list, heading } = value;
                    if (movies_list === undefined || movies_list.length === 0) {
                        return <Spinner/>
                    } else {
                        // console.log(movies_list)
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {movies_list.slice(0,9).map(item => (
                                        <Movie key={item.id} movie = {item}/>
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

export default Movies