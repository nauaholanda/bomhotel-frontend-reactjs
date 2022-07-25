import './css/Signup.css';
import logo_orange from '../images/logo_orange.png';
import React, { useContext, useState, useRef } from 'react';
import GoBackButton from '../components/GoBackButton';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import BomHotelApi from '../services/BomHotelApi';

function Signup() {
    const navigate = useNavigate();

    const [nameInput, setNameInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    
    const toast = useRef(null);

    function doSignup() {
        if (validateFields()) {
            showBlankFieldsErrorMessage();
            return;
        }

        sendSignupRequest();
    }

    function sendSignupRequest() {
        BomHotelApi.post("user", {name: nameInput, username : usernameInput, password : passwordInput})
            .then((response) => navigate('/login'))
            .catch((error) => {
                if (error.response.data.exception.includes('UsernameAlreadyExistsException')) {
                    showUsernameAlreadyExistsErrorMessage();
                } else {
                    showUnknownErrorMessage();
                }
            });
    }

    function validateFields() {
        return nameInput === '' || usernameInput === '' || passwordInput === '';
    }

    function showUnknownErrorMessage() {
        toast.current.show({severity:'error', summary: 'Falha ao cadastrar', detail:'O nome de usuário já está em uso', life: 5000});
    }

    function showUsernameAlreadyExistsErrorMessage() {
        toast.current.show({severity:'error', summary: 'Falha ao cadastrar', detail:'O nome de usuário já está em uso', life: 5000});
    }

    function showBlankFieldsErrorMessage() {
        toast.current.show({severity:'error', summary: 'Falha ao cadastrar', detail:'Todos os campos devem ser preenchidos', life: 5000});
    }

    return ( 
        <div className='whole-view-page'>
            <Toast ref={toast} position='top-center' />
            <div className='top-container-signup'>
                <GoBackButton />
            </div>
            <div className='card container-signup'>
                <img src={logo_orange} className='logo-signup' alt=''/>

                <p className='introduction-text-signup'>Cadastre-se e conheça as melhores acomodações ao redor do mundo.</p>

                <span className='p-float-label'>
                    <InputText id='name' value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                    <label htmlFor='name'>Nome</label>
                </span>

                <span className='p-float-label'>
                    <InputText id='username' value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
                    <label htmlFor='username'>Usuário</label>
                </span>

                <span className='p-float-label'>
                    <Password id='password' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} 
                        feedback={false} toggleMask={true} />
                    <label htmlFor='password'>Senha</label>
                </span>

                <Button onClick={doSignup}>Fazer Cadastro</Button>

                <p className='login-text'>Já tem cadastro? <Link to='/login'>Faça Login aqui</Link></p>
            </div>
        </div>
     );
}

export default Signup;