import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootswatch/dist/cyborg/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
