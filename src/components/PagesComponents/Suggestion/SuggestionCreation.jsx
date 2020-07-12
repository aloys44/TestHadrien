import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddSuggestion, GetSuggestions } from "../../../actions/suggestions";

class SuggestionCreation extends React.Component {
  constructor(props) {
    super(props);


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
  }

  
  changeTitle = (e) => {
    if(e.target.value.length < 25 && e.target.value.match("^[a-zA-Z ]*$") != null){
        this.title = e.target.value;
                console.log("titre : " + e.target.value);
    } else {
      alert("le titre ne doit pas dépasser les 25 lettres et ne pas avoir de chiffres !");
    }
  };
                
  changeDescription = (e) =>{
    if(e.target.value.length < 100 && e.target.value.match("^[a-zA-Z ]*$") != null){
        this.description = e.target.value;
          console.log("description : " + e.target.value);
              } else {
      alert("la description ne doit pas dépasser les 100 lettres et ne pas avoir de chiffres !");
    }

  }


  render() {

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'une Suggestion</h1>
            <div className="details">
              <label htmlFor="title">Titre</label>
              <input
                placeholder="Titre"
                type="title"
                name="title"
                onChange={this.changeTitle}
              />
            </div>
            <div className="details">
              <label htmlFor="description">Description</label>
              <input
                placeholder="Description"
                type="description"
                name="description"
                onChange={this.changeDescription}
              />
            </div>
            <div className="createAccount">
              <button  onClick={this.handleSubmit}>Création d'une nouvelle suggestion</button>
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
