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

    componentWillMount() {
        localStorage.getItem('movies_list_sos') && this.setState({
            movies_list_sos: JSON.parse(localStorage.getItem('movies_list_sos'))
        })
        localStorage.getItem('games_list_sos') && this.setState({
            games_list_sos: JSON.parse(localStorage.getItem('games_list_sos'))
        })
        localStorage.getItem('books_list_sos') && this.setState({
            books_list_sos: JSON.parse(localStorage.getItem('books_list_sos'))
        })
        localStorage.getItem('movies_watched') && this.setState({
            movies_watched: JSON.parse(localStorage.getItem('movies_watched'))
        })
        localStorage.getItem('games_played') && this.setState({
            games_played: JSON.parse(localStorage.getItem('games_played'))
        })
        localStorage.getItem('books_read') && this.setState({
            books_read: JSON.parse(localStorage.getItem('books_read'))
        })
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then(res => {
                this.setState({media_list: res.data.results})
            })
            .catch(err => console.log(err))
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('movies_list_sos', JSON.stringify(nextState.movies_list_sos));
        localStorage.setItem('games_list_sos', JSON.stringify(nextState.games_list_sos));
        localStorage.setItem('books_list_sos', JSON.stringify(nextState.books_list_sos));
        localStorage.setItem('movies_watched', JSON.stringify(nextState.movies_watched));
        localStorage.setItem('games_played', JSON.stringify(nextState.games_played));
        localStorage.setItem('books_read', JSON.stringify(nextState.books_read));
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