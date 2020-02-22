import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        title: '',
        media: 'Movie'
    }

    handleFormSelect = (e) => {
        this.setState({ media: e.target.value});
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    updateHeading = () => {
        return `Search results for: ${this.state.title}`
    }

    findMedia = (e, updateMedias) => {
        e.preventDefault();

        if(this.state.media === 'Movie'){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${this.state.title}&page=1&include_adult=false`)
            .then(res => {
                updateMedias(res.data.results, 'M', this.updateHeading())
                this.setState({title: ''})
            })
            .catch(err => console.log(err))
        }

        else if(this.state.media === 'Game'){
            axios.get(`https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=${process.env.REACT_APP_GIANTBOMB_KEY}&format=json&query=${this.state.title}&resources=game`)
            .then(res => {
                updateMedias(res.data.results, 'G', this.updateHeading())
                this.setState({title: ''})
            })
            .catch(err => console.log(err))
        }
        else if(this.state.media === 'Book'){
            console.log('Searching for a book...')
        }
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { updateMedias } = value;
                    return (
                        <div className="card card-body mb-4 p-4 col-md-10 mx-auto">
                            <h1 className="display-5 text-center">
                                <i className="fas fa-search px-3"></i>Search for...
                            </h1>
                            <form onSubmit={(e) => this.findMedia(e, updateMedias)}>
                                <div className="form-row align-items-center">
                                    <div className="col-md-3 my-1">
                                        <label className="mr-sm-2 sr-only" htmlFor="formSelect">Preference</label>
                                        <select className="custom-select custom-select-lg mr-sm-2" id="formSelect" onChange={this.handleFormSelect}>
                                            {/* <option defaultValue="Search for...">Search for...</option> */}
                                            <option value="Movie">Movie</option>
                                            <option value="Game">Game</option>
                                            <option value="Book">Book</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 my-1">
                                        <input type="text" className="form-control form-control-lg" placeholder="Movie, game or book title..." name="title" value={this.state.title} onChange={this.handleInput}/>
                                    </div>
                                    <div className="col-md-3 my-1">
                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search
