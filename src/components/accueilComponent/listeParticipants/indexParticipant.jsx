import React from "react";
import ReactDOM from "react-dom";
import Participant from "./Participant";
import ParticipantForm from "./ParticipantForm";



class indexParticipant extends React.Component {
  state = {
    participantsTeamOne: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Pernin" },
      { id: 3, nom: "Joseph Durand" }
    ],
        participantsTeamTwo: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Pernin" },
      { id: 3, nom: "Joseph Durand" }
    ],
    nombreParticipantTeamOne: 0,
    nombreParticipantTeamTwo: 0,

    nombreParticipantTeamOneMax: 10,
    nombreParticipantTeamTwoMax: 10,

    nombreParticipantTotal: 0,
    nombreParticipantTotalMax: 20,

  };

  handleDeleteTeamOne = id => {
    const participantsTeamOne = [...this.state.participantsTeamOne];
    const index = participantsTeamOne.findIndex(participantTeamOne => participantTeamOne.id === id);
    const nombreParticipantTeamOne = this.state.nombreParticipantTeamOne -1 ;
    const nombreParticipantTotal= this.state.nombreParticipantTotal -1 ;

    participantsTeamOne.splice(index, 1);

    this.setState({ participantsTeamOne });
    this.setState({ nombreParticipantTeamOne });
    this.setState({ nombreParticipantTotal });
  };

  handleDeleteTeamTwo = id => {
    const participantsTeamTwo = [...this.state.participantsTeamTwo];
    const index = participantsTeamTwo.findIndex(participantTeamTwo => participantTeamTwo.id === id);
    const nombreParticipantTeamTwo = this.state.nombreParticipantTeamTwo -1 ;
    const nombreParticipantTotal= this.state.nombreParticipantTotal -1 ;

    participantsTeamTwo.splice(index, 1);

    this.setState({ participantsTeamTwo });
    this.setState({ nombreParticipantTeamTwo });
    this.setState({ nombreParticipantTotal });

  };


  handleAddTeamOne = participantTeamOne => {
    const participantsTeamOne = [...this.state.participantsTeamOne];
    const nombreParticipantTeamOne = this.state.nombreParticipantTeamOne +1 ; 
    const nombreParticipantTotal = this.state.nombreParticipantTotal +1 ;


    participantsTeamOne.push(participantTeamOne);
    this.setState({ participantsTeamOne });
    this.setState({ nombreParticipantTeamOne });
    this.setState({ nombreParticipantTotal });

  };

  handleAddTeamTwo = participantTeamTwo => {
    const participantsTeamTwo = [...this.state.participantsTeamTwo];
    const nombreParticipantTeamTwo = this.state.nombreParticipantTeamTwo +1 ; 
    const nombreParticipantTotal = this.state.nombreParticipantTotal +1 ;

    participantsTeamTwo.push(participantTeamTwo);
    this.setState({ participantsTeamTwo });
    this.setState({ nombreParticipantTeamTwo });
    this.setState({ nombreParticipantTotal });

  };

  
  render() {
    const title = "Liste des participants";
    const MinorTeamOne = "Equipe 1";
    const MinorTeamTwo = "Equipe 2";
   
    let changeNbParticipants: participants.lenght;

    return (
      <div className="wrapper-participant">
      <div className="form-participants">

        <h1>{title}</h1>
        <h1>{this.state.nombreParticipantTotal} / {this.state.nombreParticipantTotalMax}</h1>
        <h2 className="Minortitle">{MinorTeamOne}</h2>
         <h2>Le chef de groupe :</h2>
         <p>Nombre de participants: {this.state.nombreParticipantTeamOne}/{this.state.nombreParticipantTeamOneMax} max</p>
        <div>
        <ul>
          {this.state.participantsTeamOne.map(participantTeamOne => (
            <Participant
              key={participantTeamOne.id}
              details={participantTeamOne}
              onDelete={this.handleDeleteTeamOne}
            />
          ))}
        </ul>
        <ParticipantForm 
        onClientAdd={this.handleAddTeamOne}
        numberParticipant={this.state.nombreParticipantTotal.value}
        numberParticipantsMax={this.state.nombreParticipantTotalMax}     
        />
        </div>

        <h2 className="Minortitle">{MinorTeamTwo}</h2>
        <div className="form-participants-2">
         <h2>Le chef de groupe :</h2>
         <p>Nombre de participants: {this.state.nombreParticipantTeamTwo}/{this.state.nombreParticipantTeamTwoMax} max</p>
        <div>
        <ul>
          {this.state.participantsTeamTwo.map(participantTeamTwo => (
            <Participant
              key={participantTeamTwo.id}
              details={participantTeamTwo}
              onDelete={this.handleDeleteTeamTwo}
            />
          ))}
        </ul>
        <ParticipantForm 
        onClientAdd={this.handleAddTeamTwo}
        numberParticipant={this.state.nombreParticipantTotal.value}
        numberParticipantsMax={this.state.nombreParticipantTotalMax}     
        />
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default indexParticipant
