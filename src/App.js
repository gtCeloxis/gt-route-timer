import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import LocalTimer from './LocalTimer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <LocalTimer />
    </BrowserRouter>
  );
}

export default App;
