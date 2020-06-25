import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class Sortie extends Component {

  render() {
    return (
        
        <div>
            <div class="titreInferieur">
            <h3>Les Sorties</h3>
                <p>Pour participer à la prochaine course et ainsi augmenter votre expérience au sein de votre profil Joggeurs Utiles, il faut vous inscrire en cliquant sur ce bouton.</p>
            </div>
            <center><img src="https://img.icons8.com/bubbles/100/000000/girl-running.png"/></center>
            <div className="espace_2"> 
            <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/Sortie">Participer à la prochaine course</NavLink>
                  </strong>
                </a>
            </center>
            </div> 
        </div>
        
    );
  }
}

export default Sortie;