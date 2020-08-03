import React, { useState } from "react";
import { connect } from "react-redux";
import { GetEvenements } from "../../../actions/evenements";

class EvenementList extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetEvenements();
  }

  reaction = (suggestion, is_liked) => {
    this.props.ReactOnSuggestion(
      suggestion,
      is_liked,
      this.props.user?.auth_token
    );
  };

  render() {
    this.props.GetEvenements();
    console.log(this.props.GetEvenements());
    return (
      <div className="container">
        <h1>
          <strong>Liste des Evenements</strong>
        </h1>
        <div className="columns is-multiline">
          {this.props.evenements.evenementList === null
            ? "ERROR MOTHERFUCKER"
            : this.props.evenements.evenementList.map((evenement, index) => (
                <div className="column is-full">
                  <article>
                    <div className="message-header">
                      <p>{evenement.title}</p>
                      <p>{evenement.description}</p>
                    </div>
                    <div className="message-body">
                      {evenement.creation_date}{" "}
                    </div>
                  </article>
                </div>
              ))}
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
    GetEvenements: () => dispatch(GetEvenements()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EvenementList);
