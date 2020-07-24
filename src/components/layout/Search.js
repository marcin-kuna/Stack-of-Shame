import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import Magnifier from '../../img/search.svg';

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

    updateHeading = (search_code) => {
        if (search_code === 'M') {
            return (
                <h2>Search results for: <span className="color-M">{this.state.title}</span></h2>
            )
        }
        else if (search_code === 'G') {
            return (
                <h2>Search results for: <span className="color-G">{this.state.title}</span></h2>
            )
        } else {
            return (
                <h2>Search results for: <span className="color-B">{this.state.title}</span></h2>
            )
        }
    }

    findMedia = (e, updateMedias) => {
        e.preventDefault();

        if(this.state.media === 'Movie'){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${this.state.title}&page=1&include_adult=false`)
            .then(res => {
                // console.log(res.data.results)
                updateMedias(res.data.results, 'M', this.updateHeading('M'))
                this.setState({title: ''})
            })
            .catch(err => console.log(err))
        }

        else if(this.state.media === 'Game'){
            axios.get(`https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=${process.env.REACT_APP_GIANTBOMB_KEY}&format=json&query=${this.state.title}&resources=game`)
            .then(res => {
                // console.log(res.data.results)
                updateMedias(res.data.results, 'G', this.updateHeading('G'))
                this.setState({title: ''})
            })
            .catch(err => console.log(err))
        }
        
        else if(this.state.media === 'Book'){
            axios.get(`https://reststop.randomhouse.com/resources/titles?search=${this.state.title}`)
            .then(res => {
                if(res.data.title !== undefined){
                    updateMedias(res.data.title, 'B', this.updateHeading('B'))
                    this.setState({title: ''})
                } else{
                    updateMedias([], 'B', this.updateHeading())
                    this.setState({title: ''})
                }
            })
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { updateMedias } = value;
                    return (
                        <div className="col-lg-6 mb-4 search-card px-2">
                            <div className="card card-body h-100 search-card-body">
                                <h1 className="display-5 text-center">
                                    <img src={Magnifier} className="search-icon" alt="magnifying glass"/>
                                    Search for...
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
                                            <button className="btn btn-lg btn-block search-btn" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search;
