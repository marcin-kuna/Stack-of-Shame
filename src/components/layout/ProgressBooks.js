import React, { Component } from 'react';
import { Consumer } from '../../context';
import Checkmark from '../../img/checkmark.svg';


class ProgressBooks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { books_read } = value;
                    
                    return(
                        <div className='progress progress-books mb-4'>
                            <div className='progress-bar progress-bar-books'
                                role='progressbar'
                                aria-valuenow={books_read.length}
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{width: `${books_read.length}%`}}>
                                <span className="progress-text px-2" style={{fontSize: '20px'}}>{books_read.length} <img src={Checkmark} className="pb-1" style={{height: '20px'}}/></span>
                            </div>
                        </div>
                    )
                }
                }
            </ Consumer>
        )
    }
}


export default ProgressBooks;
