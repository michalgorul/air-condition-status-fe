import React from 'react';
import './App.css';

import MainDisplay from './pages/mainDisplay/MainDisplay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cities from 'src/pages/cities/Cities';
import WeatherPollutionState from 'src/pages/weatherPollutionState/WeatherPollutionState';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainDisplay />} />
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
