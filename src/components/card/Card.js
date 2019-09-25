import React from 'react';
import './Card.styles.css';

const Card = ({ monster }) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt='monster-img' />
            <h2>{monster.name}</h2>
            <h2>{monster.email}</h2>
        </div>
    );
};

export default Card;
