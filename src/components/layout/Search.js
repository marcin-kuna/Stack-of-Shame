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

    updateHeading = () => {
        return `Search results for: ${this.state.title}`
    }

    findMedia = (e, updateMedias) => {
        e.preventDefault();

        if(this.state.media === 'Movie'){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${this.state.title}&page=1&include_adult=false`)
            .then(res => {
                console.log(res.data.results)
                updateMedias(res.data.results, 'M', this.updateHeading())
                this.setState({title: ''})
            })
            .catch(err => console.log(err))
        }

        else if(this.state.media === 'Game'){
            axios.get(`https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=${process.env.REACT_APP_GIANTBOMB_KEY}&format=json&query=${this.state.title}&resources=game`)
            .then(res => {
                console.log(res.data.results)
                updateMedias(res.data.results, 'G', this.updateHeading())
                this.setState({title: ''})
            })
            .catch(err => console.log(err))
        }
        // else if(this.state.media === 'Book'){
        //     axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=abT9rgejl0M6Po9Yup7MCQ&q=${this.state.title}`)
        //     .then(res => {
        //         console.log(res.data)
        //         const parser = new DOMParser();
        //         let data = parser.parseFromString(res.data, 'text/xml')
        //         console.log(data)
        //         console.log(data.getElementsByTagName('work'))
        //         updateMedias(res.data.docs, 'B', this.updateHeading())
        //         this.setState({title: ''})
        //     })
        //     .catch(err => console.log(err))
        // }
        // else if(this.state.media === 'Book'){
        //     axios.get(`http://openlibrary.org/search.json?title=${this.state.title}`)
        //     .then(res => {
        //         console.log(res.data.docs)
        //         updateMedias(res.data.docs, 'B', this.updateHeading())
        //         this.setState({title: ''})
        //     })
        //     .catch(err => console.log(err))
        // }

        // else if(this.state.media === 'Book'){
        //     axios.get(`https://reststop.randomhouse.com/resources/works?search=${this.state.title}`)
        //     .then(res => {
        //         console.log(res.data)
        //         // updateMedias(res.data.docs, 'B', this.updateHeading())
        //         // this.setState({title: ''})
        //     })
        //     .catch(err => console.log(err))
        // }
        else if(this.state.media === 'Book'){
            axios.get(`https://reststop.randomhouse.com/resources/titles?search=${this.state.title}`)
            .then(res => {
                if(res.data.title !== undefined){
                    updateMedias(res.data.title, 'B', this.updateHeading())
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
                        <div className="card card-body mb-4 p-4 col-md-6 mx-auto d-inline-block">
                            <h1 className="display-5 text-center">
                                {/* <i className="fas fa-search px-3"></i>Search for... */}
                                <img src={Magnifier} className="search-icon"/>Search for...
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
