import React, { Component } from "react";

import Construction from "./construction/construction.jsx";
import Intro from "./intro/intro.jsx";
import WhoAreWe from "./who-are-we/who-are-we.jsx";
import Carrousel from "./carrousel/carrousel.jsx";
import Description from "./description/description.jsx";
import Explication from "./explication/explication.jsx";
import Suggestion from "./suggestion/suggestion.jsx";
import Todo from "./todo/todo.jsx";
import Sortie from "./sortie/sortie.jsx";



import ComingSoon from "./alarm/ComingSoon.jsx";





import OrganisationCourse from "../ParticipantComponent/OrganisationCourse.jsx";



class Accueil extends Component {
  render() {
    return (
      <>
        <Construction />
        <Intro />
        <WhoAreWe />
        <Carrousel />
        <Description />
        <ComingSoon />
        <Explication />
        <Sortie />
        <Suggestion />
        <Todo />

        <></>
      </>
    );
  }
}

export default Accueil;
