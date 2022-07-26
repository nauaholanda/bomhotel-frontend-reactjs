import './css/MyBookings.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import UserContext from '../contexts/UserContext';
import BomHotelApi from '../services/BomHotelApi';
import { Toast } from 'primereact/toast';
import BookingCard from '../components/BookingCard';

function MyBookings() {
    const [bookingsList, setBookingsList] = useState([]);

    const {user} = useContext(UserContext);

    const toast = useRef(null);

    function startBookingsList() {
        BomHotelApi.get(`booking/user/${user.id}`)
            .then((response) => setBookingsList(response.data))
            .catch((error) => showUnknownErrorMessage())
    }

    useEffect(() => startBookingsList(), []);

    function showUnknownErrorMessage(){
        toast.current.show({severity:'error', summary: 'Erro ao carregar reservas', detail:'Ocorreu um erro inesperado e não foi possível carregar as reservas', life: 5000});
    }

    return ( 
        <div className='my-bookings'>
            <h2 className='my-bookings-title'>Estas são as reservas que você fez através do Bom Hotel! Boa hospedagem!</h2>
            <Toast ref={toast} position='top-right' />
            <div className='bookings-container'>
                {bookingsList.map((booking, index) => <BookingCard booking={booking} key={index} />)}
            </div>
        </div> 
    );
}

export default MyBookings;