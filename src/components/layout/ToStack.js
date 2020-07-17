import React from 'react';
import { Link } from 'react-router-dom';
import ToStackImg from '../../img/to-stack.svg';

const ToStack = () => { 
    return (
            <Link to="/stack">
                <img src={ToStackImg} alt="" className="to-stack"/>
            </Link>
    )
}

export default ToStack;
