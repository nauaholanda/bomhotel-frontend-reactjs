import './css/AccommodationCard.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'primereact/button';
import AccommodationToDetailContext from '../contexts/AccommodationToDetailContext';

function AccommodationCard({accommodation}) {
    const {accommodationToDetail, setAccommodationToDetail} = useContext(AccommodationToDetailContext);

    const navigate = useNavigate();

    function openAccommodationDetails() {
        setAccommodationToDetail(accommodation);
        navigate("/accommodation");
    }

    return ( 
        <div className='card accommodation-card'>
            <img src={accommodation.imageURL} className='accommodation-image'></img>
            <div className='accommodation-card-info'>
                <div className='name'><h3>{accommodation.name}</h3></div>
                <p className='localization'><i className='pi pi-map-marker'/> {`${accommodation.country}, ${accommodation.state}, ${accommodation.city} - ${accommodation.zipCode} - ${accommodation.address}`}</p>
                <div className='description'>{accommodation.description}</div>
                <p className='occupancy'><i className='pi pi-users'/>{accommodation.occupancy} pessoa(s)</p>
            </div>
            <div className='accommodation-card-cost-and-button'>
                <p className='cost'>R$ {accommodation.dailyCost}/dia</p>
                <Button label='Ver Detalhes' onClick={openAccommodationDetails} />
            </div>
        </div> 
    );
}

export default AccommodationCard;