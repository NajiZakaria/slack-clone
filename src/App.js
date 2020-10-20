import React, { useState } from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Results from './Results/Results';
import requests from './Api/requests'

import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">
        <Header />
        <Nav setSelectedOption={setSelectedOption}/>
        <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
