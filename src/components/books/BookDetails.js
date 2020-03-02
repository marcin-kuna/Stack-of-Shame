import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class BookDetails extends Component {
    state = {
        details: {},
    }

    parseSynopsis = () => {
        return {__html: this.state.details.flapcopy}
    }

    parseAuthor = () => {
        return {__html: this.state.details.authorbio}
    }

    componentDidMount() {
        axios.get(`https://reststop.randomhouse.com/resources/titles/${this.props.match.params.id}?expandLevel=1`)
        .then(res => {
            console.log(res.data)
            this.setState({details: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        const { details } = this.state;

        if (details === undefined || Object.keys(details).length === 0) {
            return <Spinner />
        } else {
            return (
                    <div className="col-md-6 mx-auto">
                        <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
                        <div className="card">
                            <h5 className="card-header">{details.titleweb}</h5>
                            <img src={details[`@uri`]} alt="" className="card-img waves-effect waves-block waves-light"/>
                            <div className="card-body">
                                <p className="card-text" dangerouslySetInnerHTML={this.parseSynopsis()}></p>
                            </div>
                        </div>
                        <ul className="list-group my-3">
                            <li className="list-group-item list-group-item-dark text-center">
                                <strong>Book details</strong>
                            </li>
                            <li className="list-group-item">
                                <strong>Author</strong>: {details.authorweb}
                            </li>
                            <li className="list-group-item">
                                <strong>Categories</strong>: {details.subjectcategorydescription1}, {details.subjectcategorydescription2}, {details.subjectcategorydescription3}
                            </li>
                            <li className="list-group-item">
                                <strong>Pages</strong>: {details.pages}
                            </li>
                            <li className="list-group-item">
                                <strong>ISBN</strong>: {details.isbn}
                            </li>
                            <li className="list-group-item">
                                <strong>Awards</strong>: {details.awards ? <span>{details.awards.award.awarddesc}, {details.awards.award.awardyear}</span> : <span>No data</span>} 
                            </li>
                        </ul>
                        <ul className="list-group my-3">
                            <li className="list-group-item list-group-item-dark text-center">
                                <strong>About author</strong>
                            </li>
                            <li className="list-group-item" dangerouslySetInnerHTML={this.parseAuthor()}>
                            </li>
                        </ul>
                    </div>
            )
        }
    }
}

export default BookDetails;