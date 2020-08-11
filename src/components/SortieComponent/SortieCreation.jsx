import React from 'react';
import * as Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { AddSortie } from '../../actions/sorties';

class SortieCreation extends React.Component {
  title = '';

  description = '';

  author = '';

  nbMaxWalkParticipants = '';

  nbMaxRunParticipants = '';

  nbTotalParticipants = '';

  handleAdd = () => {
    const sortie = {
      title: this.title,
      description: this.description,
      author: this.author,
      nbMaxWalkParticipants: this.nbMaxWalkParticipants,
      nbMaxRunParticipants: this.nbMaxRunParticipants,
      running_date: this.running_date,
    };
    this.props.AddSortie(sortie);
  };

  changeTitle = (e) => {
    this.title = e.target.value;
  };

  changeDescription = (e) => {
    this.description = e.target.value;
  };

  changeAuthor = (e) => {
    this.author = e.target.value;
  };

  changeNbMaxWalk = (e) => {
    this.nbMaxWalkParticipants = e.target.value;
  };

  changeNbMaxRun = (e) => {
    this.nbMaxRunParticipants = e.target.value;
  };

  changeRunningDate = (date) => {
    this.running_date = date.format('YYYY-MM-DD HH:mm:ss');
  };

  handleSubmit = () => {};

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création du profil</h1>
          <div className="title">
            <label htmlFor="title">
              Titre de l'évènement
              <input
                name="title"
                id="title"
                type="text"
                placeholder="Le titre de la course"
                onChange={this.changeTitle}
              />
            </label>
          </div>
          <div className="description">
            <label htmlFor="description">
              Description
              <input
                name="description"
                id="description"
                type="text"
                placeholder="Description"
                onChange={this.changeDescription}
              />
            </label>
          </div>
          <div className="description">
            <label htmlFor="author">
              Author
              <input
                name="author"
                id="author"
                type="text"
                placeholder="author"
                onChange={this.changeAuthor}
              />
            </label>
          </div>
          <div className="nbMaxWalkParticipants">
            <label htmlFor="nbMaxWalkParticipants">
              Nombre Max Participants marche
              <input
                name="nbMaxWalkParticipants"
                id="nbMaxWalkParticipants"
                type="number"
                placeholder="Nombre Max Participants"
                onChange={this.changeNbMaxWalk}
              />
            </label>
          </div>
          <div className="nbMaxRunParticipants">
            <label htmlFor="nbMaxRunParticipants">
              Nombre Max Participants course
              <input
                name="nbMaxRunParticipants"
                id="nbMaxRunParticipants"
                type="number"
                placeholder="Nombre Max Participants"
                onChange={this.changeNbMaxRun}
              />
            </label>
          </div>
          <div className="running_date">
            <span>
              Date de la course
              <Datetime
                name="running_date"
                id="running_date"
                locale="fr-ca"
                onChange={this.changeRunningDate}
              />
            </span>
          </div>
          <div className="createAccount">
            <button type="button" onClick={this.handleAdd}>
              Créer une nouvelle course !
            </button>
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
    AddSortie: (sortie) => dispatch(AddSortie(sortie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieCreation);
