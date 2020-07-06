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


class suggestion extends Component {
   constructor(props) {
            super(props);    
  }

   renderLinkButton = (props) => {
    if (props.userRole > 2 ) {
      return (
        <>
          <a class="button is-primary">
            <strong>
              <NavLink to={props.link}>{props.linkTitle}</NavLink>
            </strong>
          </a>
        </>
      )
    } else {
      return (
         <>
          <a class="button is-danger">
            <strong>
              <NavLink to={props.link}>{props.linkTitle}</NavLink>
            </strong>
          </a>
        </>
      )
    }
  }

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
               <this.renderLinkButton userRole={this.props.user.role} link={"/SuggestionCreation"} linkTitle={"Création d'une suggestion"}/>
            </center>
            </div>
            <center>
               <this.renderLinkButton userRole={this.props.user.role} link={"/SuggestionListe"} linkTitle={"Liste des suggestions"}/>
            </center>    
        </div>
        
    );
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