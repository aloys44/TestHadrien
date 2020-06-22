import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddSuggestion, GetSuggestions } from "../../../actions/suggestions";


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


class SuggestionCreation extends React.Component {  
    constructor(props) {
            super(props);    
                 
         this.state = {
      formErrors: {
        title: "",
        description: "",
      }
    };
  }

    add = e => {
    const suggestion = {
      id: 4,
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
     };
    this.props.AddSuggestion(suggestion);
  };

handleSubmit = e => {

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Title: ${this.state.title}
        Description: ${this.state.description}
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
      case "title":
        formErrors.title =
          value.length < 5 ? "minimum de 5 caractères requis !" : "";
        break;
      case "description":
        if(value.length < 3){
          formErrors.description =
          value.length < 10 ? "minimum de 10 caractères requis !" : "";
        } else {
          formErrors.description =
          value.length > 50 ? "maximum de 500 caractères requis !" : "";
        }
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

 render() {    
       const { formErrors } = this.state;


     return (
     <div>
      <div className="wrapper-suggestion">
        <div className="form-wrapper">
          <h1>Création d'une suggestion</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="title">
              <label htmlFor="title">Titre</label>
              <input
                className={formErrors.title.length > 3 ? "error" : null}
                placeholder="Titre"
                type="text"
                name="title"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.title.length > 0 && (
                <span className="errorMessage">{formErrors.title}</span>
              )}
            </div>
            <div className="description">
              <label htmlFor="description">Description</label>
              <textarea
                className={formErrors.description.length > 0 ? "error" : null}
                placeholder="Description"
                rows="10"
                type="text"
                name="description"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.description.length > 0 && (
                <span className="errorMessage">{formErrors.description}</span>
              )}
              <div className="createAccount">
              <button type="submit" onClick={this.add}>Valider la suggestion</button>
            </div>
            </div>  
          </form>
        </div>
      </div>
    </div>  
     )
     
     
     } }

const mapStateToProps = (state) => {
  return { suggestions: state.suggestions };
};

function mapDispatchToProps(dispatch) {
  return {
    AddSuggestion: (suggestion) => dispatch(AddSuggestion(suggestion)),
    GetSuggestions: () => dispatch(GetSuggestions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionCreation);
