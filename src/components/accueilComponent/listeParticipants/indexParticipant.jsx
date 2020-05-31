import React from "react";
import ReactDOM from "react-dom";
import Participant from "./Participant";
import ParticipantForm from "./ParticipantForm";
import limiteParticipants from "./LimiteParticipants";



class indexParticipant extends React.Component {
  state = {
    participants: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Pernin" },
      { id: 3, nom: "Joseph Durand" }
    ],
    compteur: 0
  };

  handleDelete = id => {
    const participants = [...this.state.participants];
    const index = participants.findIndex(participant => participant.id === id);
    participants.splice(index, 1);

    this.setState({ participants });
  };

  handleAdd = participant => {
    const participants = [...this.state.participants];
    const compteur= [...this.state.participants];
    const test = compteur.lastIndexOf(participant);
    participants.push(participant);
    this.setState({ test: this.state.test + 1})
    this.setState({ participants });

  
  };

  render() {
    const title = "Liste des participants";

    return (
      <div>
      <h1>test</h1>
        <h1>{title}</h1>
        { this.state.test }
        <ul>
          {this.state.participants.map(participant => (
            <Participant
              key={participant.id}
              details={participant}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ParticipantForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

export default indexParticipant
