import React, { Component } from "react";

import Intro from "./intro/intro.jsx";
import WhoAreWe from "./who-are-we/who-are-we.jsx";
import Carrousel from "./carrousel/carrousel.jsx";
import Description from "./description/description.jsx";
import Explication from "./explication/explication.jsx";
import Suggestion from "./suggestion/suggestion.jsx";
import Todo from "./todo/todo.jsx";
import Sortie from "./sortie/sortie.jsx";
import Forum from "./forum/forum.jsx";


import ComingSoon from "./alarm/ComingSoon.jsx";



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
