import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { GetNotSeenListEvenement } from '../../../actions/evenements';
import { AddUser } from '../../../actions/users';

class Header extends Component {
  render() {
    // Utilisateur non connecté
    if (this.props.user?.username === '' || this.props.user?.username == null) {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/Accueil" componentclass={Link}>
              <img src="/imageLogo4.png" width="80" height="28" alt="Logo" />
            </NavLink>

            <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-item">
                {this.props.user?.username == null || this.props.user?.username === ''
                  ? 'Connectez-vous pour pouvoir pleinement profiter de ce site !'
                  : `Bonjour ${this.props.user.username} !`}
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <div className="button is-primary">
                    <strong>
                      <NavLink to="/Formulaire" id="RouterNavLink" className="nav-link">
                        Inscription
                      </NavLink>
                    </strong>
                  </div>
                  <div className="button is-primary">
                    <strong>
                      <NavLink to="/Connexion" id="RouterNavLink" className="nav-link">
                        Connection
                      </NavLink>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
    // l'utilisateur est connecté mais non admin

    if (this.props.user?.roles === 0) {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink to="/Accueil" componentclass={Link}>
              <img src="/imageLogo4.png" width="80" height="28" alt="Logo" />
            </NavLink>
            <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-start">
                <div className="navbar-item">
                  <NavLink to="/SortieOrganisation">Prochaine Course</NavLink>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Votre profil</div>
                <div className="navbar-dropdown">
                  <NavLink to="/ProfilUser" className="navbar-item">
                    Voir Votre profil
                  </NavLink>
                  <NavLink to="/UserUpdate" className="navbar-item">
                    Modification du profil
                  </NavLink>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Suggestion</div>
                <div className="navbar-dropdown">
                  <NavLink to="/SuggestionCreation" className="navbar-item">
                    Création d'une suggestion
                  </NavLink>
                  <NavLink to="/SuggestionListe" className="navbar-item">
                    Liste des suggestions
                  </NavLink>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  Choses Restantes à faire sur ce site ...
                </div>
                <div className="navbar-dropdown">
                  <NavLink to="/TodoCreation" className="navbar-item">
                    Création todo
                  </NavLink>
                  <NavLink to="/TodoListComponent" className="navbar-item">
                    Liste des Choses à faire
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="navbar-item">
              {this.props.evenements == null || this.props.evenements === '' ? (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/new-letter.png"
                  alt="Icone nouveau message"
                />
              ) : (
                <NavLink to="/NextEvenement">
                  <img
                    src="https://img.icons8.com/fluent/96/000000/secured-letter.png"
                    alt="Icone nouveau message"
                  />
                </NavLink>
              )}
            </div>
            <div className="navbar-item">
              {this.props.user?.username == null || this.props.user?.username === ''
                ? "Vous n'êtes pas encore connecté !"
                : `Bonjour ${this.props.user.username} !`}
            </div>
            <div className="navbar-item">
              {this.props.user?.roles == null ? (
                "Vous n'avez pas défini d'avatar !"
              ) : (
                <i className={`${this.props.user.photo} photo`} />
              )}
            </div>
          </div>
        </nav>
      );
    }
    // L'utilisateur est l'admin
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/Accueil" componentclass={Link}>
            <img src="/imageLogo4.png" width="80" height="28" alt="Logo" />
          </NavLink>
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <NavLink to="/SortieOrganisation">Prochaine Course</NavLink>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Votre profil</div>
              <div className="navbar-dropdown">
                <NavLink to="/ProfilUser" className="navbar-item">
                  Voir Votre profil
                </NavLink>
                <NavLink to="/UserUpdate" className="navbar-item">
                  Modification du profil
                </NavLink>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Suggestion</div>
              <div className="navbar-dropdown">
                <NavLink to="/SuggestionCreation" className="navbar-item">
                  Création d'une suggestion
                </NavLink>
                <NavLink to="/SuggestionListe" className="navbar-item">
                  Liste des suggestions
                </NavLink>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Choses Restantes à faire sur ce site ...</div>
              <div className="navbar-dropdown">
                <NavLink to="/TodoCreation" className="navbar-item">
                  Création todo
                </NavLink>
                <NavLink to="/TodoListComponent" className="navbar-item">
                  Liste des Choses à faire
                </NavLink>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Admin</div>
              <div className="navbar-dropdown">
                <NavLink
                  to="/ListeUtilisateur"
                  className="navbar-item"
                  onClick={this.handleRole}
                >
                  Liste des Utilisateurs
                </NavLink>
                <NavLink to="/Sortie" className="navbar-item" onClick={this.handleClick}>
                  Création d'une course
                </NavLink>
                <NavLink
                  to="/EvenementCreation"
                  className="navbar-item"
                  onClick={this.handleClick}
                >
                  Création d'un évènement
                </NavLink>
                <NavLink
                  to="/EvenementList"
                  className="navbar-item"
                  onClick={this.handleClick}
                >
                  Liste des évènements
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            {this.props.evenements == null || this.props.evenements === '' ? (
              <img
                src="https://img.icons8.com/material-rounded/24/000000/new-letter.png"
                alt="Icone nouveau message"
              />
            ) : (
              <NavLink to="/NextEvenement">
                <img
                  src="https://img.icons8.com/fluent/96/000000/secured-letter.png"
                  alt="Icone nouveau message"
                />
              </NavLink>
            )}
          </div>
          <div className="navbar-item">
            {this.props.user?.username == null || this.props.user?.username === ''
              ? "Vous n'êtes pas encore connecté !"
              : `Bonjour ${this.props.user.username} !`}
          </div>
          <div className="navbar-item">
            {this.props.user?.photo == null ? (
              "Vous n'avez pas défini d'avatar !"
            ) : (
              <i className={`${this.props.user.photo} photo`} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { evenements: state.evenements, user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user)),
    GetNotSeenListEvenement: (authToken) => dispatch(GetNotSeenListEvenement(authToken)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
