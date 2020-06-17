import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddUser, GetUsers } from "../../actions/users";


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


class Formulaire extends React.Component { 
constructor(props) {
    super(props);    
        
         this.state = {
      firstName: null,
      lastName: null,
      email: null,
      pseudo: null,
      password: null,
      confirmedPassword: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        pseudo: "",
        password: "",
        confirmedPassword: "",
      }
    };
  }

    add = () => {
    const user = {
      id: 3,
      username: this.state.pseudo,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,

    };

    this.props.AddUser(user);
  };

  handleSubmit = e => {
    e.preventDefault();


      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        ConfirmedPassword:  ${this.state.confirmedPassword}
      `);
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let { password, confirmPassword } = this.state;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum de 3 caractères requis !" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum de 3 caractères requis !" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value < 6 ? "minimum de 6 caractères requis !" : "";
        break;
      case "confirmedPassword": 
        formErrors.confirmedPassword = 
          value !== this.state.password ? "Le mot de passe saisi ne correspond pas !" : "OK";
        break;  
      case "pseudo":
        formErrors.pseudo =
          value.length < 3 ? "minimum de 3 caractères requis !" : "";
        break;  
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    console.log(this.props.users);

    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création du profil</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Prénom</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Prénom"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Nom</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Nom"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="pseudo">
              <label htmlFor="pseudo">Pseudo</label>
              <input
                className={formErrors.pseudo.length > 0 ? "error" : null}
                placeholder="Votre pseudo"
                type="pseudo"
                name="pseudo"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.pseudo.length > 0 && (
                <span className="errorMessage">{formErrors.pseudo}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Mot de passe</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Mot de passe"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="confirmedPassword">Confirmation du mot de passe</label>
              <input
                className={formErrors.confirmedPassword.length > 0 ? "error" : null}
                placeholder="Confirmation du mot de passe"
                type="confirmedPassword"
                name="confirmedPassword"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.confirmedPassword.length > 0 && (
                <span className="errorMessage">{formErrors.confirmedPassword}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.add}>Créer votre nouveau profil !</button>
              <small>Vous avez déja un compte?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user)),
    GetUsers: () => dispatch(GetUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulaire);
