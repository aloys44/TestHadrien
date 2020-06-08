import React from 'react';

import Header from './components/AccueilComponent/header/header.jsx';
import Intro from './components/AccueilComponent/intro/intro.jsx';
import WhoAreWe from './components/AccueilComponent/who-are-we/who-are-we.jsx';
import Carrousel from './components/AccueilComponent/carrousel/carrousel.jsx';
import Description from './components/AccueilComponent/description/description.jsx';
import Suggestion from './components/AccueilComponent/suggestion/suggestion.jsx';
import Participant from './components/AccueilComponent/listeParticipants/indexParticipant.jsx';
import ComingSoon from './components/AccueilComponent/alarm/ComingSoon.jsx';
import SuggestionCreation from './components/SuggestionCreationComponent/SuggestionCreation.jsx';
import Formulaire from './components/UtilisateurCreationComponent/Formulaire.jsx';
import Connexion from './components/ConnexionComponent/Connexion.jsx';



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
      <Participant />
      <ComingSoon />
      <SuggestionCreation />
      <Formulaire />
      <Connexion />
      
    </>
  );
}

export default App;
