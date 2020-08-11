import React, { Component } from 'react';
import ComingSoon from './alarm/ComingSoon';
import Carrousel from './carrousel/carrousel';
import Description from './description/description';
import Explication from './explication/explication';
import Forum from './forum/forum';
import Intro from './intro/intro';
import Sortie from './sortie/sortie';
import Suggestion from './suggestion/suggestion';
import Todo from './todo/todo';
import WhoAreWe from './who-are-we/who-are-we';

class Accueil extends Component {
  render() {
    return (
      <>
        <Intro />
        <WhoAreWe />
        <Carrousel />
        <Description />
        <ComingSoon />
        <Explication />
        <Sortie />
        <Suggestion />
        <Todo />
        <Forum />
        <></>
      </>
    );
  }
}

export default Accueil;
