import React from "react";

import { connect } from "react-redux";
import { AddMessage, GetMessages } from "../../../../actions/messages";

import * as Datetime from 'react-datetime';
import Moment from 'moment/locale/fr';


class MessageCreation extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd = () => {
    const message = {
      subject: this.props.thread.subject,
      thread: this.props.thread.id,
      text: this.text,
      author: this.props.user?.username,
    };

    console.log("message : ", message);
    this.props.AddMessage(message);
  }

  

  changeText = (e) =>{
        this.text = e.target.value;
          console.log("text : " + e.target.value);   
  };




  render() {

    return (
      <div>
        <div>
          <h1>Création d'un message</h1>
            <div className="details">
              <label htmlFor="title">Votre message</label>
              <input
                placeholder="Votre message"
                type="message"
                name="message"
                onChange={this.changeText}
              />
            </div>
            <div className="createAccount">
              <button onClick={this.handleAdd}>Création de votre message</button>
            </div>
        </div>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return { messages: state.messages, user: state.users.user };
};

function mapDispatchToProps(dispatch) {
  return {
    AddMessage: (message) => dispatch(AddMessage(message)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageCreation);
