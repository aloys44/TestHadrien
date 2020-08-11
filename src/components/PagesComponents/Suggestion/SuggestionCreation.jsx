/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import { AddSuggestion } from '../../../actions/suggestions';

class SuggestionCreation extends React.Component {
  handleAdd = () => {
    const suggestion = {
      title: this.title,
      description: this.description,
      authToken: this.props.user?.authToken,
    };

    this.props.AddSuggestion(suggestion);
  };

  changeTitle = (e) => {
    if (e.target.value.length < 25 && e.target.value.match('^[a-zA-Z ]*$') != null) {
      this.title = e.target.value;
    } else {
      alert('le titre ne doit pas dépasser les 25 lettres et ne pas avoir de chiffres !');
    }
  };

  changeDescription = (e) => {
    if (e.target.value.length < 100 && e.target.value.match('^[a-zA-Z ]*$') != null) {
      this.description = e.target.value;
    } else {
      alert(
        'la description ne doit pas dépasser les 100 lettres et ne pas avoir de chiffres !'
      );
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'une Suggestion</h1>
          <div className="details">
            <label htmlFor="title">
              Titre
              <input
                placeholder="Titre"
                type="title"
                name="title"
                onChange={this.changeTitle}
              />
            </label>
          </div>
          <div className="details">
            <label htmlFor="description">
              Description
              <input
                placeholder="Description"
                type="description"
                name="description"
                onChange={this.changeDescription}
              />
            </label>
          </div>
          <div className="createAccount">
            <button type="button" onClick={this.handleAdd}>
              Création d'un nouveau TODO
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
