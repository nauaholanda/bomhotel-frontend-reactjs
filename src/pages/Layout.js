import './css/Layout.css'
import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import UserContext from '../contexts/UserContext';

function Layout() {

    const {user, setUser} = useContext(UserContext);

    return ( 
    <div>
        <Header />
        {user.name}
        <Outlet />
    </div> );
}

export default Layout;