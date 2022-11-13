import React from 'react';
import './App.css';
import LocationInput from './components/locationInput/LocationInput';
import Title from './atoms/title/Title';

function App() {
  return (
    <div className='App'>
      <Title />
      <LocationInput />
    </div>
  );
}

export default App;
