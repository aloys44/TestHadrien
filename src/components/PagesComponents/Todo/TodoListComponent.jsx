import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetTodos } from "../../../actions/todos";


class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetTodos();
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


  render() {
    console.log(this.props.todos);
    return (
      <div className="wrapper-suggestion-listSuggestion">
        {this.props.todos.todoList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.todos.todoList.map((todo, index) => (
              <>
            <div className="form-wrapper">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
              </>
            ))}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  
  return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
  return {
    GetTodos: () => dispatch(GetTodos()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
