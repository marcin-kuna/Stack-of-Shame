import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import AddImg from '../../img/plus.svg';
import Arrow from '../../img/arrow.svg';
import ToStack from '../layout/ToStack';

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
                <Consumer>
                    {value => {
                        const { addMultimedia, books_list_sos } = value;
                            return (
                                <div className="row mb-4">
                                    <ToStack />

                                    <div className="col-md-6 mt-3">
                                        <div className="card card-book">
                                            <h2 className="card-header card-header-book card-header-medium rounded-0 text-center">{details.titleweb}</h2>
                                            <img src={details[`@uri`]} alt="" className="card-img waves-effect waves-block waves-light rounded-0"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                                        <ul className="card card-book">
                                            <li className="card-header card-header-book rounded-0 text-center">
                                                <h3>Synopsis</h3>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="card-body">
                                                    <p className="card-text" dangerouslySetInnerHTML={this.parseSynopsis()}></p>
                                                </div>
                                            </li>
                                        </ul>  

                                        <ul className="card card-book">
                                            <li className="card-header card-header-book rounded-0 text-center">
                                                <h3>Book details</h3>
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

                                        <ul className="card card-book">
                                            <li className="card-header card-header-book rounded-0 text-center">
                                                <h3>About author</h3>
                                            </li>
                                            <li className="list-group-item" dangerouslySetInnerHTML={this.parseAuthor()}>
                                            </li>
                                        </ul>

                                        <div>
                                            <Link to="/" className="btn btn-block btn-go-back py-3">
                                                <img src={Arrow} alt="" className="go-back-arrow"/> Go back
                                            </Link>

                                            <button className="btn btn-block py-3 add-book-btn add-btn-details" onClick={() => addMultimedia(books_list_sos, 'books_list_sos', {title: details.titleweb, id: details.isbn, image: details[`@uri`], date: new Date})}><img src={AddImg} className="btn-icon"/> Add to SoS</button>
                                        </div> 
                                    </div>
                                </div>
                            )
                        }}
                        </Consumer>
                    )
        }
    }
}

export default BookDetails;