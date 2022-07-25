import './css/UpdateAccommodation.css';
import React, { useContext, useRef, useState } from 'react';
import GoBackButton from '../components/GoBackButton';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import BomHotelApi from '../services/BomHotelApi';
import AccommodationContext from '../contexts/AccommodationContext';

function UpdateAccommodation() {
    const {accommodationToUpdate, setAccommodationToUpdate} = useContext(AccommodationContext);

    const [imageURL, setImageURL] = useState(accommodationToUpdate.imageURL);
    const [name, setName] = useState(accommodationToUpdate.name);
    const [description, setDescription] = useState(accommodationToUpdate.description);
    const [country, setCountry] = useState(accommodationToUpdate.country);
    const [state, setState] = useState(accommodationToUpdate.state);
    const [city, setCity] = useState(accommodationToUpdate.city);
    const [zipCode, setZipCode] = useState(accommodationToUpdate.zipCode);
    const [address, setAddress] = useState(accommodationToUpdate.address);
    const [occupancy, setOccupancy] = useState(accommodationToUpdate.occupancy);
    const [dailyCost, setDailyCost] = useState(accommodationToUpdate.dailyCost);
    
    const navigate = useNavigate();

    const toast = useRef(null);

    function saveAccommodation() {
        if (validateFields()) {
            showBlankFieldsErrorMessage();
            return;
        }

        sendPutRequest();
    }

    function validateFields() {
        return imageURL === '' || name === '' || description === '' || country === '' 
        ||  state === '' ||  city === '' ||  zipCode === '' || address === '';
    }

    function showBlankFieldsErrorMessage(){
        toast.current.show({severity:'error', summary: 'Erro ao atualizar', detail:'Todos os campos devem ser preenchidos', life: 5000});
    }

    function showUnknownErrorMessage(){
        toast.current.show({severity:'error', summary: 'Erro ao atualizar', detail:'Ocorreu um erro inesperado e não foi possível atualizar a acomodação', life: 5000});
    }

    function sendPutRequest() {
        var requestBody = generateRequestBody();
        BomHotelApi.post("accommodation", requestBody)
            .then((response) => {
                setAccommodationToUpdate(null);
                navigate('/accommodations');
            })
            .catch((error) => showUnknownErrorMessage());
    }

    function generateRequestBody() {
        return {
            id: accommodationToUpdate.id,
            imageURL: imageURL,
            name: name,
            description: description,
            country: country,
            state: state,
            city: city,
            zipCode: zipCode,
            address: address,
            occupancy: occupancy,
            dailyCost: dailyCost
        };
    }

    return ( 
        <div>
            <Toast ref={toast} position='top-right' />
            <div className='top-container-update-accommodation'><GoBackButton /></div>
            <div className='card update-accommodation-card'>

                <div className='image-container'>
                    <img className='image' src={imageURL} alt='Foto da acomodação'/>
                    <span className='p-float-label'>
                        <InputText id='imageURL' value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
                        <label htmlFor='imageURL'>URL da imagem</label>
                    </span>
                </div>
                <div className='right-container'>
                    <div className='infos-container'>
                        <span className='p-float-label'>
                            <InputText id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor='name'>Nome</label>
                        </span>
                        <div className='description-textarea-container'>
                            <span className='p-float-label'>
                                <InputTextarea id='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                                <label htmlFor='description'>Descrição</label>
                            </span>
                        </div>

                        <div className='input-group'>
                            <span className='p-float-label'>
                                <InputText id='country' value={country} onChange={(e) => setCountry(e.target.value)}/>
                                <label htmlFor='country'>País</label>
                            </span>
                            <span className='p-float-label'>
                                <InputText id='state' value={state} onChange={(e) => setState(e.target.value)}/>
                                <label htmlFor='state'>Estado</label>
                            </span>
                            <span className='p-float-label'>
                                <InputText id='city' value={city} onChange={(e) => setCity(e.target.value)}/>
                                <label htmlFor='city'>Cidade</label>
                            </span>
                        </div>

                        <div className='input-group'>
                            <span className='p-float-label'>
                                <InputText id='zipCode' value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                                <label htmlFor='zipCode'>CEP</label>
                            </span>
                            <span className='p-float-label'>
                                <InputText id='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                                <label htmlFor='address'>Endereço</label>
                            </span>
                        </div>

                        <div className='input-group'>
                            <span className='p-float-label'>
                                <InputNumber id='occupancy' value={occupancy} onValueChange={(e) => setOccupancy(e.value)}
                                    mode="decimal" min={1} showButtons />
                                <label htmlFor='occupancy'>Ocupação</label>
                            </span>
                            <span className='p-float-label'>
                                <InputNumber id='dailyCost' value={dailyCost} onValueChange={(e) => setDailyCost(e.value)}
                                    minFractionDigits={2} min={0} prefix='R$ ' showButtons />
                                <label htmlFor='dailyCost'>Custo Diário</label>
                            </span>
                        </div>
                    </div>

                    <div className='buttons-container'>
                        <Button label='Cancelar' onClick={() => navigate(-1)}/>
                        <Button label='Salvar'onClick={saveAccommodation}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default UpdateAccommodation;