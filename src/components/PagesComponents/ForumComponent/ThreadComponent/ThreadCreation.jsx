import React from 'react';
import { connect } from 'react-redux';
import { AddThread, GetThreads } from '../../../../actions/threads';

class ThreadCreation extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetThreads();
  }

  handleAdd = () => {
    const thread = {
      subject: this.subject,
      text: this.text,
      author: this.props.user?.username,
    };

    this.props.AddThread(thread);
  };

  changeSubject = (e) => {
    this.subject = e.target.value;
  };

  changeText = (e) => {
    this.text = e.target.value;
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Création d'un message</h1>
          <div className="details">
            <label htmlFor="title">
              Votre sujet
              <input
                placeholder="Le sujet de votre message"
                type="subject"
                name="subject"
                onChange={this.changeSubject}
              />
            </label>
            <label htmlFor="title">
              Votre texte
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
              Création de votre sujet
            </button>
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
    GetThreads: () => dispatch(GetThreads()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadCreation);
