import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetSorties, ReactOnSortie } from "../../actions/sorties";
import LikeButton from "./LikeComponent/LikeButton";

class SortieOrganisation extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSorties();

        this.state = {
      is_subscribed: 0
    };
  }
  
  handleClick = () => {
  }

  load = () => {
    this.props.GetSorties();
  };

  reaction = (sortie) => {
    this.setState({is_subscribed: this.state.is_subscribed + 1});
    this.props.ReactOnSortie(sortie, this.props.user?.auth_token);
  }

   render() {
    console.log(this.props.sorties);
    return (
      <article class="message is-success">
        {this.props.sorties.sortieList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.sorties.sortieList.map((sortie, index) => (
              <>
            <div class="message-body">
                <h1>{sortie.title}</h1>
                {this.state.is_subscribed}
                <p>Description: {sortie.description}</p>
                <p>Nombre Maximum de coureurs: {sortie.nbMaxRun_participants} Nombre Maximum de marcheurs: {sortie.nbMaxWalk_participants}</p>
                <p>Date de la course: {sortie.running_date}</p>
                <LikeButton is_suscribed={this.state.is_subscribed} sortie={sortie} fallback={this.reaction}/>
            </div>
              </>
            ))}
</article>
    );
  }
} 


const mapStateToProps = (state) => {
      return { sorties: state.sorties, user: state.users?.user };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSorties: () => dispatch(GetSorties()),
    ReactOnSortie: (sortie, auth_token) => dispatch(ReactOnSortie(sortie, auth_token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieOrganisation);
