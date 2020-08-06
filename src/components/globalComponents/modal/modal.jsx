import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CloseModal } from "../../../actions/modal";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class Modal extends Component {
   constructor(props) {
            super(props);    
  }

    onClick = () => {
      this.props.CloseModal();  
    }

  render() {
    return (
        <div class={this.props.modal.isOpen ? "modal is-active" : "modal"}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{this.props.modal.title}</p>
              <button onClick={this.onClick} class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
            {this.props.modal.description}
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" onClick={this.onClick}>Fermer ce message</button>
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



