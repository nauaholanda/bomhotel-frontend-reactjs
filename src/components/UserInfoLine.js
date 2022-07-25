import './css/UserInfoLine.css';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Avatar } from 'primereact/avatar';

function UserInfoLine() {
    const {user} = useContext(UserContext);

    return ( 
        <div>
            { user.role !== '' && 
                <div className='userInfoLine'>
                    <p>Olá, {user.name} - {user.username}</p> <Avatar icon={user.role === 'ADMIN' ? 'pi pi-key' : 'pi pi-user'} shape='circle' />
                </div> 
            }
        </div>
        );
}

export default UserInfoLine;