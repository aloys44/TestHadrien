import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetSuggestions } from '../../../actions/suggestions';
import { AddUser } from '../../../actions/users';

class suggestion extends Component {
  constructor(props) {
    super(props);

    this.props.GetSuggestions();
  }

  render() {
    if (this.props.user?.username == null || this.props.user?.username === '') {
      return (
        <div>
          <div className="titreInferieur">
            <h3>Les suggestions</h3>
            <p>
              Si vous voulez faire une suggestion à propos de la prochaine course ou de
              l'activité de l'association vous pouvez la faire par ce bouton. un système
              de Like fera remonter les 3 suggestions préférées au sein de la page
              d'accueil.
            </p>
          </div>
          <center>
            <img
              src="https://img.icons8.com/officel/80/000000/25-de-abril-bridge.png"
              alt="Icone pont"
            />
          </center>
          <div className="espace_2" />
          <center>
            <div className="button is-primary">
              <strong>
                <h1>Vous n'êtes pas connecté ...</h1>
              </strong>
            </div>
          </center>
        </div>
      );
    }
    return (
      <div>
        <div className="titreInferieur">
          <h3>Les suggestions</h3>
          <p>
            Si vous voulez faire une suggestion à propos de la prochaine course ou de
            l'activité de l'association vous pouvez la faire par ce bouton. un système de
            Like fera remonter les 3 suggestions préférées au sein de la page d'accueil.
          </p>
        </div>
        <center>
          <img
            src="https://img.icons8.com/officel/80/000000/25-de-abril-bridge.png"
            alt="Icone pont"
          />
        </center>
        <div className="espace_2">
          <center>
            <strong>
              <NavLink to="/SuggestionCreation" className="button is-primary">
                Création d'une Suggestion
              </NavLink>
            </strong>
          </center>
        </div>
        <center>
          <strong>
            <NavLink to="/SuggestionListe" className="button is-primary">
              Liste des Suggestions
            </NavLink>
          </strong>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user, suggestions: state.suggestions };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user)),
    GetSuggestions: () => dispatch(GetSuggestions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(suggestion);
