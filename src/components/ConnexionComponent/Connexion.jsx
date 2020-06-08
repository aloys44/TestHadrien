import React, { Component } from 'react';

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


class Connexion extends Component {
constructor(props) {
    super(props);    
        
         this.state = {
      pseudo: null,
      password: null,
      formErrors: {
        pseudo: "",
        password: "",
      }
    };
  }
handleSubmit = e => {
    e.preventDefault();


    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Pseudo: ${this.state.pseudo}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

   handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {


      case "pseudo":
        formErrors.pseudo =
        value == "" ? "Il faut remplir ce champ !" : "";
        break; 
      case "password":
        formErrors.password =
          value == "" ? "Il faut remplir ce champ !" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };



    render(){
        const { formErrors } = this.state;


    return (
      <div className="wrapper-connexion">
      <div className="form-wrapper">
                <h1>Connexion</h1>
                <form onSubmit={this.handleSubmit} noValidate>
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
            <div className="createAccount">
              <button type="submit">Connexion</button>
              <button type="submit" className="submit-choice"><small>Vous n'avez pas de compte ?</small></button>
            </div>
          </form>
    </div>
    </div>

);
}
}

export default Connexion;