import React, { Component } from 'react';
import Connexion from "./Connexion.jsx";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Header extends Component {



  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
            <img src="/TempLogo.png" width="112" height="28"/>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item">
                Home
            </a>

            <a class="navbar-item">
                Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link">
                More
                </a>
                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                    Report an issue
                </a>
                
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
              <Router>
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Inscription</strong>
                </a>
                <a class="button is-light">
                    <strong><Link path="/Connection" >Connection</Link></strong>
                </a>
                </div>
                      <Switch>
                        <Route path="/Connection" component={Connexion} />
                    </Switch>
              </Router>      
            </div>
            </div>
        </div>
        </nav>
    );
  }
}

export default Header;