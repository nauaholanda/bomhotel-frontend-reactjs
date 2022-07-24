import './css/Menubar.css'
import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { Menubar as PrimeMenubar } from 'primereact/menubar';
import UserContext from '../contexts/UserContext';

function Menubar() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const items = [
        {
            label : 'Acomodações',
            icon : 'pi pi-building',
            command :() => navigate('/accommodations')
        },
        {
            label : 'Fazer Login',
            icon : 'pi pi-sign-in',
            command :() => navigate('/login'),
            className : user.role === '' ? 'display' : 'hidden'
        },
        {
            label : 'Fazer Logout',
            icon : 'pi pi-sign-out',
            command :() => navigate('/logout'),
            className : user.role === '' ? 'hidden' : 'display'
        }
    ]

    return ( 
        <PrimeMenubar model={items} />
     );
}

export default Menubar;