import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class suggestion extends Component {

  render() {
    return (
        
        <div>
            <div class="titreInferieur">
            <h3>Les suggestions</h3>
                <p>Si vous voulez faire une suggestion à propos de la prochaine course ou de l'activité de l'association vous pouvez la faire par ce bouton.
                un système de Like fera remonter les 3 suggestions préférées au sein de la page d'accueil.</p>
            </div>
            <center><img src="https://img.icons8.com/officel/80/000000/25-de-abril-bridge.png"/></center>
            <div className="espace_2"> 
            <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/SuggestionCreation">Création d'une suggestion</NavLink>
                  </strong>
                </a>
            </center>
            </div>
            <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/SuggestionListe">Liste des suggestions</NavLink>
                  </strong>
                </a>
            </center>    
        </div>
        
    );
  }
}

export default suggestion;