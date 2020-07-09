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

  load = () => {
    this.props.GetTodos();
  };

click = category => e => {
    this.setState({
    category: category
  })
  };

  renderArticle = (props) => {
    if (props.category === 0 || props.category === props.todo.category) {
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
    } else {
      return (
        <>
        </>
      )
    }
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h1>
          <strong>Liste des TODO</strong>
        </h1>

        <button onClick={this.click(1)}>categorie 1</button>
        <button onClick={this.click(2)}>categorie 2</button>
        <button onClick={this.click(0)}>reset</button>

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
