import './css/BookingDialog.css';
import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import BomHotelApi from '../services/BomHotelApi';
import UserContext from '../contexts/UserContext';

function BookingDialog({showBookingDialog, setShowBookingDialog, accommodation, toast}) {
    const {user} = useContext(UserContext);

    const [dates, setDates] = useState(null);

    const navigate = useNavigate();

    var totalCost = 0;

    function confirmBooking() {
        var days = calculateDaysBetween2Dates(dates[0], dates[1]);
        totalCost = days * accommodation.dailyCost;

        confirmDialog({
            message: `Confirmar reserva de ${days} dias, na acomodação ${accommodation.name} com custo total R$ ${totalCost}?`,
            header: 'Confirmar reserva',
            accept: () => doBookingRequest(),
            acceptLabel: 'Sim',
            rejectLabel: 'Não'
        });
    }

    function calculateDaysBetween2Dates(date1, date2) {
        var timeInMiliseconds = date2.getTime() - date1.getTime();

        var timeInDays = timeInMiliseconds/(1000 * 60 * 60 * 24);
        console.log(timeInDays);
        return timeInDays;
    }

    function doBookingRequest() {
        var requesBody = generateBookingRequestBody();

        BomHotelApi.post('booking', requesBody)
            .then((response) => navigate('/'))
            .catch((error) => showUnknownErrorMessage());

            setShowBookingDialog(false);
    }

    function generateBookingRequestBody() {
        return ({
            checkinDate: dates[0],
            checkoutDate: dates[1],
            totalCost: totalCost,
            userId: user.id,
            accommodationId: accommodation.id
        });
    }

    function showUnknownErrorMessage(){
        toast.current.show({severity:'error', summary: 'Erro ao realizar reserva', detail:'Ocorreu um erro inesperado e não foi possível concluir a reserva', life: 5000});
    }

    return ( 
        <Dialog header='Reservar acomodação' className='booking-dialog' position='top'
            visible={showBookingDialog} onHide={() => setShowBookingDialog(false)}>
            <p className='booking-dialog-text'>
                Você está prestes a ter essa incrível acomodação reservada apenas para você! 
                Precisamos apenas que nos informe as datas de check-in e check-out:
            </p>

            <div className='booking-dialog-bottom'>
                <span className='p-float-label'>
                    <Calendar dateFormat='dd/mm/yy' selectionMode='range' minDate={new Date()} inputId='caledar-input'
                        value={dates} onChange={(e) => setDates(e.value)} className='booking-dialog-calendar' />
                    <label htmlFor='caledar-input'>Check-in - Check-out</label>
                </span>

                <Button label='Reservar' onClick={confirmBooking} />
                <ConfirmDialog />
            </div>
        </Dialog>
     );
}

export default BookingDialog;