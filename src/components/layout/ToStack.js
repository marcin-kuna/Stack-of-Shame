import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../img/arrow-white.svg';

const ToStack = () => { 
    return (
        <div className="to-stack text-center p-2">   
            <Link to="/stack">
                <svg width="100%" className="to-stack-text">
                    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,378.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                     fill="transparent"
                    />
                    <text width="100%">
                        <textPath xlinkHref="#curve">
                            To Stack!
                        </textPath>
                    </text>
                </svg>
                <img src={Arrow} alt="" className="to-stack-arrow"/>
            </Link>
        </div>
    )
}

export default ToStack;
