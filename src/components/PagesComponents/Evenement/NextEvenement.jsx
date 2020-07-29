import React, { useState} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { GetNextEvenement, ReactOnEvenement } from "../../../actions/evenements";
import LikeButton from "./LikeComponent/LikeButton";

class NextEvenement extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetNextEvenement();
  }

  componentDidMount = (evenement) => {
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
              ? "ERROR MOTHERFUCKER"
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
                      <LikeButton evenement={evenement} componentDidMount={evenement}/>
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
    GetNextEvenement: () => dispatch(GetNextEvenement()),
    ReactOnEvenement: (evenement, auth_token) => dispatch(ReactOnEvenement(evenement, auth_token))


  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NextEvenement);
