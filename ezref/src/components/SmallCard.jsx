import React from 'react';
import '../assets/css/smallcard.css';

const SmallCard = ({children, onClick, style}) => {

    return(
        <div className='small-card' onClick={onClick} style={{margin: '1rem', style}}>
            {children}
        </div>
    )
}

export default SmallCard;