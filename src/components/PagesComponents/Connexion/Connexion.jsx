import React, { Component } from "react";
import { ConnectUser } from "../../../actions/users";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';


class Connexion extends Component {
  constructor(props) {
    super(props);

  }

        state = { redirection: false }


  username = "";
  password = "";
     
  connect = (e) => {
    const connexion = {
      username: this.username,
      password: this.password,
    };
    this.props.ConnectUser(connexion);
             axios.post("/Accueil")
      .then(() => this.setState({ redirection: true }));

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
            <label htmlFor="pseudo">Pseudo</label>
            <input
              placeholder="Votre pseudo"
              type="pseudo"
              name="pseudo"
              onChange={this.pseudoChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Mot de passe</label>
            <input
              placeholder="Mot de passe"
              type="password"
              name="password"
              onChange={this.passwordChange}
            />
          </div>
          <div className="createAccount">
            <button onClick={this.connect}>Connexion</button>
            <button className="submit-choice">
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
