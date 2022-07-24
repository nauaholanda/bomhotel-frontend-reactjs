import './css/GoBackButton.css'
import React from 'react';
import { useNavigate } from 'react-router';

function GoBackButton() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return ( 
        <a onClick={goBack} className='goBackButton'>
            <i className='pi pi-arrow-left' /> <p>Voltar</p>
        </a> 
    );
}

export default GoBackButton;