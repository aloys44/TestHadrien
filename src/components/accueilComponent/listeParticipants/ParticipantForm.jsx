import React, { Component } from "react";

const textRegex = RegExp(
  /#^[a-z0-9]+$#i/
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

class ParticipantForm extends Component {
constructor(props) {
    super(props);    
        
         this.state = {
      participant: null,
      formErrors: {
        participant: "",
      }
    };
  }


  handleChange = event => {
  this.setState({ nouveauParticipant: event.currentTarget.value });

    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

        switch (name) {
      case "participant":
        if(value.length > 3){
          formErrors.participant =
          value.length < 10 ? "minimum de 10 caractères requis !" : "";
        } else {
          formErrors.participant =
          value.length > 20 ? "maximum de 20 caractères requis !" : "";
        } break;
      default:
        break;
    }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

    
  };


  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauParticipant;
    this.props.onClientAdd({ id, nom });
    this.setState({ nouveauParticipant: "" });

  };

  render() {
        const { formErrors } = this.state;

    return (
      <div>
      <form onSubmit={this.handleSubmit} noValidate>
        <input
          className={formErrors.participant.length > 3 ? "error" : null}
          value={this.state.nouveauParticipant}
          onChangeButton ={this.handleChangeButton}
          name="participant"
          type="text"
          placeholder="Ajouter un participant"
          onChange={this.handleChange}
          noValidate
        />
        {formErrors.participant.length > 0 && (
                <span className="errorMessage">{formErrors.participant}</span>
              )}
        <button disabled={this.props.numberParticipant
         == this.props.numberParticipantsMax ? true : false}
        >Confirmer</button>
      </form>
      </div>
    );
  }
}

export default ParticipantForm;
