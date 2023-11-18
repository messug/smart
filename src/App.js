import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx'
import Calendar from './pages/Calendar.jsx';
import Entertainment from './pages/Entertainment.jsx';
import HomeSettings from './pages/Home Settings.jsx';
import Settings from './pages/Settings.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Calendar/>}/>
        <Route path="/" element={<Entertainment/>}/>
        <Route path="/" element={<HomeSettings/>}/>
        <Route path="/" element={<Settings/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
