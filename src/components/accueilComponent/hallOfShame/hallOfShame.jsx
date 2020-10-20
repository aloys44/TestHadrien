import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HallOfShame extends Component {
  render() {
    return (
      <div>
        <div className="titreInferieur">
          <h3>Les pires trouvailles des Joggeurs Utiles</h3>
          <p>Voici un court extrait des pires objets trouvés durant nos courses...</p>
        </div>
        <center>
          <img
            src="https://img.icons8.com/bubbles/150/000000/day-of-the-dead.png"
            alt="Icone pont"
          />
        </center>
        <div className="espace_2" />
        <center>
          <strong>
            <NavLink to="/HallOfShame" className="button is-primary">
              Pas encore de photos ...
            </NavLink>
          </strong>
        </center>
      </div>
    );
  }
}

export default HallOfShame;
