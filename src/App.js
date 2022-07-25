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
import AccommodationDetails from './pages/AccommodationDetails';
import NewAccommodation from './pages/NewAccommodation';
import UpdateAccommodation from './pages/UpdateAccommodation';
import UserContext from './contexts/UserContext';
import AccommodationContext from './contexts/AccommodationContext';

function App() {

  const [accommodationToDetail, setAccommodationToDetail] = useState();
  const [accommodationToUpdate, setAccommodationToUpdate] = useState(null);
  const [user, setUser] = useState({
    id: 0,
    username: '',
    name: '',
    role: ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AccommodationContext.Provider value={{ accommodationToDetail, setAccommodationToDetail, accommodationToUpdate, setAccommodationToUpdate }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/accommodations' element={<Accommodations />} />
              <Route path='/accommodation' element={<AccommodationDetails />} />
              <Route path='/admin/new-accommodation' element={user.role === 'ADMIN' ? <NewAccommodation /> : <Navigate to='/login' replace />} />
              <Route path='/admin/update-accommodation' element={user.role === 'ADMIN' && accommodationToUpdate !== null ? <UpdateAccommodation /> : <Navigate to='/accommodations' replace />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<Signup />} />

          </Routes>
        </BrowserRouter>
      </AccommodationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
