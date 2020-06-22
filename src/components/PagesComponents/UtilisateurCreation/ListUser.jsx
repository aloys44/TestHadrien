import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddUser, GetUsers } from "../../../actions/users";



class ListUser extends React.Component {
 constructor(props) {
            super(props);    
                 
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
      <div className="wrapper-suggestion-listUser">
        {this.props.users.userList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.users.userList.map((user, index) => (
              <>
            <div className="form-wrapper">
                <h1>{user.username}</h1>
                <p>prénom: {user.firstName}</p>
                <p>nom: {user.lastName}</p>
                <p>email: {user.email}</p>
                <p>expérience: {user.experience}</p>
                <p>photo: {user.photo}</p>

            </div>
              </>
            ))}
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return { users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user)),
        GetUsers: () => dispatch(GetUsers())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);


