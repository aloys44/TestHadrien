import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddSortie } from "../../actions/sorties";



class SortieCreation extends React.Component {
 constructor(props) {
            super(props);    
                 
         this.state = {
      formErrors: {
        title: "",
        description: "",
      }
    };
  }

    add = () => {
    const sortie = {
      id: 7,
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      nbMaxWalk_participants: this.state.nbMaxWalk_participants,
      leaderWalk_participants: this.state.leaderWalk_participants,
      nbMaxRun_participants: this.state.nbMaxRun_participants,
      leaderRun_participants: this.state.leaderRun_participants,
      nbTotal_participants: this.state.nbTotal_participants,
     };
     console.log(sortie);
    this.props.AddSortie(sortie);
  };

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

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "title":
        formErrors.title =
          value.length < 5 ? "minimum de 5 caractères requis !" : "";
        break;
      case "description":
        if(value.length < 3){
          formErrors.description =
          value.length < 10 ? "minimum de 10 caractères requis !" : "";
        } else {
          formErrors.description =
          value.length > 50 ? "maximum de 500 caractères requis !" : "";
        }
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

 render() {    
       const { formErrors } = this.state;


     return (
     <div>
      <div className="wrapper-suggestion">
        <div className="form-wrapper">
          <h1>Création d'une course</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="title">
              <label htmlFor="title">Titre</label>
              <input
                placeholder="Titre"
                type="text"
                name="title"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="title">
              <label htmlFor="author">Auteur</label>
              <input
                placeholder="Auteur"
                type="text"
                name="author"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="details">
              <label htmlFor="nbMaxWalk_participants">Nombre participants Max Marche</label>
              <input
                placeholder="Nb Participants Max Marche"
                type="text"
                name="nbMaxWalk_participants"
                noValidate
                onChange={this.handleChange}
              />
            </div>
               <div className="details">
              <label htmlFor="leaderWalk_participants">Leader Marche Marche</label>
              <input
                placeholder="leaderWalk_participants"
                type="text"
                name="leaderWalk_participants"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="details">
              <label htmlFor="nbMaxRun_participants">Nombre participants Max Course</label>
              <input
                placeholder="nbMaxRun_participants"
                type="text"
                name="nbMaxRun_participants"
                noValidate
                onChange={this.handleChange}
              />
            </div>               
            <div className="details">
              <label htmlFor="leaderRun_participants">Leader Course</label>
              <input
                placeholder="leaderRun_participants"
                type="text"
                name="leaderRun_participants"
                noValidate
                onChange={this.handleChange}
              />
            </div>               
            <div className="details">
              <label htmlFor="nbTotal_participants">Nombre participants Max total</label>
              <input
                placeholder="nbTotal_participants"
                type="text"
                name="nbTotal_participants"
                noValidate
                onChange={this.handleChange}
              />
            </div>               
            <div className="description">
              <label htmlFor="description">Description</label>
              <textarea
                placeholder="Description"
                rows="10"
                type="text"
                name="description"
                noValidate
                onChange={this.handleChange}
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


