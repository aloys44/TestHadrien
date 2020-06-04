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
    nombreParticipant: 0,
    nombreParticipantMax: 10,
    disabled: false,
    

  };




  handleDelete = id => {
    const participants = [...this.state.participants];
    const index = participants.findIndex(participant => participant.id === id);
    const nombreParticipant = this.state.nombreParticipant -1 ;

    participants.splice(index, 1);

    this.setState({ participants });
    this.setState({ nombreParticipant });
  };

  handleAdd = participant => {
    const participants = [...this.state.participants];
    const nombreParticipant = this.state.nombreParticipant +1 ;
    participants.push(participant);
    this.setState({ participants });
    this.setState({ nombreParticipant });
  };

  ReachLimitParticipant = participants =>{
    const nombreParticipant = [...this.state.nombreParticipant];
    const nombreParticipantMax = 3;
    if(nombreParticipant == nombreParticipantMax){
      console.log("trop de monde!");
    }
  };
  
  handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

  render() {
    const title = "Liste des participants";
    let changeNbParticipants: participants.lenght;
    

    return (
      <div className="wrapper-participant">
      <div className="form-wrapper">

        <h1>{title}</h1>
        {this.state.nombreParticipant}
         <p>Nombre de participants: {changeNbParticipants}/{this.state.nombreParticipantMax} max</p>
        <ul>
          {this.state.participants.map(participant => (
            <Participant
              key={participant.id}
              details={participant}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ParticipantForm 
        onClientAdd={this.handleAdd} 
        onLimit={this.ReachLimitParticipant}
        disabled={true}

        
 />
      </div>
      </div>
    );
  }
}

export default indexParticipant
