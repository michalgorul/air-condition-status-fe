import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cities from 'src/pages/cities/Cities';
import Info from 'src/pages/info/Info';
import WeatherPollutionForecastState from 'src/pages/weatherPollutionForecastState/WeatherPollutionForecastState';
import './App.css';

import MainDisplay from './pages/mainDisplay/MainDisplay';
import History from 'src/pages/history/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainDisplay />} />
        <Route path='/history' element={<History />} />
        <Route path='/info' element={<Info />} />
        <Route path='/cities' element={<Cities />} />
        <Route
          path='/cities/:country/:state/:city'
          element={<WeatherPollutionForecastState />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
