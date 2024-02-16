import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import { useContext } from 'react';
import { UserContext } from './UserContext.js';
import './App.css';
import Orders from './pages/Orders';
import Terrain from './pages/Terrain';
import Culture from './pages/Culture';
import Register from './pages/Register';
import Inscription from './pages/Inscription';
import Signin from './pages/Signin';
import Check from './pages/Check';
import Ground_type from './pages/Ground_type';
import BarAnimation from './pages/Register';
import Stat_month from './pages/Stat_month';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    <Router>
      <div className='dashboard-container'>
      {isLoggedIn && <SideBar menu={sidebar_menu} />}
        <div className='dashboard-body'>
          <Routes>
            <Route
              path='/'
              element={isLoggedIn ? <Navigate to='/register' /> : <Navigate to='/Check' />}
            />
            <Route path='/orders' element={<Orders />} />
            <Route path='/locations' element={<div></div>} />
            <Route path='/profile' element={<div></div>} />
            <Route path='/terrain' element={<Terrain />} />
            <Route path='/culture' element={<Culture />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Check' element={<Check />} />
            <Route path='/signin' element={<Signin />} />           
            <Route path='/Ground_type' element={<Ground_type />} />
          </Routes>
        </div>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;