import React, { useContext, useEffect, useRef, useState } from 'react';
import UserContext from '../contexts/UserContext';
import BomHotelApi from '../services/BomHotelApi';
import { Toast } from 'primereact/toast';

function MyBookings() {
    const [bookingsList, setBookingsList] = useState(null);

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
        <div>
            <Toast ref={toast} position='top-right' />
            {bookingsList.map((booking, index) => <BookingCard booking={booking} key={index}/>)}
        </div> 
    );
}

export default MyBookings;