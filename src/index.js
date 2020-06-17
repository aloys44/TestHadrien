import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

import "./index.css";

import App from "./App";
import PageNotFound from "./PageNotFound";

import Header from "./components/AccueilComponent/header/header.jsx";
import Intro from "./components/AccueilComponent/intro/intro.jsx";
import WhoAreWe from "./components/AccueilComponent/who-are-we/who-are-we.jsx";
import Carrousel from "./components/AccueilComponent/carrousel/carrousel.jsx";
import Description from "./components/AccueilComponent/description/description.jsx";
import Suggestion from "./components/AccueilComponent/suggestion/suggestion.jsx";
import Participant from "./components/AccueilComponent/listeParticipants/indexParticipant.jsx";
import OrganisationCourse from "./components/ParticipantComponent/OrganisationCourse.jsx";
import SortieCreation from "./components/SortieComponent/SortieCreation.jsx";

import ComingSoon from "./components/AccueilComponent/alarm/ComingSoon.jsx";
import SuggestionCreation from "./components/SuggestionCreationComponent/SuggestionCreation.jsx";
import Formulaire from "./components/UtilisateurCreationComponent/Formulaire.jsx";
import Connexion from "./components/ConnexionComponent/Connexion.jsx";
import TodoListComponent from "./components/TodoListComponent/TodoListComponent.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Connexion" component={Connexion} />
      <Route path="/Formulaire" component={Formulaire} />
      <Route path="/SuggestionCreation" component={SuggestionCreation} />
      <Route path="/Sortie" component={SortieCreation} />
      <Route path="/ListeChoseAFaire" component={TodoListComponent} />
      <Route path="/Participant" component={Participant} />
      <Route path="/ParticipantTest" component={OrganisationCourse} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
