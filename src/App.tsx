import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cities from 'src/pages/cities/Cities';
import Info from 'src/pages/info/Info';
import WeatherPollutionState from 'src/pages/weatherPollutionState/WeatherPollutionState';
import './App.css';

import MainDisplay from './pages/mainDisplay/MainDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainDisplay />} />
        <Route path='/info' element={<Info />} />
        <Route path='/cities' element={<Cities />} />
        <Route
          path='/cities/:country/:state/:city'
          element={<WeatherPollutionState />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
