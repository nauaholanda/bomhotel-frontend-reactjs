import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import Accommodations from './pages/Accommodations';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

function App() {

  const [user, setUser] = useState({
    id : 0, username : '', name : '', role: ''
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/accommodations' element={<Accommodations />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
