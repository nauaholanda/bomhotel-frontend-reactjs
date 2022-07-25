import './css/Layout.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import UserInfoLine from '../components/UserInfoLine';

function Layout() {

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