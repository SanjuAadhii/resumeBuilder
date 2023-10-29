import React from 'react';
import './ServiceCard.css'

function ServiceCard({item}) {
    const { imgUrl, title, desc } = item;

    return (
        <div className='service__item'>
            <div className='service__image'>
                <img src={imgUrl} alt="" className="service__image1"/>
            </div>
            <h2 className='service__title'>{title}</h2>
            <p className='service__description'>{desc}</p>
        </div>
    );
}

export default ServiceCard;