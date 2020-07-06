import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddUser, GetUsers } from "../../../actions/users";



class ListUser extends React.Component {
 constructor(props) {
            super(props);    
                 
    this.props.GetUsers();

  }
  pseudo = "";
  firstName = "";
  lastName = "";  
  email = "";
  password = "";  
  confirmedPassword = "";


    add = () => {
    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,

     };
     console.log(user);
    this.props.AddUser(user);
  };

  pseudoChange = (e) => {
    this.username = e.target.value;
  }
  firstNameChange = (e) => {
    this.firstName = e.target.value;
  }
  lastNameChange = (e) => {
    this.lastName = e.target.value;
  }
  emailChange = (e) => {
    this.email = e.target.value;
  }
  passwordChange = (e) => {
    this.password = e.target.value;
  }


handleSubmit = e => {
      console.log(`
        --SUBMITTING--
        pseudo: ${this.state.pseudo}
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        email: ${this.state.email}
        password: ${this.state.password}
      `);
  };


  render() {
    console.log(this.props.users);
    return (
      <div className="container">
            <h1><strong>Liste des Joggeurs utiles</strong></h1>
          <div className="columns is-multiline">
        {this.props.users.userList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.users.userList.map((user, index) => (
                   <div class="column is-full">
                      <article
                        className={
                          index % 2 == 0
                            ? "message is-link"
                            : "message is-success"
                        }
                      >
                        <div class="message-header">
                          <p>
                            {user.username} 
                          </p>
                          <p>{user.experience}</p>
                        </div>
                        <div class="message-body">
                          {user.email}{" "}
                          <i class={user.photo + " photo"}></i>
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
  return { users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
        GetUsers: () => dispatch(GetUsers())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);


