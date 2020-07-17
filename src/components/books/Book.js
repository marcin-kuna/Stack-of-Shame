import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import InfoImg from '../../img/information.svg';
import NoBookImg from '../../img/no-book-img.jpg';
import AddImg from '../../img/plus.svg';

class Book extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { addMultimedia, books_list_sos } = value;

                    return (
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card mb-4 shadow-sm h-100 card-book">
                                <div className="card-body card-body-medium">
                                    <h2 className="text-center card-header-medium">{this.props.titleweb}</h2>

                                    <div>
                                        {this.props[`@uri`] ? <img src={this.props[`@uri`]} alt="" className="card-img waves-effect waves-block waves-light"/> : <img src={NoBookImg} className="card-img waves-effect waves-block waves-light" alt=""/>}
                                        
                                        <Link to={`details/book/${this.props.isbn}`} className="btn details-btn btn-block py-3 my-2"> 
                                            <img src={InfoImg} className="btn-icon" alt="info-icon"/> View Details
                                        </Link>

                                        <button className="btn add-book-btn btn-block py-3 my-2" onClick={() => addMultimedia(books_list_sos, 'books_list_sos', {title: this.props.titleweb, id: this.props.isbn, image: this.props[`@uri`], date: new Date()})}><img src={AddImg} className="btn-icon" alt="add-icon"/> Add to SoS</button>
                                        
                                    </div>
                                    
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
