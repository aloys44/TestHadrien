import React from 'react';

import Header from './components/accueilComponent/header/header.jsx';
import Intro from './components/accueilComponent/intro/intro.jsx';
import WhoAreWe from './components/accueilComponent/who-are-we/who-are-we.jsx';
import Carrousel from './components/accueilComponent/carrousel/carrousel.jsx';
import Description from './components/accueilComponent/description/description.jsx';
import Suggestion from './components/accueilComponent/suggestion/suggestion.jsx';



import './App.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <WhoAreWe />
      <Carrousel />
      <Description />
      <Suggestion />
    </>
  );
}

export default App;
