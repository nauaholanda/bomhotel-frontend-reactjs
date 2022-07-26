import './css/Menubar.css'
import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { Menubar as PrimeMenubar } from 'primereact/menubar';
import UserContext from '../contexts/UserContext';

function Menubar() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const items = [
        {
            label : 'Acomodações',
            icon : 'pi pi-building',
            command :() => navigate('/accommodations')
        },
        {
            label : 'Minhas Reservas',
            icon : 'pi pi-calendar',
            command :() => navigate('/my-bookings'),
            className : user.role === 'CUSTOMER' ? 'display' : 'hidden'
        },
        {
            label : 'Nova Acomodação',
            icon : 'pi pi-plus',
            command :() => navigate('/admin/new-accommodation'),
            className : user.role === 'ADMIN' ? 'display' : 'hidden'
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
            className : user.role !== '' ?  'display' : 'hidden'
        }
    ]

    return ( 
        <PrimeMenubar model={items} />
     );
}

export default Menubar;