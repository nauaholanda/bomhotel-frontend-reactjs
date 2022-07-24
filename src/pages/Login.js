import './css/Login.css';
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
import UserContext from '../contexts/UserContext';

function Login() {

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    
    const toast = useRef(null);

    function doLogin() {
        if (validateFields()) {
            showBlankFieldsErrorMessage();
            return;
        }

        sendLoginRequest();
    }

    function validateFields() {
        return usernameInput === '' || passwordInput === '';
    }

    function sendLoginRequest() {
        console.log(user)

        BomHotelApi.post("login", {username : usernameInput, password : passwordInput})
            .then((response) => {
                setUser(response.data);
                navigate('/');
            })
            .catch((error) => showAuthenticationErrorMessage());
    }

    function showAuthenticationErrorMessage(){
        toast.current.show({severity:'error', summary: 'Falha na autenticação', detail:'Usuário e/ou senha incorretos', life: 5000});
    }

    function showBlankFieldsErrorMessage(){
        toast.current.show({severity:'error', summary: 'Falha na autenticação', detail:'Os campos Usuário e Senha devem ser preenchidos', life: 5000});
    }

    return ( 
        <div className='whole-view-page'>
            <Toast ref={toast} position='top-center' />
            <div className='top-container-login'>
                <GoBackButton />
            </div>
            <div className='card container-login'>
                <img src={logo_orange} className='logo-login' />

                <p className='welcome-text-login'>Bem-vindo(a)</p>

                <span className='p-float-label'>
                    <InputText id='username' value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
                    <label htmlFor='username'>Usuário</label>
                </span>

                <span className='p-float-label'>
                    <Password id='password' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} 
                        feedback={false} toggleMask={true} />
                    <label htmlFor='password'>Senha</label>
                </span>

                <Button onClick={doLogin}>Fazer Login</Button>

                <p className='signup-text'>Novo(a) no Bom Hotel? <Link to='/signup'>Cadastre-se aqui</Link></p>
            </div>
        </div>
     );
}

export default Login;