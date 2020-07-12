import React, { Component } from 'react';
import { Router } from 'react-router'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { connect } from "react-redux";

import { history } from "./store/configureStore";
import './App.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


import { GetUserByAuthToken } from "./actions/users";
import { getCookie } from "./helpers/cookiesManager";



// Containers
const ApplicationLayout = React.lazy(() => import('./layouts/ApplicationLayout'));

// Pages
const PageNotFound = React.lazy(() => import('./PageNotFound'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {
   constructor(props) {
            super(props);    

    const userAuthToken = getCookie("auth_token");
    this.props.GetUserByAuthToken(userAuthToken);
  }

  render() {
    return (
      <ConnectedRouter history={history}>
          <React.Suspense  fallback={loading}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <PageNotFound {...props}/>} />
              <Route path="/" name="Accueil" render={props => <ApplicationLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </ConnectedRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    GetUserByAuthToken: (userAuthToken) => dispatch(GetUserByAuthToken(userAuthToken))
  };
}

export default connect(null, mapDispatchToProps)(App);

