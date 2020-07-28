import React from "react";
import { connect } from "react-redux";

import { AddSortie } from "../../actions/sorties";

import * as Datetime from 'react-datetime';
import Moment from 'moment/locale/fr';


class SortieCreation extends React.Component {
 constructor(props) {
            super(props);    
                 
  }
  title = "";
  description = "";  
  author = "";
  nbMaxWalk_participants = "";  
  nbMaxRun_participants = "";
  nbTotal_participants = "";

    handleAdd = () => {
    const sortie = {
      title: this.title,
      description: this.description,
      author: this.author,
      nbMaxWalk_participants: this.nbMaxWalk_participants,
      nbMaxRun_participants: this.nbMaxRun_participants,
      running_date:this.running_date,
     };
     console.log(sortie);
    this.props.AddSortie(sortie);
  };

  changeTitle = (e) => {
  console.log("title : " + e.target.value);
  this.title = e.target.value;
  }
  changeDescription= (e) => {
     console.log("description : " + e.target.value);
    this.description = e.target.value;
  }
  changeAuthor= (e) => {
    console.log("auteur : " + e.target.value);
    this.author = e.target.value;
  }
  changeNbMaxWalk= (e) => {
     console.log("nbMaxWalk : " + e.target.value);
    this.nbMaxWalk_participants = e.target.value;
  }

  changeNbMaxRun= (e) => {
    console.log("nbMaxRun : " + e.target.value);
    this.nbMaxRun_participants = e.target.value;
  }

    changeRunning_date = (date) => {
    console.log("date de la course : " + date.format("YYYY-MM-DD HH:mm:ss"));
    this.running_date = date.format("YYYY-MM-DD HH:mm:ss");
  }



handleSubmit = e => {
      console.log(`
        --SUBMITTING--
        Title: ${this.state.title}
        Description: ${this.state.description}
        Author: ${this.state.author}
        nbMaxWalk_participants: ${this.state.nbMaxWalk_participants}
        nbMaxRun_participants: ${this.state.nbMaxRun_participants}
        running_date: ${this.state.running_date}

      `);
    
  };

 render() {    


     return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création du profil</h1>
            <div className="title">
              <label>Titre de l'évènement</label>
              <input
                type="text"
                placeholder="Le titre de la course"
                name="title"
                onChange={this.changeTitle}
              />
            </div>
            <div className="description">
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                name="description"
                onChange={this.changeDescription}
              />
            </div>
            <div className="description">
              <label>Author</label>
              <input
                type="text"
                placeholder="author"
                name="author"
                onChange={this.changeAuthor}
              />
            </div>
            <div className="nbMaxWalk_participants">
              <label>Nombre Max Participants marche</label>
              <input
                type="number"
                placeholder="Nombre Max Participants"
                name="nbMaxWalk_participants"
                onChange={this.changeNbMaxWalk}
              />
            </div>
            <div className="nbMaxRun_participants">
              <label>Nombre Max Participants course</label>
              <input
                type="number"
                placeholder="Nombre Max Participants"
                name="nbMaxRun_participants"
                onChange={this.changeNbMaxRun}
              />
            </div>
            <div className="running_date">
              <label>Date de la course</label>
              <Datetime
              locale="fr-ca"
              name="running_date"
              onChange={this.changeRunning_date} />
            </div>
            <div className="createAccount">
              <button  onClick={this.handleAdd}>Créer une nouvelle course !</button>
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


