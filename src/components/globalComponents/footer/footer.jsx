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

    
}
  render() {
    return 
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Site Web</strong> réalisé par<a href="https://jgthms.com">Aloïs Coussout</a>.
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>

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



