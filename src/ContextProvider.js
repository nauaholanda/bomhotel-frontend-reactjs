import React, {useState} from 'react';
import UserContext from './contexts/UserContext';
import AccommodationContext from './contexts/AccommodationContext';

function ContextProvider({children}) {
    const [accommodationToDetail, setAccommodationToDetail] = useState();
    const [accommodationToUpdate, setAccommodationToUpdate] = useState(null);
    const [user, setUser] = useState({id: 0, username: '', name: '', role: ''});

    return ( 
        <UserContext.Provider value={{ user, setUser }}>
            <AccommodationContext.Provider value={{ accommodationToDetail, setAccommodationToDetail, accommodationToUpdate, setAccommodationToUpdate }}>
                {children}
            </AccommodationContext.Provider>
        </UserContext.Provider>
    );
}

export default ContextProvider;