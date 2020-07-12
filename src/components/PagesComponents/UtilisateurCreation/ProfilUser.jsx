import React from "react";
import { connect } from "react-redux";

import {
  NavLink,
} from "react-router-dom";



class ProfilUser extends React.Component {




render() {   
  console.log(this.props.users);
     return (

        <div class="card-header-title is-centered">
            <div class="card-content">
                <div class="media is-centered">
                        <div class="media-left">
                            <figure class="image is-100x100">
                                <i className={this.props.user?.photo + " photo"}></i>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-12">Votre profil</p>
                            <p class="title is-6">Votre pseudo: {this.props.user?.username}{" "}</p>
                            <p class="title is-6">Votre prénom: {this.props.user?.firstName}{" "}</p>
                            <p class="title is-6">Votre nom: {this.props.user?.lastName}{" "}</p>
                            <p class="title is-6">Votre email: {this.props.user?.email}{" "}</p>
                            <p class="title is-6">Votre expérience: {this.props.user?.experience === 1 ? "" : "Débutant"}<progress className="progress is-medium is-success" value={this.props.user?.experience} max="5"></progress></p>
                            <p class="title is-6"></p>
                            <div>
                                <a className="button is-success">
                                    <strong>
                                        <NavLink to="/UserUpdate">Changer votre profil ?</NavLink>
                                    </strong>
                                </a>
                            </div>
                        </div>
                </div>

        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state User :", state)
  return { user: state.users.user};
};


function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilUser);
