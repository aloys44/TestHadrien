import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddUser, GetUsers } from "../../actions/users";

class FormulaireTest extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetUsers();
  }

  add = () => {
    const user = {
      id: 1,
      username: "titre 2",
      password: "Description 2",
      roles: "Alois",
    };

    this.props.AddUser(user);
  };

  load = () => {
    this.props.GetUsers();
  };

  render() {
    console.log(this.props.users);
    return (
      <div>
        <button onClick={this.add}>ADD User</button>
        <button onClick={this.load}>LOAD USER</button>
        {this.props.users.userList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.users.userList.map((user, index) => (
              <>
                <h3>{user.username}</h3>
                <p>{user.password}</p>
                <p>{user.roles}</p>
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
    GetUsers: () => dispatch(GetUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormulaireTest);
