import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class GameSearch extends Component {
    state = {
        gameTitle: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    findGame = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/search/?api_key=${process.env.REACT_APP_GIANTBOMB_KEY}&format=json&query=${this.state.gameTitle}&resources=game`)
            .then(res => {
                console.log(res.data)

                dispatch({
                    type: 'SEARCH_GAMES',
                    payload: res.data.results
                })

                this.setState({gameTitle: ''})
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
                                <i className="fas fa-gamepad px-3"></i>Search for a game
                            </h1>
                            <form onSubmit={this.findGame.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Game title..." name="gameTitle" value={this.state.gameTitle} onChange={this.onChange}/>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Game</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default GameSearch;
