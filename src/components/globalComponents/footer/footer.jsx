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

class Footer extends Component {
   constructor(props) {
            super(props);    
  }

    

  render() {
    return (
    <footer className="footer">
  <div className="content has-text-centered">

          <p><strong>Site Web</strong> réalisé par <a href="https://jgthms.com">Aloïs Coussout</a>.    </p>
      <p>Pour accéder à la page facebook des <a href="https://www.facebook.com/Les-Joggeurs-Utiles-Saint-Nazaire-541821872966758/">Joggeurs Utiles</a></p>
      <p>A bientôt pour de nouvelles aventures avec les Joggeurs Utiles !</p>
      <img src="https://img.icons8.com/bubbles/100/000000/homer-simpson.png"/>
  </div>
</footer>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer);



