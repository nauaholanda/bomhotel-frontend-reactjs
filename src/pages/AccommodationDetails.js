import './css/AccommodationDetails.css'
import React, {useContext} from 'react';
import GoBackButton from '../components/GoBackButton';
import AccommodationToDetailContext from '../contexts/AccommodationToDetailContext';
import { Button } from 'primereact/button';

function AccommodationDetails() {
    const {accommodationToDetail, setAccommodationToDetail} = useContext(AccommodationToDetailContext);

    return ( 
    <div>
        <div className='top-container-accommodation-details'><GoBackButton /></div>
        <div className='card accommodation-details-card'>
            <img className='image' src={accommodationToDetail.imageURL}/>
            <div className='accommodation-details-card-info'>
                <div className='top'>
                    <div className='name'><h3>{accommodationToDetail.name}</h3></div>
                    <p className='localization'><i className='pi pi-map-marker'/> {`${accommodationToDetail.country}, ${accommodationToDetail.state}, ${accommodationToDetail.city} - ${accommodationToDetail.zipCode} - ${accommodationToDetail.address}`}</p>
                    <div className='description'>{accommodationToDetail.description}</div>
                </div>
                <div className='bottom'>
                    <p className='occupancy'><i className='pi pi-users'/>{accommodationToDetail.occupancy} pessoa(s)</p>
                    <p className='cost'><i className='pi pi-money-bill' />R$ {accommodationToDetail.dailyCost}/dia</p>
                    <div className='button-container'>
                        <Button label='Reservar agora'/>
                    </div>
                </div>
            </div>   
        </div>
    </div> );
}

export default AccommodationDetails;