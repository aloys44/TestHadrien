import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OpenModal } from '../../../actions/modal';

class Description extends Component {
  openModal = () => {
    this.props.OpenModal();
  };

  render() {
    return (
      <section>
        <div className="titreInferieur">
          <h3>L'activité de l'association</h3>
          <p>
            Notre association a pour but de, lors de nos activités de plogging, rendre
            notre ville plus belle et agréable ! Nous nous réunissons, une fois par mois
            pour, pour ramasser les déchets peu esthétique, qui trainent dans les rues.
          </p>
          <button type="button" onClick={this.openModal}>
            MODAL !!!
          </button>
          <div className="prerequis">
            <h3>Prerequis :</h3>

            <p>
              Pour participer à nos courses rien de plus simple. Il vous suffit de
              simplement ramener un sac et des gants afin de pouvoir ramasser les déchets
              que nous trouverons en chemin.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

function mapDispatchToProps(dispatch) {
  return {
    OpenModal: () => dispatch(OpenModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
