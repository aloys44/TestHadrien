import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CloseModal } from '../../../actions/modal';

class Modal extends Component {
  onClick = () => {
    this.props.CloseModal();
  };

  render() {
    return (
      <div className={this.props.modal.isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.modal.title}</p>
            <button
              type="button"
              onClick={this.onClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">{this.props.modal.description}</section>
          <footer className="modal-card-foot">
            <button type="button" className="button is-success" onClick={this.onClick}>
              Fermer ce message
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

function mapDispatchToProps(dispatch) {
  return {
    CloseModal: () => dispatch(CloseModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
