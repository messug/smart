import React from 'react';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Calendar from './pages/Calendar.jsx';
import Entertainment from './pages/Entertainment.jsx';
import HomeSettings from './pages/Home Settings.jsx';
import Settings from './pages/Settings.jsx';

const App = () => {
  return (
    
      <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/Homesettings" element={<HomeSettings/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
      
  );
}

export default App;
