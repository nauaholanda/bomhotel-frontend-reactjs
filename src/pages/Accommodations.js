import './css/Accommodations.css';
import React, { useEffect, useRef, useState } from 'react';
import BomHotelApi from '../services/BomHotelApi';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import AccommodationCard from '../components/AccommodationCard';

function Accommodations() {

    const toast = useRef(null);

    const [countryInput, setCountryInput] = useState('');
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [occupancyInput, setOccupancyInput] = useState(1);

    const [searchedAccommodations, setSearchedAccommodations] = useState([]);

    useEffect(() => startAccommodationsList(), []);

    function startAccommodationsList() {
        BomHotelApi.get("accommodation")
            .then((response) => setSearchedAccommodations(response.data))
            .catch((error) => showSearchErrorMessage());
    }
    
    function showSearchErrorMessage(){
        toast.current.show({severity:'error', summary: 'Falha ao pesquisar', detail:'Ocorrreu um erro inesperado ao consultar a base de dados', life: 5000});
    }

    function doSearch() {
        BomHotelApi.get(`accommodation/search?city=${cityInput}&state=${stateInput}&country=${countryInput}&occupancy=${occupancyInput}`)
            .then((response) => setSearchedAccommodations(response.data))
            .catch((error) => showSearchErrorMessage());
    }

    return ( 
        <div>
            <h2 className='title-accommodation-search'>Encontre a melhor hospedagem para sua próxima viagem!</h2>
            <div className='card search-bar'>
                <span className='p-float-label'>
                    <InputText id='country' value={countryInput} onChange={(e) => setCountryInput(e.target.value)} />
                    <label htmlFor='country'>País</label>
                </span>

                <span className='p-float-label'>
                    <InputText id='state' value={stateInput} onChange={(e) => setStateInput(e.target.value)} />
                    <label htmlFor='state'>Estado</label>
                </span>

                <span className='p-float-label'>
                    <InputText id='city' value={cityInput} onChange={(e) => setCityInput(e.target.value)} />
                    <label htmlFor='city'>Cidade</label>
                </span>

                <span className='p-float-label'>
                <InputNumber value={occupancyInput} onValueChange={(e) => e.value ? setOccupancyInput(e.value) : setOccupancyInput(0)} 
                    mode="decimal" min={1} showButtons />
                    <label htmlFor='addressToSearch'>Para quantas pessoas?</label>
                </span>

                <Button icon='pi pi-search' label='Pesquisar' onClick={doSearch}/>
            </div>
            <h3 className='summary-accommodation-search'>Foram encontradas {searchedAccommodations.length} acomodações.</h3>
            <Toast ref={toast} position='top-right' />
            {searchedAccommodations.map((accommodation, index) => <AccommodationCard accommodation={accommodation} key={index}/>)}
        </div> 
    );
}

export default Accommodations;