import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddUser, GetUsers } from "../../../actions/users";



class UserUpdate extends React.Component {
 constructor(props) {
            super(props);    
                 
  }
  pseudo = "";
  firstName = "";
  lastName = "";  
  email = "";
  password = "";  
  confirmedPassword = "";


    add = () => {
    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,

     };
     console.log(user);
    this.props.AddUser(user);
  };

  pseudoChange = (e) => {
    this.username = e.target.value;
  }
  firstNameChange = (e) => {
    this.firstName = e.target.value;
  }
  lastNameChange = (e) => {
    this.lastName = e.target.value;
  }
  emailChange = (e) => {
    this.email = e.target.value;
  }
  passwordChange = (e) => {
    this.password = e.target.value;
  }


handleSubmit = e => {
      console.log(`
        --SUBMITTING--
        pseudo: ${this.state.pseudo}
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        email: ${this.state.email}
        password: ${this.state.password}
      `);
  };

 render() {    


     return (
     <div>
      <div className="wrapper-suggestion">
        <div className="form-wrapper">
          <h1>Modification de votre profil</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="details">
              <label htmlFor="username">Votre pseudo</label>
              <input
                placeholder="Pseudo"
                type="text"
                name="username"
                onChange={this.pseudoChange}
              />
            </div>
            <div className="details">
              <label htmlFor="firstName">Votre prénom</label>
              <input
                placeholder="Prénom"
                type="text"
                name="firstName"
                noValidate
                onChange={this.firstNameChange}
              />
            </div>
            <div className="details">
              <label htmlFor="lastName">Votre nom</label>
              <input
                placeholder="Nom"
                type="text"
                name="lastName"
                noValidate
                onChange={this.lastNameChange}
              />
            </div>
               <div className="details">
              <label htmlFor="email">Votre email</label>
              <input
                placeholder="Email"
                type="text"
                name="email"
                noValidate
                onChange={this.emailChange}
              />
            </div>
            <div className="details">
              <label htmlFor="password">Votre mot de passe</label>
              <input
                placeholder="Mot de Passe"
                type="text"
                name="password"
                noValidate
                onChange={this.passwordChange}
              />
            </div>    
              <div className="createAccount">
              <button type="submit" onClick={this.add}>Valider les changements</button>
            </div>
          </form>
        </div>
      </div>
    </div>  
     )
     
     
     } }

const mapStateToProps = (state) => {
  return { users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);


