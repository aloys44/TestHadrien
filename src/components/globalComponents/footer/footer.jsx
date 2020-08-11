import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddUser } from '../../../actions/users';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Site Web</strong> réalisé par{' '}
            <a href="https://www.linkedin.com/in/alo%C3%AFs-coussout-3317a9197/">
              Aloïs Coussout
            </a>
            .{' '}
          </p>
          <p>
            Pour accéder à la page facebook des{' '}
            <a href="https://www.facebook.com/Les-Joggeurs-Utiles-Saint-Nazaire-541821872966758/">
              Joggeurs Utiles
            </a>
          </p>
          <p>A bientôt pour de nouvelles aventures avec les Joggeurs Utiles !</p>
          <img
            src="https://img.icons8.com/bubbles/100/000000/homer-simpson.png"
            alt="icone Homer Simpson"
          />
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddUser: (user) => dispatch(AddUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
