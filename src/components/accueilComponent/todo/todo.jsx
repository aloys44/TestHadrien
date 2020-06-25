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
            <h3>Les Todo</h3>
                <p>Si vous voulez faire une suggestion à propos du site web c'est ici que ça se passe ! 
                A savoir que les différentes améliorations prévues pour le site sont déja répertoriées par catégorie,
                vous pouvez en prendre connaissance au sein de la liste des TODO.</p>
            </div>
            <center><img src="https://img.icons8.com/flat_round/100/000000/tower-crane.png"/></center>
            <div className="espace_2"> 
            <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/TodoCreation">Création d'une Todo</NavLink>
                  </strong>
                </a>
            </center>
            </div>
            <center>
                <a class="button is-primary">
                  <strong>
                    <NavLink to="/TodoListComponent">Liste des Todo</NavLink>
                  </strong>
                </a>
            </center>    
             	
<a href="#" title="Haut de page" class="scrollup"><i class="fa fa-arrow-up"></i></a>
        </div>
        
    );
  }
}

export default suggestion;