import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectUser } from '../../../actions/users';

class Connexion extends Component {
  username = '';

  password = '';

  connect = () => {
    const connexion = {
      username: this.username,
      password: this.password,
    };
    this.props.ConnectUser(connexion);
  };

  pseudoChange = (e) => {
    this.username = e.target.value;
  };

  passwordChange = (e) => {
    this.password = e.target.value;
  };

  render() {
    return (
      <div className="wrapper-connexion">
        <div className="form-wrapper">
          <h1>Connexion</h1>

          <div className="pseudo">
            <label htmlFor="pseudo">
              Pseudo
              <input
                placeholder="Votre pseudo"
                type="pseudo"
                name="pseudo"
                onChange={this.pseudoChange}
              />
            </label>
          </div>
          <div className="password">
            <label htmlFor="password">
              Mot de passe
              <input
                placeholder="Mot de passe"
                type="password"
                name="password"
                onChange={this.passwordChange}
              />
            </label>
          </div>
          <div className="createAccount">
            <button type="button" onClick={this.connect}>
              Connexion
            </button>
            <button type="button" className="submit-choice">
              <small>Vous n'avez pas de compte ?</small>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { connexion: state.connexion };
};

function mapDispatchToProps(dispatch) {
  return {
    ConnectUser: (connexion) => dispatch(ConnectUser(connexion)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
