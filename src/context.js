import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movies_list: action.payload,
                heading: 'Search Results'
            };
        case 'ADD_MOVIE' :
            return {
                ...state,
                movies_list_sos: [...state.movies_list_sos, action.payload]
            };
        default: 
            return state;
    }
}

export class Provider extends Component {
    state = {
        movies_list: [],
        heading: 'Trending Movies',
        movies_list_sos: [],
        movies_watched: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    addMovie = (title, id, poster_path, date) => {
        const checkList = this.state.movies_list_sos.map((item) => {return item.id}).find(movieid => {
            return movieid === id
        })
        if(checkList === undefined){
            this.setState({movies_list_sos: [...this.state.movies_list_sos, {title, id, poster_path, date}]})
        }
    }

    deleteMovie = (id) => {
        this.setState({movies_list_sos: this.state.movies_list_sos.filter(movie => {
            return movie.id !== id
        })})
    }

    addToWatched = (title, id) => {
        const checkList = this.state.movies_watched.map((item) => {return item.id}).find(movieid => {
            return movieid === id
        })
        if(checkList === undefined){
            this.setState({movies_watched: [...this.state.movies_watched, {title, id}]});
        }
        this.deleteMovie(id)
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then(res => {
                // console.log(res.data)
                this.setState({movies_list: res.data.results})
            })
            .catch(err => console.log(err))
    }

    

    // componentDidMount(){
    //     axios({
    //         url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'user-key': API_KEY
    //         },
    //         data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    //       })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // }

    // componentDidMount(){
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=${process.env.REACT_APP_GIANTBOMB_KEY}&format=json`)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <Context.Provider value={{...this.state, addMovie: this.addMovie, deleteMovie: this.deleteMovie, addToWatched: this.addToWatched}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;