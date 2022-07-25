import './css/AccommodationDetails.css'
import React, {useContext, useRef} from 'react';
import { useNavigate } from 'react-router';
import GoBackButton from '../components/GoBackButton';
import { Button } from 'primereact/button';
import UserContext from '../contexts/UserContext';
import BomHotelApi from '../services/BomHotelApi';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import AccommodationToDetailContext from '../contexts/AccommodationContext';

function AccommodationDetails() {
    const {accommodationToDetail, setAccommodationToUpdate} = useContext(AccommodationToDetailContext);
    const {user} = useContext(UserContext);

    const navigate = useNavigate();

    const toast = useRef(null);

    function confirmDelete() {
        confirmDialog({
            message: `Deseja excluir a acomodação ${accommodationToDetail.name} do sistema?`,
            header: 'Confirmar exclusão',
            icon: 'pi pi-exclamation-triangle',
            accept: () => deleteAccommodation(),
            acceptLabel: 'Sim',
            rejectLabel: 'Não'
        });
    }

    function deleteAccommodation() {
        BomHotelApi.delete(`accommodation/${accommodationToDetail.id}`)
            .then((response) => navigate('/accommodations'))
            .catch((error) => showUnknownErrorMessage());
    }

    function showUnknownErrorMessage(){
        toast.current.show({severity:'error', summary: 'Erro ao excluir', detail:'Ocorreu um erro inesperado e não foi possível excluir a acomodação', life: 5000});
    }

    function editAccommodation() {
        setAccommodationToUpdate(accommodationToDetail);
        navigate('/admin/update-accommodation');
    }

    return ( 
        <div>
            <Toast ref={toast} position='top-right' />
            <div className='top-container-accommodation-details'><GoBackButton /></div>
            <div className='card accommodation-details-card'>
                <img className='image' src={accommodationToDetail.imageURL} alt='Foto da acomodação'/>
                <div className='accommodation-details-card-info'>
                    <div className='top'>
                        <div className='name'><h3>{accommodationToDetail.name}</h3></div>
                        <p className='localization'><i className='pi pi-map-marker'/> {`${accommodationToDetail.country}, ${accommodationToDetail.state}, ${accommodationToDetail.city} - ${accommodationToDetail.zipCode} - ${accommodationToDetail.address}`}</p>
                        <div className='description'>{accommodationToDetail.description}</div>
                    </div>
                    <div className='bottom'>
                        <p className='occupancy'><i className='pi pi-users'/>{accommodationToDetail.occupancy} pessoa(s)</p>
                        <p className='cost'><i className='pi pi-money-bill' />R$ {accommodationToDetail.dailyCost}/dia</p>
                        <div className='buttons-container'>
                            {user.role === 'ADMIN' ? 
                                <>
                                    <Button className='p-button-danger' label='Deletar' onClick={confirmDelete}/> 
                                    <ConfirmDialog />
                                    <Button label='Editar' onClick={editAccommodation}/>
                                </>  
                                : <Button label='Fazer Reserva'/>}
                        </div>
                    </div>
                </div>   
            </div>
        </div> );
}

export default AccommodationDetails;