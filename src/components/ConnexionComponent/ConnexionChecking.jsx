import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {  GetUsers } from "../../actions/users";



class ConnexionChecking extends Component {
  constructor(props) {
    super(props);    
  }
  load = () => {
    this.props.GetUsers();
  };

    render() {

    return (
      <div>
        <p>Hello</p>
      </div>
    )};
}

export default ConnexionChecking;