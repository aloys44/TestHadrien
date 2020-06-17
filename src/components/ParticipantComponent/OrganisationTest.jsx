import React, { Component } from 'react';
import { library } from  '@fortawesome/fontawesome-svg-core';
import { faTrash } from  '@fortawesome/free-solid-svg-icons';
import ListParticipants from './ListParticipants';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddSortie , GetSorties } from "../../actions/sorties";
import { AddUser , GetUsers } from "../../actions/users";


class OrganisationTest extends React.Component {
    constructor(props){
        super(props);

        const sorties = this.props.GetSorties()
        const users = this.props.GetUsers()

        this.state={

            participantsTeamOne:[],
            CurrentParticipantTeamOne:{
                id:'',
                pseudo: '',
                experience : '',
                photo_profil: '',
                runLeader: "Guillaume",
                nombreParticipantTeamOne: 0,

            },
            CurrentParticipantTeamTwo:{
                id:'',
                pseudo: '',
                experience : '',
                photo_profil: '',
                walkLeader: "Dorian",
                nombreParticipantTeamTwo: 0,

            },
    nombreParticipantTeamOneMax: 10,
    nombreParticipantTeamTwoMax: 10,
    nombreParticipantTotal: 0,
    nombreParticipantTotalMax: 20,


        }
    }

      loadSorties = () => {
    this.props.GetSorties();
  };

      loadUsers = () => {
    this.props.GetUsers();
  };
  
    handleChange = (e) => {
                this.setState({
                CurrentParticipantTeamOne:{
                    pseudo: e.target.value,
                    runLeader: this.state.CurrentParticipantTeamOne.runLeader,
                    id: Date.now()
                }
        })
        console.log(this.state.CurrentParticipantTeamOne);
    };


    handleInputTeamOne = (e) =>{
        this.setState({
                CurrentParticipantTeamOne:{
                    pseudo: e.target.value,
                    runLeader: this.state.CurrentParticipantTeamOne.runLeader,
                    id: Date.now()
                }
        })
    };

    handleInputTeamTwo = (e) =>{
        this.setState({
                CurrentParticipantTeamTwo:{
                    pseudo: e.target.value,
                    id: Date.now()
                }
        })
    };
    
    addParticipantTeamOne = (e) =>{
        e.preventDefault();
        const newParticipant = this.state.CurrentParticipantTeamOne;
        console.log(newParticipant);
        if(newParticipant.pseudo!==""){
            const newParticipants=[...this.state.participantsTeamOne, newParticipant];
            this.setState({
            participantsTeamOne:newParticipants,
                CurrentParticipantTeamOne:{
                id:'',
                pseudo: '',
                experience : '',
                photo_profil: '',
                runLeader: this.state.CurrentParticipantTeamOne.runLeader,
            }
            })
        }
    }

        deleteParticipantTeamOne = (id) =>{
        const filteredItems = this.state.participantsTeamOne.filter(participant =>
        participant.id !== id);
        this.setState({
            participantsTeamOne:filteredItems
        })
    }

     setUpdate = (pseudo,id)=>{
    console.log("participants Equipe Un:"+this.state.participantsTeamOne);
    const participantsTeamOne = this.state.participantsTeamOne;
    participantsTeamOne.map(participant=>{      
      if(participant.id===id){
        console.log(participant.id +"    "+id)
        participant.pseudo= pseudo;
      }
    })
    this.setState({
      participantsTeamOne: participantsTeamOne
    })
      }

  render() {
        console.log(this.props.sorties);
    return (
        <div className="to-do-listParticipant">
            <div className="to-do-listComponent">
            <header>
            <form className="to-do-form" onSubmit={this.addParticipantTeamOne}>
        {this.props.users.userList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.users.userList.map((user, index) => (
              <>
              <select             
                value={this.state.value}
                onChange={this.handleChange}>
                <option>{user.username}</option>
              </select>
              </>
            ))}
            <button type="submit">Ajouter un coureur</button>
                        </form>
                    </header>
                <div className="to-do-listTeamOne">
                    <h1>Equipe Course dirigée par :</h1>
                    <label><h2>{this.state.CurrentParticipantTeamOne.runLeader}</h2></label>
                    <ListParticipants 
                    participantsTeamOne={this.state.participantsTeamOne} 
                    deleteParticipant={this.deleteParticipantTeamOne}
                    setUpdate={this.setUpdate}/>
                </div>   
                    <div className="to-do-listTeamTwo">
                    <h1>Equipe Course dirigée par :</h1>
                    <label><h2>{this.state.CurrentParticipantTeamOne.runLeader}</h2></label>
                    <ListParticipants 
                    participantsTeamOne={this.state.participantsTeamOne} 
                    deleteParticipant={this.deleteParticipantTeamOne}
                    setUpdate={this.setUpdate}/>
                </div>  

            </div>

        </div>
    );
  }

}


const mapStateToProps = (state) => {
  return { users: state.users };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSorties: () => dispatch(GetSorties()),
    GetUsers: () => dispatch(GetUsers()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationTest);
