import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddSuggestion, GetSuggestions } from "../../../actions/suggestions";

class SuggestionCreation extends React.Component {
  constructor(props) {
    super(props);
  }


  changeTitle = (e) => {
    if(e.target.value.length < 10 && e.target.value.match("^[a-zA-Z ]*$") != null){
        this.title = e.target.value;
                console.log("titre : " + e.target.value);
    } else {
      alert("le titre ne doit pas dépasser les 10 lettres et ne pas avoir de chiffres !");
    }
  };
                
  changeDescription = (e) =>{
    if(e.target.value.length < 10 && e.target.value.match("^[a-zA-Z ]*$") != null){
        this.description = e.target.value;
          console.log("description : " + e.target.value);
              } else {
      alert("la description ne doit pas dépasser les 10 lettres et ne pas avoir de chiffres !");
    }

  }
     
  

  handleSubmit = () => {

      
    const suggestion = {
      title: this.title,
      description: this.description,
      auth_token: this.props.user?.auth_token,
    };

    console.log(this.title.length);
    console.log("suggestion : ", suggestion);
    this.props.AddSuggestion(suggestion);
  };

  render() {
    return (
      <div className="wrapper-suggestion">
        <div className="form-wrapper">
          <h1>Création d'une suggestion</h1>
            <div className="details">
              <label>Titre</label>
              <input
                placeholder="Titre"
                type="text"
                name="title"
                minlength="10"
                maxlength="100"
                onChange={this.changeTitle}
              />
            </div>
            <div className="details">
              <label>Description</label>
              <input
                placeholder="Description"
                type="text"
                name="description"
                minlength="10"
                maxlength="100"
                onChange={this.changeDescription}
              />
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.handleSubmit}>
                Création d'une nouvelle suggestion
              </button>
            </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { suggestions: state.suggestions, user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddSuggestion: (suggestion) => dispatch(AddSuggestion(suggestion)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionCreation);
