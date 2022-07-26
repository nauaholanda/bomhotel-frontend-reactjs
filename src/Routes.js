import React, { useContext } from "react";
import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";
import { Navigate } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Accommodations from './pages/Accommodations';
import AccommodationDetails from './pages/AccommodationDetails';
import NewAccommodation from './pages/NewAccommodation';
import UpdateAccommodation from './pages/UpdateAccommodation';
import UserContext from "./contexts/UserContext";
import AccommodationContext from "./contexts/AccommodationContext";
import MyBookings from "./pages/MyBookings";

function Routes() {
    const { user } = useContext(UserContext);
    const { accommodationToDetail, accommodationToUpdate } = useContext(AccommodationContext);

    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/accommodations' element={<Accommodations />} />

                    <Route path='/my-bookings' element={user.role === 'CUSTOMER' 
                        ? <MyBookings /> : <Navigate to='/login' replace />} />

                    <Route path='/accommodation' element={accommodationToDetail 
                        ? <AccommodationDetails /> : <Navigate to='/accommodations' replace />} />

                    <Route path='/admin/new-accommodation' element={user.role === 'ADMIN' 
                        ? <NewAccommodation /> : <Navigate to='/login' replace />} />

                    <Route path='/admin/update-accommodation' element={user.role === 'ADMIN' && accommodationToUpdate !== null
                        ? <UpdateAccommodation /> : <Navigate to='/accommodations' replace />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/signup' element={<Signup />} />
            </ReactRoutes>
        </BrowserRouter>
    );
}

export default Routes;