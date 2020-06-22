import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


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

  render() {
    return (
      <HashRouter>
          <React.Suspense  fallback={loading}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <PageNotFound {...props}/>} />
              <Route path="/" name="Accueil" render={props => <ApplicationLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;