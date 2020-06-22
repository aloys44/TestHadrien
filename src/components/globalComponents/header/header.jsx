import React, { Component } from "react";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="/TempLogo.png" width="112" height="28" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <NavLink to="/ParticipantTest">Prochaine Course</NavLink>
            </div>
            <div class="navbar-item">
              <NavLink to="/ListeChoseAFaire">Liste des choses à Faire</NavLink>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Votre profil</a>
              <div class="navbar-dropdown">
                <a class="navbar-item"><NavLink to="/SuggestionCreation" >Voir Votre profil</NavLink></a>
                <a class="navbar-item"><NavLink to="/UserUpdate" >Modification du profil</NavLink></a>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Suggestion</a>
              <div class="navbar-dropdown">
                <a class="navbar-item"><NavLink to="/SuggestionCreation" >Création d'une suggestion</NavLink></a>
                <a class="navbar-item"><NavLink to="/SuggestionListe" >Liste des suggestions</NavLink></a>
              </div>
            </div>

          <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Admin</a>
              <div class="navbar-dropdown">
                <a class="navbar-item"><NavLink to="/ListeUtilisateur" >Liste des Utilisateurs</NavLink></a>
                <a class="navbar-item"><NavLink to="/Sortie" >Création d'une course</NavLink></a>
              </div>
            </div>
          </div>


          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <div class="button is-primary">
                <strong>
                  <NavLink to="/Formulaire">Inscription</NavLink>
                </strong>
                </div>
                <a class="button is-light">
                  <strong>
                    <NavLink to="/Connexion">Connection</NavLink>
                  </strong>
                </a>
              </div>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
