/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { UpdateUser } from '../../../actions/users';

const options = [
  { value: 'fas fa-user-ninja', label: <i className="fas fa-user-ninja" /> },
  { value: 'fas fa-user-astronaut', label: <i className="fas fa-user-astronaut" /> },
  { value: 'fas fa-user-tie', label: <i className="fas fa-user-tie" /> },
  { value: 'fas fa-user-secret', label: <i className="fas fa-user-secret" /> },
  { value: 'fas fa-snowboarding', label: <i className="fas fa-snowboarding" /> },
  { value: 'fas fa-bed', label: <i className="fas fa-bed" /> },
  { value: 'fas fa-hiking', label: <i className="fas fa-hiking" /> },
  { value: 'fab fa-suse', label: <i className="fab fa-suse" /> },
  { value: 'fas fa-kiwi-bird', label: <i className="fas fa-kiwi-bird" /> },
  { value: 'fas fa-dragon', label: <i className="fas fa-dragon" /> },
  { value: 'fas fa-cat', label: <i className="fas fa-cat" /> },
  { value: 'fas fa-robot', label: <i className="fas fa-robot" /> },
  { value: 'fas fa-running', label: <i className="fas fa-running" /> },
  { value: 'fas fa-meteor', label: <i className="fas fa-meteor" /> },
  { value: 'fab fa-earlybirds', label: <i className="fab fa-earlybirds" /> },
  { value: 'fas fa-frog', label: <i className="fas fa-frog" /> },
  { value: 'fas fa-fish', label: <i className="fas fa-fish" /> },
  { value: 'fas fa-ghost', label: <i className="fas fa-ghost" /> },
  { value: 'fas fa-hippo', label: <i className="fas fa-hippo" /> },
  { value: 'fab fa-jenkins', label: <i className="fab fa-jenkins" /> },
  { value: 'fas fa-blind', label: <i className="fas fa-blind" /> },
  { value: 'fas fa-cocktail', label: <i className="fas fa-cocktail" /> },
  { value: 'fas fa-crow', label: <i className="fas fa-crow" /> },
  { value: 'fab fa-deskpro', label: <i className="fab fa-deskpro" /> },
  { value: 'fas fa-dog', label: <i className="fas fa-dog" /> },
  { value: 'fas fa-dove', label: <i className="fas fa-dove" /> },
  { value: 'fas fa-fighter-jet', label: <i className="fas fa-fighter-jet" /> },
  { value: 'fas fa-flushed', label: <i className="fas fa-flushed" /> },
  { value: 'fab fa-gitkraken', label: <i className="fab fa-gitkraken" /> },
  { value: 'fab fa-grav', label: <i className="fab fa-grav" /> },
  { value: 'fas fa-guitar', label: <i className="fas fa-guitar" /> },
  { value: 'fas fa-hat-cowboy', label: <i className="fas fa-hat-cowboy" /> },
  {
    value: 'fab fa-phoenix-framework',
    label: <i className="fab fa-phoenix-framework" />,
  },
  { value: 'fab fa-linux', label: <i className="fab fa-linux" /> },
];

class UserUpdate extends React.Component {
  update = () => {
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.props.user.email,
      photo: this.state.selectedOption.value,
    };
    if (
      this.username.length > 3 &&
      this.firstName.length > 3 &&
      this.lastName.length > 3
    ) {
      if (this.confirmedPassword === this.password) {
        if (this.password.length > 3) {
          this.props.UpdateUser(user);
        } else {
          alert('le mot de passe fait moins de 3 lettres');
        }
      } else {
        alert(
          'le mot de passe fait moins de 7 lettres ou le mot de passe de confirmation ne correspond pas'
        );
      }
    } else {
      alert('le prénom, nom de famille et pseudo doivent comporter plus de 3 caractères');
    }
  };

  changeUsername = (e) => {
    if (e.target.value.length < 15) {
      this.username = e.target.value;
    } else {
      alert('le pseudo ne doit pas dépasser les 15 lettres !');
    }
  };

  changeFirstName = (e) => {
    if (e.target.value.length < 10 && e.target.value.match('^[a-zA-Z ]*$') != null) {
      this.firstName = e.target.value;
    } else {
      alert(
        'le prénom ne doit pas dépasser les 10 lettres et ne pas avoir de chiffres !'
      );
    }
  };

  changeLastName = (e) => {
    if (e.target.value.length < 10 && e.target.value.match('^[a-zA-Z ]*$') != null) {
      this.lastName = e.target.value;
    } else {
      alert('le nom ne doit pas dépasser les 10 lettres et ne pas avoir de chiffres !');
    }
  };

  changePassword = (e) => {
    if (e.target.value.length < 15) {
      this.password = e.target.value;
    } else {
      alert(
        'le mot de passe ne doit pas dépasser les 15 lettres et ne pas avoir de chiffres !'
      );
    }
  };

  changeConfirmedPassword = (e) => {
    if (e.target.value.length < 15) {
      this.confirmedPassword = e.target.value;
    } else {
      alert(
        'le mot de passe ne doit pas dépasser les 15 lettres et ne pas avoir de chiffres !'
      );
    }
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  handleSubmit = () => {};

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Modification du profil</h1>
          <div className="firstName">
            <label htmlFor="firstName">
              Prénom
              <input
                name="firstName"
                id="firstName"
                type="text"
                placeholder={
                  this.props.user?.firstName === null || this.props.user?.username === ''
                    ? 'Prénom'
                    : this.props.user?.username
                }
                onChange={this.changeFirstName}
              />
            </label>
          </div>
          <div className="lastName">
            <label htmlFor="lastName">
              Nom
              <input
                name="lastName"
                id="lastName"
                type="text"
                placeholder={
                  this.props.user?.lastName === null || this.props.user?.lastName === ''
                    ? 'Nom'
                    : this.props.user?.lastName
                }
                onChange={this.changeLastName}
              />
            </label>
          </div>
          <div className="pseudo">
            <label htmlFor="username">
              Pseudo
              <input
                name="username"
                id="username"
                type="text"
                placeholder={
                  this.props.user?.username == null || this.props.user?.username === ''
                    ? 'Pseudo'
                    : this.props.user?.username
                }
                onChange={this.changeUsername}
              />
            </label>
          </div>
          <div className="password">
            <label htmlFor="password">
              Mot de passe
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Votre nouveau mot de passe"
                onChange={this.changePassword}
              />
            </label>
          </div>
          <div className="password">
            <label htmlFor="confirmedPassword">
              Confirmation du mot de passe
              <input
                name="confirmedPassword"
                id="confirmedPassword"
                type="password"
                placeholder="Confirmation du mot de passe"
                onChange={this.changeConfirmedPassword}
              />
            </label>
            <div className="espace_3">
              <span>
                Avatar
                <center>
                  <h1>
                    <Select
                      placeholder="Votre avatar ..."
                      onChange={this.handleChange}
                      options={options}
                      autoFocus
                    />
                  </h1>
                </center>
              </span>
            </div>
          </div>
          <div className="createAccount">
            <button type="submit" onClick={this.update}>
              Modifier votre profil !
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user, users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    UpdateUser: (user) => dispatch(UpdateUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);
