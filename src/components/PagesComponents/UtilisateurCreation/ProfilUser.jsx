import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from 'react-select';

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

  const options = [
  { value: "fas fa-user-ninja", label: <i class="fas fa-user-ninja"></i> },
  { value: "fas fa-user-astronaut", label: <i class="fas fa-user-astronaut"></i> },
  { value: "fas fa-user-tie", label: <i class="fas fa-user-tie"></i> },
  { value: "fas fa-user-secret", label: <i class="fas fa-user-secret"></i> },
  { value: "fas fa-snowboarding", label: <i class="fas fa-snowboarding"></i> },
  { value: "fas fa-bed", label: <i class="fas fa-bed"></i> },
  { value: "fas fa-hiking", label: <i class="fas fa-hiking"></i> },
  { value: "fab fa-suse", label: <i class="fab fa-suse"></i> },
  { value: "fas fa-kiwi-bird", label: <i class="fas fa-kiwi-bird"></i> },
  { value: "fas fa-dragon", label: <i class="fas fa-dragon"></i> },
  { value: "fas fa-cat", label: <i class="fas fa-cat"></i> },
  { value: "fas fa-robot", label: <i class="fas fa-robot"></i> },
  { value: "fas fa-running", label: <i class="fas fa-running"></i> },
  { value: "fas fa-meteor", label: <i class="fas fa-meteor"></i> },
  { value: "fab fa-earlybirds", label: <i class="fab fa-earlybirds"></i> },
  { value: "fas fa-frog", label: <i class="fas fa-frog"></i> },
  { value: "fas fa-fish", label: <i class="fas fa-fish"></i> },
  { value: "fas fa-ghost", label: <i class="fas fa-ghost"></i> },
  { value: "fas fa-hippo", label: <i class="fas fa-hippo"></i> },
  { value: "fab fa-jenkins", label: <i class="fab fa-jenkins"></i> },
  { value: "fas fa-snowman", label: <i class="fas fa-snowman"></i> },

];

class ProfilUser extends React.Component {
 constructor(props) {
            super(props);    
  }

      state = {
  selectedOption: null,
  
}

render() {   
  console.log(this.props.users);
  const { selectedOption } = this.state;   
     return (

        <div class="card-header-title is-centered">
            <div class="card-content">
                <div class="media">
                        <div class="media-left">
                            <figure class="image is-100x100">
                                <i className={this.props.user?.photo + " photo"}></i>
                            </figure>
                        </div>
                        <div class="media-content is-centered">
                        <center>
                            <p class="title is-12">Votre profil</p>
                            <p class="title is-6">Votre pseudo: {this.props.user?.username}{" "}</p>
                            <p class="title is-6">Votre prénom: {this.props.user?.firstName}{" "}</p>
                            <p class="title is-6">Votre nom: {this.props.user?.lastName}{" "}</p>
                            <p class="title is-6">Votre email: {this.props.user?.email}{" "}</p>
                            <p class="title is-6">Votre expérience: {this.props.user?.experience}{" "}</p>
                        </center>
                        </div>
                </div>
                <div>
                <center>
                    <a className="button is-primary">
                        <strong>
                            <NavLink to="/UserUpdate">Changer votre profil ?</NavLink>
                        </strong>
                    </a>
                </center>
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
