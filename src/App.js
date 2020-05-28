import React from 'react';

import Header from './components/header/header.jsx';
import Intro from './components/intro/intro.jsx'
import WhoAreWe from './components/who-are-we/who-are-we.jsx'

import './App.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <WhoAreWe />
    </>
  );
}

export default App;
