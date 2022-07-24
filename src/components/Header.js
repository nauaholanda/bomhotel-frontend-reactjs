import './css/Header.css';
import logo_white from '../images/logo_white.png';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Menubar from './Menubar';
import UserContext from '../contexts/UserContext';

function Header() {
    const {user, setUser} = useContext(UserContext);

    return ( 
    <header className='header'>
        <Link to='/'><img className='logo-header' src={logo_white} /></Link>
        <Menubar />
    </header> );
}

export default Header;