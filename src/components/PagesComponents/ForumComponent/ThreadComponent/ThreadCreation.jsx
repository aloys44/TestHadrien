import React from "react";

import { connect } from "react-redux";
import { AddMessage, GetMessages } from "../../../../actions/messages";
import { AddThread } from "../../../../actions/threads";


import * as Datetime from 'react-datetime';
import Moment from 'moment/locale/fr';


class ThreadCreation extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    const thread = {
      subject: this.subject,
      text: this.text,
      author: this.props.user?.username,
    };

    console.log("thread : ", thread);
    this.props.AddThread(thread);
  }

    changeSubject = (e) =>{
        this.subject = e.target.value;
          console.log("subject : " + e.target.value);   
  };


  changeText = (e) =>{
        this.text = e.target.value;
          console.log("text : " + e.target.value);   
  };




  render() {

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'un message</h1>
            <div className="details">
              <label htmlFor="title">Votre sujet</label>
              <input
                placeholder="Le sujet de votre message"
                type="subject"
                name="subject"
                onChange={this.changeSubject}
              />
             <label htmlFor="title">Votre texte</label>
              <input
                placeholder="Votre message"
                type="message"
                name="message"
                onChange={this.changeText}
              />
            </div>
            <div className="createAccount">
              <button onClick={this.handleAdd}>Création de votre sujet</button>
            </div>
        </div>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return { threads: state.threads, user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddThread: (thread) => dispatch(AddThread(thread)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadCreation);
