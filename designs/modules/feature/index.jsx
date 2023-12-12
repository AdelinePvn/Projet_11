import React from 'react';
import './feature.scss';

export default function Feature({image, alt, title, description}){
    return (
        <div className='feature-item'>
            <img className="feature-icon" src={image} alt={alt} />
            <h3 className='feature-item-title'>{title}</h3>
            <p className='feature-item-description'>{description}</p>
        </div>
    );
}

