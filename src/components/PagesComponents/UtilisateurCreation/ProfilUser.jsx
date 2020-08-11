import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class ProfilUser extends React.Component {
  render() {
    return (
      <div className="card-header-title is-centered">
        <div className="card-content">
          <div className="media is-centered">
            <div className="media-left">
              <figure className="image is-100x100">
                <i className={`${this.props.user?.photo} photo`} />
              </figure>
            </div>
            <div className="media-content">
              <p cclassNamelass="title is-12">Votre profil</p>
              <p className="title is-6">Votre pseudo: {this.props.user?.username} </p>
              <p className="title is-6">Votre prénom: {this.props.user?.firstName} </p>
              <p className="title is-6">Votre nom: {this.props.user?.lastName} </p>
              <p className="title is-6">Votre email: {this.props.user?.email} </p>
              <p className="title is-6">
                Votre expérience: {this.props.user?.experience === 1 ? '' : 'Débutant'}
                <progress
                  className="progress is-medium is-success"
                  value={this.props.user?.experience}
                  max="5"
                />
              </p>
              <p className="title is-6" />
              <div>
                <div className="button is-success">
                  <strong>
                    <NavLink to="/UserUpdate">Changer votre profil ?</NavLink>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user };
};

export default connect(mapStateToProps)(ProfilUser);
