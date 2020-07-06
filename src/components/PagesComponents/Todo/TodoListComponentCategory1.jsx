import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetTodosCategory1 } from "../../../actions/todos";

class TodoListComponentCategory1 extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetTodosCategory1();

  }
  title = "";
  description = "";
  category = "";
  creation_date = "";
  anticipatedEnd_realisation = "";
  like_Count = "";


  render() {
    console.log(this.props.todos);
    return (
        <div className="container">
            <h1><strong>Liste des TODO</strong></h1>

          <div className="columns is-multiline">
            {this.props.todo.todoList == null
              ? "ERROR MOTHERFUCKER"
              : this.props.todo.todoList.map((todo, index) => (
                  <div className="column is-full">
                        <article
                          className={
                            index % 2 == 0
                              ? "message is-danger"
                              : "message is-warning"
                          }
                        >
                          <div className="message-header">
                            <p>
                              {todo.title} créée par {todo.author}
                            </p>
                            <p>{todo.creation_date}</p>
                          </div>
                          <div className="message-body">
                            {todo.description}{" "}
                          </div>
                        </article>
                      </div>
                  )
                )}
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
    GetTodosCategory1: () => dispatch(GetTodosCategory1()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponentCategory1);
