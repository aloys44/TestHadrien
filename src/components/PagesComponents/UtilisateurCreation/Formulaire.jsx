import React, { Component } from 'react';
import { connect } from "react-redux";
import { AddUser, GetUsers } from "../../../actions/users";
import ImageUploader from "react-images-upload";
import Select from 'react-select'



  const options = [
  { value: "fas fa-user-ninja", label: <i class="fas fa-user-ninja"></i> },
  { value: "fas fa-user-astronaut", label: <i class="fas fa-user-astronaut"></i> },
  { value: "fas fa-user-tie", label: <i class="fas fa-user-tie"></i> },
  { value: "fas fa-user-secret", label: <i class="fas fa-user-secret"></i> },
  { value: "fas fa-snowboarding", label: <i class="fas fa-snowboarding"></i> },
  { value: "fas fa-bed", label: <i class="fas fa-bed"></i> },
  { value: "fas fa-hiking", label: <i class="fas fa-hiking"></i> },
  { value: "fab fa-suse", label: <i class="fab fa-suse"></i> },
  { value: "fas fa-kiwi-bird", label: <i class="fas fa-kiwi-bird"></i> },
  { value: "fas fa-dragon", label: <i class="fas fa-dragon"></i> },
  { value: "fas fa-cat", label: <i class="fas fa-cat"></i> },
  { value: "fas fa-robot", label: <i class="fas fa-robot"></i> },
  { value: "fas fa-running", label: <i class="fas fa-running"></i> },
  { value: "fas fa-meteor", label: <i class="fas fa-meteor"></i> },
  { value: "fab fa-earlybirds", label: <i class="fab fa-earlybirds"></i> },
  { value: "fas fa-frog", label: <i class="fas fa-frog"></i> },
  { value: "fas fa-fish", label: <i class="fas fa-fish"></i> },
  { value: "fas fa-ghost", label: <i class="fas fa-ghost"></i> },
  { value: "fas fa-hippo", label: <i class="fas fa-hippo"></i> },
  { value: "fab fa-jenkins", label: <i class="fab fa-jenkins"></i> },
  { value: "fas fa-snowman", label: <i class="fas fa-snowman"></i> },

];



class Formulaire extends Component { 
constructor(props) {
    super(props);    
  }


    state = {
  selectedOption: null,
}

    add = () => {
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      photo: this.state.selectedOption.value,

    };
    if( this.username.length > 3 && this.firstName.length > 3 && this.lastName.length > 3){
      if(this.email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")  != null){
        if(this.confirmedPassword == this.password ){
          if(this.password.length > 7){
            console.log(user);
          this.props.AddUser(user);
          } else {
              alert("le mot de passe fait moins de 7 lettres"); }
          } else {
              alert("le mot de passe fait moins de 7 lettres ou le mot de passe de confirmation ne correspond pas"); }
        } else {
          alert("l'email ne semble pas valide ...'"); }
      } else {
        alert("le prénom, nom de famille et pseudo doivent comporter plus de 3 caractères");
      } 
  };

    changeUsername = (e) =>{
        if(e.target.value.length < 15 ){
      this.username = e.target.value;
      console.log("pseudo : " + e.target.value);
        } else {
      alert("le pseudo ne doit pas dépasser les 15 lettres !");
    }}
    
  changeFirstName = (e) =>{
        if(e.target.value.length < 10 && e.target.value.match("^[a-zA-Z ]*$") != null){
      this.firstName = e.target.value;
      console.log("prénom : " + e.target.value);
        } else {
      alert("le prénom ne doit pas dépasser les 10 lettres et ne pas avoir de chiffres !");
    }}

  changeLastName = (e) =>{
        if(e.target.value.length < 10 && e.target.value.match("^[a-zA-Z ]*$") != null){
      this.lastName = e.target.value;
      console.log("nom : " + e.target.value);
        } else {
      alert("le nom ne doit pas dépasser les 10 lettres et ne pas avoir de chiffres !");
    }}

  changeEmail = (e) =>{
      if(e.target.value.length < 30 ){
      this.email = e.target.value;
      console.log("email : " + e.target.value);
        } else {
      alert("l'email' ne doit pas dépasser les 30 lettres !");
    }}
  changePassword = (e) =>{
    if(e.target.value.length < 15) {
      this.password = e.target.value;
      console.log("mot de passe : " + e.target.value);
        } else {
      alert("le mot de passe ne doit pas dépasser les 15 lettres et ne pas avoir de chiffres !");
    }}

  changeConfirmedPassword = (e) =>{
    if(e.target.value.length < 15) {
      this.confirmedPassword = e.target.value;
      console.log("mot de passe : " + e.target.value);
        } else {
      alert("le mot de passe ne doit pas dépasser les 15 lettres et ne pas avoir de chiffres !");
    }}

  handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
}

      handleSubmit  = (e) =>{
      console.log(`
        --SUBMITTING--
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Email: ${ this.email}
        Password: ${this.password}
        ConfirmedPassword:  ${this.confirmedPassword}
      `);
  };


  render() {
    console.log(this.props.users);
  const { selectedOption } = this.state;    
  return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création du profil</h1>
            <div className="firstName">
              <label>Prénom</label>
              <input
                type="text"
                placeholder="Prénom"
                name="firstName"
                onChange={this.changeFirstName}
              />
            </div>
            <div className="lastName">
              <label>Nom</label>
              <input
                type="text"
                placeholder="Nom"
                name="lastName"
                onChange={this.changeLastName}
              />
            </div>
            <div className="pseudo">
              <label>Pseudo</label>
              <input
                type="text"
                placeholder="Votre pseudo"
                name="username"
                onChange={this.changeUsername}
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="mail"
                placeholder="Email"
                name="email"
                onChange={this.changeEmail}
              />
            </div>
            <div className="password">
              <label>Mot de passe</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={this.changePassword}
              />
            </div>
            <div className="password">
              <label>Confirmation du mot de passe</label>
              <input
                type="password"
                placeholder="Confirmation du mot de passe"
                name="confirmedPassword"
                onChange={this.changeConfirmedPassword}
              />
              <div className="espace_3">
              <label>Avatar</label>
              <center><h1>
               <Select 
               placeholder="Votre avatar ..."
                onChange={this.handleChange}
                options={options}
                autoFocus={true} />
                </h1></center>
              </div>  
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.add}>Créer votre nouveau profil !</button>
              <small>Vous avez déja un compte?</small>
            </div>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulaire);
