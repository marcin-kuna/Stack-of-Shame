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
        default: 
            return state;
    }
}

export class Provider extends Component {
    state = {
        movies_list: [],
        heading: 'Trending Movies',
        dispatch: action => this.setState(state => reducer(state, action))
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
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;