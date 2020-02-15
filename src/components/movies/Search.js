import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        movieTitle: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    findMovie = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${this.state.movieTitle}&page=1&include_adult=false`)
            .then(res => {
                // console.log(res.data)
                dispatch({
                    type: 'SEARCH_MOVIES',
                    payload: res.data.results
                })

                this.setState({movieTitle: ''})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4 col-md-8 mx-auto">
                            <h1 className="display-5 text-center">
                                <i className="fas fa-film px-3"></i>Search for a movie
                            </h1>
                            <form onSubmit={this.findMovie.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Movie title..." name="movieTitle" value={this.state.movieTitle} onChange={this.onChange}/>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Movie</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search
