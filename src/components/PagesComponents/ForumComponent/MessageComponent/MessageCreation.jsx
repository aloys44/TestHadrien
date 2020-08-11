import React from 'react';
import { connect } from 'react-redux';
import { AddMessage } from '../../../../actions/messages';

class MessageCreation extends React.Component {
  handleAdd = () => {
    const message = {
      subject: this.props.thread.subject,
      thread: this.props.thread.id,
      text: this.text,
      author: this.props.user?.username,
    };

    this.props.AddMessage(message);
  };

  changeText = (e) => {
    this.text = e.target.value;
  };

  render() {
    return (
      <div>
        <div>
          <h1>Création d'un message</h1>
          <div className="details">
            <label htmlFor="title">
              Votre message
              <input
                placeholder="Votre message"
                type="message"
                name="message"
                onChange={this.changeText}
              />
            </label>
          </div>
          <div className="createAccount">
            <button type="button" onClick={this.handleAdd}>
              Création de votre message
            </button>
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
