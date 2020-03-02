import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        media_list: [],
        heading: 'Trending Movies',
        movies_list_sos: [],
        games_list_sos: [],
        books_list_sos: [],
        movies_watched: [],
        games_played: [],
        books_read: [],
        search_code: 'M'
    }

    updateMedias = (newList, searchCode, heading) => {
        this.setState({media_list: newList, search_code: searchCode, heading: heading});
        console.log(this.state.media_list)
    }

    addMultimedia = (mediaList, type, media) => {
        const checkList = mediaList.find(item => item.id === media.id);
    
        if (checkList === undefined) {
          let newState = {};
          newState[type] = [...mediaList, media];
          this.setState(prevState => ({ ...prevState, ...newState }));
        }
      };

    removeMultimedia = (mediaList, type, id) => {
          let newState = {};
          newState[type] = mediaList.filter(media => {return media.id !== id})
          this.setState(prevState => ({ ...prevState, ...newState }));
      };

    addToWatched = (mediaList, type, title, id) => {
        const checkList = this.state.movies_watched.find(item => item.id === id);
        
        if(checkList === undefined){
            this.setState({movies_watched: [...this.state.movies_watched, {title, id}]});
        }
        this.removeMultimedia(mediaList, type, id);
    }

    addToPlayed = (mediaList, type, title, id) => {
        const checkList = this.state.games_played.find(item => item.id === id);
        
        if(checkList === undefined){
            this.setState({games_played: [...this.state.games_played, {title, id}]});
        }
        this.removeMultimedia(mediaList, type, id);
    }

    addToRead = (mediaList, type, title, id) => {
        const checkList = this.state.books_read.find(item => item.id === id);
        
        if(checkList === undefined){
            this.setState({books_read: [...this.state.books_read, {title, id}]});
        }
        this.removeMultimedia(mediaList, type, id);
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then(res => {
                // console.log(res.data)
                this.setState({media_list: res.data.results})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Context.Provider value={{...this.state, addMultimedia: this.addMultimedia, removeMultimedia: this.removeMultimedia, updateMedias: this.updateMedias, addToWatched: this.addToWatched, addToPlayed: this.addToPlayed, addToRead: this.addToRead}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;