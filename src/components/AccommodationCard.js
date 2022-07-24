import './css/AccommodationCard.css';
import React from 'react';
import { Button } from 'primereact/button';

function AccommodationCard({accommodation}) {
    return ( 
        <div className='card accommodation-card'>
            <img src='https://th.bing.com/th/id/R.698dc6a08d218108d3b14d574b20eed0?rik=lFA4BmHPjTYFmQ&pid=ImgRaw&r=0' className='accommodation-image'></img>
            <div className='accommodation-card-info'>
                <div className='name'><h3>{accommodation.name}</h3></div>
                <p className='localization'><i className='pi pi-map-marker'/> {`${accommodation.country}, ${accommodation.state}, ${accommodation.city} - ${accommodation.zipCode}`}</p>
                <div className='description'>{accommodation.description}</div>
                <p className='occupancy'><i className='pi pi-users'/>{accommodation.occupancy} pessoa(s)</p>
            </div>
            <div className='accommodation-card-cost-and-button'>
                <p className='cost'>R$ {accommodation.dailyCost}/dia</p>
                <Button label='Ver Detalhes' />
            </div>
        </div> 
    );
}

export default AccommodationCard;