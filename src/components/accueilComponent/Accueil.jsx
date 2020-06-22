import React, { Component } from "react";

import Intro from "./intro/intro.jsx";
import WhoAreWe from "./who-are-we/who-are-we.jsx";
import Carrousel from "./carrousel/carrousel.jsx";
import Description from "./description/description.jsx";
import Suggestion from "./suggestion/suggestion.jsx";

import ComingSoon from "./alarm/ComingSoon.jsx";

import SortieCreation from "../SortieComponent/SortieCreation.jsx";

import SuggestionCreation from "../PagesComponents/Suggestion/SuggestionCreation.jsx";
import SuggestionSorted from '../SuggestionCreationComponent/SuggestionsSortByLike.jsx';

import UserUpdate from '../PagesComponents/UtilisateurCreation/UserUpdate.jsx';
import TodoListComponent from '../PagesComponents/TodoList/TodoListComponent';

import Formulaire from '../PagesComponents/UtilisateurCreation/Formulaire';
import SuggestionList from '../PagesComponents/Suggestion/SuggestionList';
import ListUser from '../PagesComponents/UtilisateurCreation/ListUser';

import OrganisationCourse from "../ParticipantComponent/OrganisationCourse.jsx";



class Accueil extends Component {
  render() {
    return (
      <>
        <Intro />
        <WhoAreWe />
        <Carrousel />
        <Description />
        <Suggestion />
        <ComingSoon />

        <></>
      </>
    );
  }
}

export default Accueil;
