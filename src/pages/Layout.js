import './css/Layout.css'
import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import UserContext from '../contexts/UserContext';
import UserInfoLine from '../components/UserInfoLine';

function Layout() {

    const {user, setUser} = useContext(UserContext);

    return ( 
    <div>
        <Header />
        <div className='page'>
            <UserInfoLine />
            <Outlet />
        </div>
    </div> );
}

export default Layout;