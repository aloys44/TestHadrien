import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddUser, ConnectUser } from "../../../actions/users";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class Header extends Component {
   constructor(props) {
            super(props);    
  }

  render() {
        // Utilisateur non connecté
        if(this.props.user?.username == "" || this.props.user?.username == null) {
        return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <NavLink  to="/Accueil">
          <a className="navbar-item" href="/Accueil">
            <img src="/TempLogo.png" width="112" height="28" />
          </a>
        </NavLink>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <NavLink  to="/SortieOrganisation">Prochaine Course</NavLink>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
          
           <a className="navbar-item">{this.props.user?.username == null || this.props.user?.username == "" ? "Vous n'êtes pas encore connecté !" : "Bonjour " + this.props.user.username + " !"}</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-primary">
                <strong>
                  <NavLink to="/Formulaire" className="nav-link">Inscription</NavLink>
                </strong>
                </div>
                <div className="button is-primary">
                  <strong>
                    <NavLink to="/Connexion" className="nav-link">Connection</NavLink>
                  </strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
        );
    }
    // l'utilisateur est connecté mais non admin
     else {
      if(this.props.user?.roles == 0) {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="/TempLogo.png" width="112" height="28" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">



            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Votre profil</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/ProfilUser">Voir Votre profil</NavLink></a>
                <a className="navbar-item"><NavLink to="/UserUpdate">Modification du profil</NavLink></a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Suggestion</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/SuggestionCreation" >Création d'une suggestion</NavLink></a>
                <a className="navbar-item"><NavLink to="/SuggestionListe" >Liste des suggestions</NavLink></a>
              </div>
            </div>

          <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Choses Restantes à faire sur ce site ...</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/TodoCreation" >Création todo</NavLink></a>
                <a className="navbar-item"><NavLink to="/TodoListComponent" >Liste des Choses à faire</NavLink></a>
              </div>
            </div>
          </div>          
           <a className="navbar-item">{this.props.user?.username == null || this.props.user?.username == "" ? "Vous n'êtes pas encore connecté !" : "Bonjour " + this.props.user.username + " !"}</a>
           <a className="navbar-item">{this.props.user?.roles == null ? "Vous n'avez pas défini d'avatar !" :  <i class={this.props.user.photo + " photo"}></i>}</a>
        </div>
      </nav>
    );
    } else {
      // L'utilisateur est l'admin
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src="/TempLogo.png" width="112" height="28" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <NavLink to="/SortieOrganisation">Prochaine Course</NavLink>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Votre profil</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/ProfilUser"  >Voir Votre profil</NavLink></a>
                <a className="navbar-item"><NavLink to="/UserUpdate"  onClick={this.handleClick}>Modification du profil</NavLink></a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Suggestion</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/SuggestionCreation" >Création d'une suggestion</NavLink></a>
                <a className="navbar-item"><NavLink to="/SuggestionListe" >Liste des suggestions</NavLink></a>
              </div>
            </div>

          <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Choses Restantes à faire sur ce site ...</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/TodoCreation" >Création todo</NavLink></a>
                <a className="navbar-item"><NavLink to="/TodoListComponent" >Liste des Choses à faire</NavLink></a>
              </div>
            </div>


          <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Admin</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"><NavLink to="/ListeUtilisateur"  onClick={this.handleRole}>Liste des Utilisateurs</NavLink></a>
                <a className="navbar-item"><NavLink to="/Sortie"  onClick={this.handleClick} >Création d'une course</NavLink></a>
              </div>
            </div>
          </div>          
           <a className="navbar-item">{this.props.user?.username == null || this.props.user?.username == "" ? "Vous n'êtes pas encore connecté !" : "Bonjour " + this.props.user.username + " !"}</a>
           <a className="navbar-item">{this.props.user?.photo == null ? "Vous n'avez pas défini d'avatar !" :  <i class={this.props.user.photo + " photo"}></i>}</a>
        </div>
      </nav>
    );
    }
  }
}}

const mapStateToProps = (state) => {
  console.log("state User :", state)
  return { user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

