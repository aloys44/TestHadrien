import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetNextSortie, ReactOnSortie } from "../../actions/sorties";
import LikeButton from "./LikeComponent/LikeButton";

class SortieOrganisation extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetNextSortie();

        this.state = {
      is_subscribed: 0
    };
  }
  
  handleClick = () => {
  }

  reaction = (sortie) => {
    this.setState({is_subscribed: this.state.is_subscribed + 1});
    this.props.ReactOnSortie(sortie, this.props.user?.auth_token);
  }

   render() {
    console.log(this.props.sorties);
    return (
      <article class="message is-success">
        {this.props.sorties.nextSortie == null
          ? "ERROR MOTHERFUCKER"
          :
            <>
              <div class="message-body">
                  <h1>{this.props.sorties.nextSortie.title}</h1>
                  {this.state.is_subscribed}
                  <p>Description: {this.props.sorties.nextSortie.description}</p>
                  <p>Nombre Maximum de coureurs: {this.props.sorties.nextSortie.nbMaxRun_participants} Nombre Maximum de marcheurs: {this.props.sorties.nextSortie.nbMaxWalk_participants}</p>
                  <p>Date de la course: {this.props.sorties.nextSortie.running_date}</p>
                  <p>Nombre d'inscrits: {this.props.sorties.nextSortie.participants.length}</p>
                  <p>Liste des inscrits: {
                    this.props.sorties.nextSortie.participants == null
                      ? "Aucun inscrits"
                      : this.props.sorties.nextSortie.participants.map((participant, index) => (
                          <>
                            {participant.username + " "}
                          </>
                        ))}
                  </p>
                  <LikeButton is_suscribed={this.state.is_subscribed} sortie={this.props.sorties.nextSortie} fallback={this.reaction}/>
              </div>
            </>
        }
</article>
    );
  }
} 


const mapStateToProps = (state) => {
      return { sorties: state.sorties, user: state.users?.user };
};

function mapDispatchToProps(dispatch) {
  return {
    GetNextSortie: () => dispatch(GetNextSortie()),
    ReactOnSortie: (sortie, auth_token) => dispatch(ReactOnSortie(sortie, auth_token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieOrganisation);
