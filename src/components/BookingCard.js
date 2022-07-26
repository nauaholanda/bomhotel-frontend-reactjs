import './css/BookingCard.css';
import dayjs from 'dayjs';
import React from 'react';

function BookingCard({booking}) {
    const accommodation = booking.accommodation;

    const checkinDate = dayjs(booking.checkinDate).format('DD/MM/YYYY');
    const checkoutDate = dayjs(booking.checkinDate).format('DD/MM/YYYY');
    const totalCostWith2DecimalPlaces = booking.totalCost.toFixed(2);

    return ( 
        <div className='card booking-card'>
            <img src={accommodation.imageURL} className='accommodation-image' alt='Foto da acomodação'></img>
            <div className='booking-card-info'>
                <div className='name'><h3>{accommodation.name}</h3></div>
                <p className='localization'><i className='pi pi-map-marker'/> {`${accommodation.country}, ${accommodation.state}, ${accommodation.city} - ${accommodation.zipCode} - ${accommodation.address}`}</p>
                <div className='description'>{accommodation.description}</div>
                <p className='occupancy'><i className='pi pi-users'/>{accommodation.occupancy} pessoa(s)</p>
            </div>
            <div className='booking-card-totalCost-and-dates'>
                <p className='totalCost'>Custo Total: R$ {totalCostWith2DecimalPlaces}</p>
                <p className='dates'>{checkinDate} - {checkoutDate}</p>
            </div>
        </div> 
    );
}

export default BookingCard;