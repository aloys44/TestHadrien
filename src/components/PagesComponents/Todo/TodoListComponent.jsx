import React from "react";
import { connect } from "react-redux";

import { GetTodos } from "../../../actions/todos";

class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetTodos();

    this.state = {
      category: 0
    };
  }
  title = "";
  description = "";
  category = "";
  creation_date = "";
  anticipatedEnd_realisation = "";
  like_Count = "";


click = category => e => {
    this.setState({
    category: category
  })
  };

  renderArticle = (props) => {
        console.log(props.category);
        console.log(props.todo.photo);

    if (props.category == 0) {
      return (
        <>
        <div className="column is-full">
          <article className="message is-primary ">
            <div className="message-header">
              <p>
                {props.todo.title} créée par {props.todo.author} {props.todo.photo}
              </p>
              <p>{props.todo.creation_date}</p>
            </div>
            <div className="message-body">
              {props.todo.description + " - " + props.todo.category}{" "}
            </div>
          </article>
        </div>
        </>
      )
    } else  if (props.category == 1 && props.category == props.todo.category) {
      return (
        <>
         <div className="column is-full">
          <article className="message is-link">
            <div className="message-header">
              <p>
                {props.todo.title} créée par {props.todo.author}
              </p>
              <p>{props.todo.creation_date}</p>
            </div>
            <div className="message-body">
              {props.todo.description + " - " + props.todo.category}{" "}
            </div>
          </article>
        </div>
        </>
      )
    } else if (props.category == 2 && props.category == props.todo.category) {
      return (
        <>
         <div className="column is-full">
          <article className="message is-info">
            <div className="message-header">
              <p>
                {props.todo.title} créée par {props.todo.author}
              </p>
              <p>{props.todo.creation_date}</p>
            </div>
            <div className="message-body">
              {props.todo.description + " - " + props.todo.category}{" "}
            </div>
          </article>
        </div>
        </>
      )
    } else  if (props.category == 3 && props.category == props.todo.category) {
     
      return (
        <>
         <div className="column is-full">
          <article className="message is-warning">
            <div className="message-header">
              <p>
                {props.todo.title} créée par {props.todo.author}
              </p>
              <p>{props.todo.creation_date}</p>
            </div>
            <div className="message-body">
              {props.todo.description + " - " + props.todo.category}{" "}
            </div>
          </article>
        </div>
        </>
      )
    } else if (props.category == 4 && props.category == props.todo.category) {
      return (
        <>
         <div className="column is-full">
          <article className="message is-danger">
            <div className="message-header">
              <p>
                {props.todo.title} créée par {props.todo.author}
              </p>
              <p>{props.todo.creation_date}</p>
            </div>
            <div className="message-body">
              {props.todo.description + " - " + props.todo.category}{" "}
            </div>
          </article>
        </div>
        </>
      )
    } else if (props.category == 5 && props.category == props.todo.category) {

      return (
        <>
         <div className="column is-full">
          <article className="message is-success">
            <div className="message-header">
              <p>
                {props.todo.title} créée par {props.todo.author} 
              </p>
              <p>{props.todo.creation_date}</p>
            </div>
            <div className="message-body">
              {props.todo.description + " - " + props.todo.category}{" "}
            </div>
          </article>
        </div>
        </>
      )
    } else{
      return (
        <>
        </>
      );
    }
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h1>
          <strong>Liste des TODO</strong>
        </h1>
        <div className="espace">
        </div> 
        <div className="hr">
        </div>
                <div className="espace">
        </div> 
        <div className="menu">
          <ul>
            <li><button onClick={this.click(0)} className="button is-primary">Voir toutes les TODO</button></li>
            <li><button onClick={this.click(1)} className="button is-link">Version 1</button></li>
            <li><button onClick={this.click(2)} className="button is-info">Version 2</button></li>
            <li><button onClick={this.click(3)} className="button is-warning">Version 3</button></li>
            <li><button onClick={this.click(4)} className="button is-danger">Version 4</button></li>
            <li><button onClick={this.click(5)} className="button is-success">Version Finale</button></li>
          </ul>
        </div>
        <div className="espace">
        </div> 
          <div className="hr">
        </div>
        <br/>

        <div className="container">
          <div className="columns is-multiline">
            {this.props.todo.todoList == null
              ? "ERROR MOTHERFUCKER"
              : this.props.todo.todoList.map((todo, index) => (
                <this.renderArticle category={this.state.category} todo={todo}/>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todo: state.todo };
};

function mapDispatchToProps(dispatch) {
  return {
    GetTodos: () => dispatch(GetTodos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
