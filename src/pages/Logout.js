import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import UserContext from '../contexts/UserContext';

function Logout() {
    const {user, setUser} = useContext(UserContext);
    setUser({id : 0, username : '', name : '', role: ''});
    return ( <Navigate to='/login' replace />);
}

export default Logout;