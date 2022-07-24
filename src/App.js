import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Accommodations from './pages/Accommodations';
import { useState } from 'react';
import UserContext from './contexts/UserContext';
import AccommodationToDetailContext from './contexts/AccommodationToDetailContext';
import AccommodationDetails from './pages/AccommodationDetails';
import NewAccommodation from './pages/NewAccommodation';

function App() {

  const [user, setUser] = useState({
    id : 0, username : '', name : '', role: ''
  });

  const [accommodationToDetail, setAccommodationToDetail] = useState({
    id: 0, name: '', description: '', dailyCost: 0, occupancy: 0, imageURL: '', country: '', state: '', city: '', zipCode: ''
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AccommodationToDetailContext.Provider value={{accommodationToDetail, setAccommodationToDetail}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/accommodations' element={<Accommodations />} />
              <Route path='/accommodation' element={<AccommodationDetails />} />
              <Route path='/admin/new-accommodation' element={user.role === 'ADMIN' ? <NewAccommodation /> : <Navigate to='/login' replace />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<Signup />} />

          </Routes>
        </BrowserRouter>
      </AccommodationToDetailContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
