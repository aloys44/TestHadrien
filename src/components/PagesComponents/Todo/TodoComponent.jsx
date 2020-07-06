import React, { Component } from 'react';
import { connect } from "react-redux";
import { AddTodo } from "../../../actions/todos";



class TodoComponent extends Component { 
constructor(props) {
    super(props);    
        
}



    handleSubmit = (e) => {

    const todo = {
      title: this.title,
      description: this.description,
      category: "5",
      author: this.props.user?.username, 

    };
     if (this.title.length < 5 || this.description.length < 5) {
      console.log(this.title.length);
      alert("titre ou description trop petite ! Minimum 5 lettres pour chaque !")
    } else {
    console.log(todo);
    this.props.AddTodo(todo);
  };}

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


  render() {

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'un Objet Todo</h1>
          <form>
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
              <button type="submit" onClick={this.handleSubmit}>Création d'un nouveau Todo</button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todo , user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddTodo: (todo) => dispatch(AddTodo(todo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
