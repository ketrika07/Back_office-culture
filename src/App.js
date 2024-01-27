import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';
import Terrain from './pages/Terrain';
import Culture from './pages/Culture';
import Register from './pages/Register';
import Inscription from './pages/Inscription';
import Signin from './pages/Signin';
import Check from './pages/Check';
import Ground_type from './pages/Ground_type';


function App() {

  const isLoggedIn = false; // Add your authentication logic here

  return (
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
        <div className='dashboard-body'>
          <Routes>
            <Route
              path='/'
              element={isLoggedIn ? <Navigate to='/orders' /> : <Navigate to='/Check' />}
            />
            <Route path='/orders' element={<Orders />} />
            <Route path='/locations' element={<div></div>} />
            <Route path='/profile' element={<div></div>} />
            <Route path='/terrain' element={<Terrain />} />
            <Route path='/culture' element={<Culture />} />
            <Route path='/register' element={<Register />} />
            <Route path='/inscription' element={<Inscription />} />
            <Route path='/Check' element={<Check />} />
            <Route path='/signin' element={<Signin />} />           
            <Route path='/Ground_type' element={<Ground_type />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;