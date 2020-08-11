import React from 'react';
import * as Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { AddEvenement, GetEvenements } from '../../../actions/evenements';

class EvenementCreation extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetEvenements();
  }

  handleAdd = () => {
    const evenement = {
      title: this.title,
      description: this.description,
      author: this.props.user?.username,
      occured_date: this.occured_date,
    };

    this.props.AddEvenement(evenement);
  };

  changeTitle = (e) => {
    this.title = e.target.value;
  };

  changeDescription = (e) => {
    this.description = e.target.value;
  };

  changeOccuredDate = (date) => {
    this.occured_date = date.format('YYYY-MM-DD HH:mm:ss');
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'un Evenement</h1>
          <div className="details">
            <label htmlFor="title">
              Titre
              <input
                placeholder="Titre"
                type="title"
                name="title"
                onChange={this.changeTitle}
              />
            </label>
          </div>
          <div className="details">
            <label htmlFor="description">
              Description
              <input
                placeholder="Description"
                type="description"
                name="description"
                onChange={this.changeDescription}
              />
            </label>
          </div>
          <div className="details">
            <span>
              Date de la course
              <Datetime
                locale="fr-ca"
                name="occured_date"
                onChange={this.changeOccuredDate}
              />
            </span>
          </div>
          <div className="createAccount">
            <button onClick={this.handleAdd} type="button">
              Création d'un nouvel évènement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { evenements: state.evenements, user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddEvenement: (evenement) => dispatch(AddEvenement(evenement)),
    GetEvenements: () => dispatch(GetEvenements()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EvenementCreation);
