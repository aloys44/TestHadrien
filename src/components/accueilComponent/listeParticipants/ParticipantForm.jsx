import React, { Component } from "react";

class ParticipantForm extends Component {
  state = {
    nouveauParticipant: ""
  };

  handleChange = event => {
    this.setState({ nouveauParticipant: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauParticipant;

    this.props.onClientAdd({ id, nom });

    this.setState({ nouveauParticipant: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauParticipant}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un participant"
        />
        <button disabled={true}>Confirmer</button>
      </form>
    );
  }
}

export default ParticipantForm;
