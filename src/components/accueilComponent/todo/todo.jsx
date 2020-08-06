import React, { Component } from "react";
import { connect } from "react-redux";

import { AddUser } from "../../../actions/users";

import {
  NavLink,
} from "react-router-dom";


class suggestion extends Component {

  render() {
        if(this.props.user?.username == "" || this.props.user?.username == null) {
            return (
        
        <div>
            <div className="titreInferieur">
            <h3>Les Todo</h3>
                <p>Si vous voulez faire une suggestion à propos du site web c'est ici que ça se passe ! 
                A savoir que les différentes améliorations prévues pour le site sont déja répertoriées par catégorie,
                vous pouvez en prendre connaissance au sein de la liste des TODO.</p>
            </div>
            <center><img src="https://img.icons8.com/flat_round/100/000000/tower-crane.png"/></center>
            <div className="espace_2"> 
            <center>
                <a className="button is-primary">
                    <strong>
                       <h1>Vous n'êtes pas connecté ...</h1>
                    </strong>
                </a>
            </center>
            </div>  
        </div>
        
    );
        } else {
    return (

        <div>
            <div className="titreInferieur">
            <h3>Les Todo</h3>
                <p>Si vous voulez faire une suggestion à propos du site web c'est ici que ça se passe ! 
                A savoir que les différentes améliorations prévues pour le site sont déja répertoriées par catégorie,
                vous pouvez en prendre connaissance au sein de la liste des TODO.</p>
            </div>
            <center><img src="https://img.icons8.com/flat_round/100/000000/tower-crane.png"/></center>
            <div className="espace_2"> 
            <center>
                  <strong>
                    <NavLink to="/TodoCreation" className="button is-primary">Création d'une Todo</NavLink>
                  </strong>
            </center>
            </div>
            <center>
                  <strong>
                    <NavLink to="/TodoListComponent" className="button is-primary">Liste des Todo</NavLink>
                  </strong>
            </center>    
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

export default connect(mapStateToProps, mapDispatchToProps)(suggestion);