import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddSortie } from "../../actions/sorties";



class SortieCreation extends React.Component {
 constructor(props) {
            super(props);    
                 
  }
  title = "";
  description = "";  
  author = "";
  nbMaxWalk_participants = "";  
  leaderWalk_participants = "";
  nbMaxRun_participants = "";
  leaderRun_participants = "";
  nbTotal_participants = "";

    add = () => {
    const sortie = {
      title: this.title,
      description: this.description,
      author: this.author,
      nbMaxWalk_participants: this.nbMaxWalk_participants,
      leaderWalk_participants: this.leaderWalk_participants,
      nbMaxRun_participants: this.nbMaxRun_participants,
      leaderRun_participants: this.leaderRun_participants,
      nbTotal_participants: this.nbTotal_participants,
     };
     console.log(sortie);
    this.props.AddSortie(sortie);
  };

  titleChange= (e) => {
    this.title = e.target.value;
  }
  descriptionChange= (e) => {
    this.description = e.target.value;
  }
  authorChange= (e) => {
    this.author = e.target.value;
  }
  nbMaxWalk_participantsChange= (e) => {
    this.nbMaxWalk_participants = e.target.value;
  }
  leaderWalk_participantsChange= (e) => {
    this.leaderWalk_participants = e.target.value;
  }
  nbMaxRun_participantsChange= (e) => {
    this.nbMaxRun_participants = e.target.value;
  }
  leaderRun_participantsChange= (e) => {
    this.leaderRun_participants = e.target.value;
  }
  nbTotal_participantsChange= (e) => {
    this.nbTotal_participants = e.target.value;
  }

handleSubmit = e => {
      console.log(`
        --SUBMITTING--
        Title: ${this.state.title}
        Description: ${this.state.description}
        Author: ${this.state.author}
        nbMaxWalk_participants: ${this.state.nbMaxWalk_participants}
        leaderWalk_participants: ${this.state.leaderWalk_participants}
        nbMaxRun_participants: ${this.state.nbMaxRun_participants}
        leaderRun_participants: ${this.state.leaderRun_participants}
        nbTotal_participants: ${this.state.nbTotal_participants}
        creation_date: ${this.state.creation_date}

      `);
    
  };

 render() {    


     return (
     <div>
      <div className="wrapper-suggestion-creationCourse">
        <div className="form-wrapper">
          <h1>Création d'une course</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="details">
              <label htmlFor="title">Titre</label>
              <input
                placeholder="Titre"
                type="text"
                name="title"
                onChange={this.titleChange}
              />
            </div>
            <div className="details">
              <label htmlFor="author">Auteur</label>
              <input
                placeholder="Auteur"
                type="text"
                name="author"
                noValidate
                onChange={this.authorChange}
              />
            </div>
            <div className="details">
              <label htmlFor="nbMaxWalk_participants">Nombre participants Max Marche</label>
              <input
                placeholder="Nb Participants Max Marche"
                type="text"
                name="nbMaxWalk_participants"
                noValidate
                onChange={this.nbMaxWalk_participantsChange}
              />
            </div>
               <div className="details">
              <label htmlFor="leaderWalk_participants">Leader Marche Marche</label>
              <input
                placeholder="leaderWalk_participants"
                type="text"
                name="leaderWalk_participants"
                noValidate
                onChange={this.leaderWalk_participantsChange}
              />
            </div>
            <div className="details">
              <label htmlFor="nbMaxRun_participants">Nombre participants Max Course</label>
              <input
                placeholder="nbMaxRun_participants"
                type="text"
                name="nbMaxRun_participants"
                noValidate
                onChange={this.nbMaxRun_participantsChange}
              />
            </div>               
            <div className="details">
              <label htmlFor="leaderRun_participants">Leader Course</label>
              <input
                placeholder="leaderRun_participants"
                type="text"
                name="leaderRun_participants"
                noValidate
                onChange={this.leaderRun_participantsChange}
              />
            </div>               
            <div className="details">
              <label htmlFor="nbTotal_participants">Nombre participants Max total</label>
              <input
                placeholder="nbTotal_participants"
                type="text"
                name="nbTotal_participants"
                noValidate
                onChange={this.nbTotal_participantsChange}
              />
            </div>               
            <div className="description">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Description"
                rows="7"
                type="text"
                name="description"
                noValidate
                onChange={this.descriptionChange}
              />
              <div className="createAccount">
              <button type="submit" onClick={this.add}>Valider la course</button>
            </div>
            </div>  
          </form>
        </div>
      </div>
    </div>  
     )
     
     
     } }

const mapStateToProps = (state) => {
  return { sorties: state.sorties };
};

function mapDispatchToProps(dispatch) {
  return {
    AddSortie: (sortie) => dispatch(AddSortie(sortie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieCreation);

