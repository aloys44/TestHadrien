import React from "react";

import { connect } from "react-redux";
import { AddEvenement, GetEvenements } from "../../../actions/evenements";

import * as Datetime from 'react-datetime';
import Moment from 'moment/locale/fr';


class EvenementCreation extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    const evenement = {
      title: this.title,
      description: this.description,
      author: this.props.user?.username,
      occured_date: this.occured_date
    };

    console.log(this.title.length);
    console.log("évènement : ", evenement);
    this.props.AddEvenement(evenement);
  }

  
  changeTitle = (e) => {
        this.title = e.target.value;
                console.log("titre : " + e.target.value);
  };
                
  changeDescription = (e) =>{
        this.description = e.target.value;
          console.log("description : " + e.target.value);   
  };

      changeOccuredDate = (date) => {
    this.occured_date = date.format("YYYY-MM-DD HH:mm:ss");
  }


  render() {

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'un Evenement</h1>
            <div className="details">
              <label htmlFor="title">Titre</label>
              <input
                placeholder="Titre"
                type="title"
                name="title"
                onChange={this.changeTitle}
              />
            </div>
            <div className="details">
              <label htmlFor="description">Description</label>
              <input
                placeholder="Description"
                type="description"
                name="description"
                onChange={this.changeDescription}
              />
            </div>
            <div className="details">
              <label>Date de la course</label>
              <Datetime
              locale="fr-ca"
              name="occured_date"
              onChange={this.changeOccuredDate} />
            </div>
            <div className="createAccount">
              <button onClick={this.handleAdd}>Création d'un nouvel évènement</button>
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

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EvenementCreation);
