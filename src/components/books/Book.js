import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Book extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { addMultimedia, books_list_sos } = value;
                    // console.log(value)
                    return (
                        <div className="col-md-3">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5>{this.props.titleweb}</h5>
                                    <img src={this.props[`@uri`]} alt="" className="card-img waves-effect waves-block waves-light"/>
                                    {/* <img src={this.props.cover_i ? `http://covers.openlibrary.org/b/id/${this.props.cover_i}-L.jpg` : `https://ccinfo.unc.edu/files/2018/01/open-book.png`} alt="" className="card-img waves-effect waves-block waves-light"/> */}
                                    
                                    <Link to={`details/book/${this.props.isbn}`} className="btn btn-dark btn-block py-3 my-2"> 
                                        <i className="fas fa-chevron-right pr-2"></i> View Details
                                    </Link>
                                    <button className="btn btn-primary btn-block py-3 my-2" onClick={() => addMultimedia(books_list_sos, 'books_list_sos', {title: this.props.titleweb, id: this.props.isbn, image: this.props[`@uri`], date: new Date})}><i className="fas fa-plus pr-2" ></i>Add to SoS</button>
                                    
                                </div>
                            </div>
                        </div>
                        );
                }}
            </Consumer>
            )
        }
    }

export default Book;
