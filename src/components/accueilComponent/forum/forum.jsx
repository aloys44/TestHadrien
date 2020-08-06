import React, { Component } from "react";
import { connect } from "react-redux";

import { AddUser } from "../../../actions/users";

import {
  NavLink,
} from "react-router-dom";


class Forum extends Component {


  render() {
    // Utilisateur non connecté
        if(this.props.user?.username == "" || this.props.user?.username == null) {
            return (
        <div>
            <div className="titreInferieur">
            <h3>Les Sorties</h3>
                <p>Pour participer au forum, il faut vous connecter d'abord en cliquant sur ce bouton.</p>
            </div>
            <center><img src="https://img.icons8.com/bubbles/100/000000/girl-running.png"/></center>
            <div className="espace_2"> 
            <center>
                <a className="button is-primary">
                  <strong>
                    <h1>Vous n'êtes pas connecté ...</h1>
                  </strong>
                </a>
              </center>
                </div> 
                          <a href="#" title="Haut de page" className="scrollup"><img src="https://img.icons8.com/clouds/100/000000/long-arrow-up.png"/></a>

        </div>   
    );
    } else {
          // Utilisateur connecté
        return (
        <div>
            <div className="titreInferieur">
            <h3>Le Forum</h3>
                <p>Pour participer au forum, c'est ici que ça se passe.</p>
            </div>
            <center><img src="https://img.icons8.com/color/96/000000/coliseum.png"/></center>
            <div className="espace_2"> 
            <center>
                  <strong>
                    <NavLink to="/ThreadList" className="button is-primary">Voir les sujets des différents forum</NavLink>
                  </strong>
                </center>
                </div> 
                          <a href="#" title="Haut de page" className="scrollup"><img src="https://img.icons8.com/clouds/100/000000/long-arrow-up.png"/></a>

        </div>   
    );
    }
  }
}

const mapStateToProps = (state) => {
  console.log("state User :", state)
  return { user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forum);