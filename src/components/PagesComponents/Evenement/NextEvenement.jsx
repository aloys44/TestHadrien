import React, { useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { GetNotSeenListEvenement, ReactOnEvenement } from "../../../actions/evenements";
import LikeButton from "./LikeComponent/LikeButton";

class NextEvenement extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetNotSeenListEvenement(this.props.user?.auth_token);
  }

  reaction = (evenement) => {
      console.log(evenement);
      console.log(this.props.user?.auth_token);
    this.props.ReactOnEvenement(evenement, this.props.user?.auth_token);
  }
  

  render() {
        console.log(this.props.evenements);
    return (
      
          <div className="container">
            <h1><strong>Liste des Evenements</strong></h1>
          <div className="columns is-multiline">
            {this.props.evenements.evenementList == null
              ? "Pas de nouveaux évènements !"
              : this.props.evenements.evenementList.map(
                  (evenement, index) => (
                    <div className="column is-full">
                      <article>
                        <div className="message-header">
                          <p>
                            {evenement.title} 
                          </p>
                          <p>{evenement.description}</p>
                        </div>
                        <div className="message-body">
                          {evenement.creation_date}{" "}
                        </div>
                      </article>
                      <LikeButton evenement={evenement} fallback={this.reaction}/>
                    </div>
                  )
                )}
          </div>
        </div>

    );
  }
}


const mapStateToProps = (state) => {
  return { evenements: state.evenements, user: state.users?.user };
};

function mapDispatchToProps(dispatch) {
  return {
    GetNotSeenListEvenement: (auth_token) => dispatch(GetNotSeenListEvenement(auth_token)),
    ReactOnEvenement: (evenement, auth_token) => dispatch(ReactOnEvenement(evenement, auth_token))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NextEvenement);
