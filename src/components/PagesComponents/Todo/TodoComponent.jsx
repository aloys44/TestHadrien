import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddTodo } from "../../../actions/todos";


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


class TodoComponent extends React.Component { 
constructor(props) {
    super(props);    
        

      }

    title = "";
    description = "";  
    category = "";
    date_creation = "";  
    anticipatedEnd_realisation = "";


    add = () => {
    const todo = {
      title: this.title,
      description: this.description,
      category: this.category,

    };

    this.props.AddTodo(todo);
  };

  titleChange = (e) => {
    this.title = e.target.value;
  }
  descriptionChange = (e) => {
    this.description = e.target.value;
  }
  categoryChange = (e) => {
    this.category = e.target.value;
  }

  render() {

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'un Objet Todo</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="details">
              <label htmlFor="title">Titre</label>
              <input
                placeholder="Titre"
                type="text"
                name="title"
                onChange={this.titleChange}
              />
            </div>
            <div className="details">
              <label htmlFor="description">Description</label>
              <input
                placeholder="Description"
                type="text"
                name="description"
                onChange={this.descriptionChange}
              />
            </div>
            <div className="details">
              <label htmlFor="category">Catégorie</label>
              <input
                placeholder="Catégorie"
                type="text"
                name="category"
                onChange={this.categoryChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.add}>Création d'un nouveau Todo</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
  return {
    AddTodo: (todo) => dispatch(AddTodo(todo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
