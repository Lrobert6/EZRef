import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/card.css';

const Card = ({children, title}) => {
    let navigate = useNavigate();

    return(
        <div className='card'>
            <h2>{title}</h2>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                {children}
            </div>
        </div>
    )
}

export default Card;