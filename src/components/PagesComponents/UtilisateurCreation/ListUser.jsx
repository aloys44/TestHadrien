import React from 'react';
import { connect } from 'react-redux';
import { GetUsers } from '../../../actions/users';

class ListUser extends React.Component {
  pseudoChange = (e) => {
    this.username = e.target.value;
  };

  firstNameChange = (e) => {
    this.firstName = e.target.value;
  };

  lastNameChange = (e) => {
    this.lastName = e.target.value;
  };

  emailChange = (e) => {
    this.email = e.target.value;
  };

  passwordChange = (e) => {
    this.password = e.target.value;
  };

  render() {
    this.props.GetUsers();

    return (
      <div className="container">
        <h1>
          <strong>Liste des Joggeurs utiles</strong>
        </h1>
        <div className="columns is-multiline">
          {this.props.users.userList == null
            ? 'Problème chargement liste utilisateurs'
            : this.props.users.userList.map((user, index) => (
                <>
                  <div className="column is-full">
                    <article
                      className={
                        index % 2 === 0 ? 'message is-link' : 'message is-success'
                      }
                    >
                      <div className="message-header">
                        <p>{user.username}</p>
                        <p>{user.experience}</p>
                      </div>
                      <div className="message-body">
                        {user.email} <i className={`${user.photo} photo`} />
                      </div>
                    </article>
                  </div>
                </>
              ))}
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
    GetUsers: (user) => dispatch(GetUsers(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
