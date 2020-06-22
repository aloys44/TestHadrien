import React, { Component } from 'react';
import moment from 'moment';
import { library } from  '@fortawesome/fontawesome-svg-core';
import { faTrash } from  '@fortawesome/free-solid-svg-icons';
import ListParticipants from './ListParticipants';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import 'moment/locale/pt-br';
import 'moment/locale/fr';

import { AddSortie , GetSorties } from "../../actions/sorties";
import { AddUser , GetUsers } from "../../actions/users";


class OrganisationCourse extends React.Component {
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


    handleInputTeamOne = (e) =>{
          
        this.props.GetSorties();
  
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

    let nbTotal =0;

    return (
        <div className="to-do-listParticipant">
            <div className="to-do-listComponent">
            <header>

            <form className="to-do-form" onSubmit={this.addParticipantTeamOne}>
            <input type="text" placeholder="Enter Text"
            value={this.state.CurrentParticipantTeamOne.pseudo}
            onChange={this.handleInputTeamOne}
            ></input>
            <button type="submit">Ajouter un coureur</button>
                        </form>
                    </header>
                <div>
                    {this.props.sorties.sortieList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.sorties.sortieList.map((sortie, index) => (
              <>
                  <div className="to-do-listCoursePresentation">
                  <h1>{sortie.title}</h1>
                <h2>{sortie.description}</h2>
                <h3>La prochaine course aura lieu le: {sortie.running_date}</h3>
                <h3>{sortie.nbSuscribedWalk_participants}+{sortie.nbSuscribedRun_participants}/{sortie.nbTotal_participants}</h3>
   
                  
                  <div className="to-do-listTeamOne">
                      <h1>Equipe Course dirigée par :</h1>
                      <label><h2>{sortie.leaderWalk_participants}</h2></label>
                      <h3>{sortie.nbSuscribedWalk_participants}/{sortie.nbMaxWalk_participants}</h3>
                      <ListParticipants 
                      participantsTeamOne={this.state.participantsTeamOne} 
                      deleteParticipant={this.deleteParticipantTeamOne}
                      setUpdate={this.setUpdate}/>
                  </div>   
                  <div className="to-do-listTeamTwo">
                      <h1>Equipe Marche dirigée par :</h1>
                      <label><h2>{sortie.leaderRun_participants}</h2></label>
                      <h3>{sortie.nbMaxRun_participants}/{sortie.nbMaxRun_participants}</h3>
                      <ListParticipants 
                      participantsTeamOne={this.state.participantsTeamOne} 
                      deleteParticipant={this.deleteParticipantTeamOne}
                      setUpdate={this.setUpdate}/>
                  </div> 
                  </div>
                                </>
            ))} 
                </div>
            </div>

        </div>
    );
  }

}


const mapStateToProps = (state) => {
  return { sorties: state.sorties };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSorties: () => dispatch(GetSorties()),
    GetUsers: () => dispatch(GetUsers()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationCourse);
