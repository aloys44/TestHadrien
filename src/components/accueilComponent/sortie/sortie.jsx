import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AddUser } from '../../../actions/users';

class Sortie extends Component {
  render() {
    // Utilisateur non connecté
    if (this.props.user?.username == null || this.props.user?.username === '') {
      return (
        <div>
          <div className="titreInferieur">
            <h3>Les Sorties</h3>
            <p>
              Pour participer à la prochaine course et ainsi augmenter votre expérience au
              sein de votre profil Joggeurs Utiles, il faut vous inscrire en cliquant sur
              ce bouton.
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
        </div>
      );
    }
    // Utilisateur connecté
    return (
      <div>
        <div className="titreInferieur">
          <h3>Les Sorties</h3>
          <p>
            Pour participer à la prochaine course et ainsi augmenter votre expérience au
            sein de votre profil Joggeurs Utiles, il faut vous inscrire en cliquant sur ce
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
            <strong>
              <NavLink to="/SortieOrganisation" className="button is-primary">
                Participer à la prochaine course
              </NavLink>
            </strong>
          </center>
        </div>
        <center>
          <strong>
            <NavLink to="/ListeSortie" className="button is-primary">
              Voir toutes les courses
            </NavLink>
          </strong>
        </center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sortie);
