import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddUser } from '../../../actions/users';

class Forum extends Component {
  render() {
    // Utilisateur non connecté
    if (this.props.user?.username === '' || this.props.user?.username === null) {
      return (
        <div>
          <div className="titreInferieur">
            <h3>Les Sorties</h3>
            <p>
              Pour participer au forum, il faut vous connecter d'abord en cliquant sur ce
              bouton.
            </p>
          </div>
          <center>
            <img
              src="https://img.icons8.com/bubbles/100/000000/girl-running.png"
              alt="Icone d'une femme qui court"
            />
          </center>
          <div className="espace_2">
            <center>
              <div className="button is-primary">
                <strong>
                  <h1>Vous n'êtes pas connecté ...</h1>
                </strong>
              </div>
            </center>
          </div>
          <button type="button" title="Haut de page" className="scrollup">
            <img
              src="https://img.icons8.com/clouds/100/000000/long-arrow-up.png"
              alt="Icone d'une fleche vers le haut dans les nuages"
            />
          </button>
        </div>
      );
    }
    // Utilisateur connecté
    return (
      <div>
        <div className="titreInferieur">
          <h3>Le Forum</h3>
          <p>Pour participer au forum, c'est ici que ça se passe.</p>
        </div>
        <center>
          <img
            src="https://img.icons8.com/color/96/000000/coliseum.png"
            alt="Icone du colisé"
          />
        </center>
        <div className="espace_2">
          <center>
            <strong>
              <NavLink to="/ThreadList" className="button is-primary">
                Voir les sujets des différents forum
              </NavLink>
            </strong>
          </center>
        </div>
        <button type="button" title="Haut de page" className="scrollup">
          <img
            src="https://img.icons8.com/clouds/100/000000/long-arrow-up.png"
            alt="Icone d'une fleche vers le haut dans les nuages"
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
