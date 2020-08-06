import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetMessages } from "../../../../actions/messages";


class MessageListe extends React.Component {
 constructor(props) {
            super(props);    

  this.props.GetMessages();             
  }

    reaction = (sortie) => {
      const id = sortie.id;
    this.props.DeleteSortie(id);
    console.log(id);

  }

  render() {
    console.log(this.props.messages);

    return (
      <article className="message is-success">
        {this.props.messages.messageList == null
          ? "Problème chargement liste message"
          : this.props.messages.messageList.map((message, index) => (
              <>
            <div className="message-body">
              
                <h1>Sujet de ce forum:{message.subject}</h1>
                <p>Description: {message.author}</p>
                <p>Le texte: {message.text}</p>
                <p>La date de création: {message.creation_date}</p>
            }
            </div>
              </>
            ))}
</article>
    );
  }
} 

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch) {
  return {
        GetMessages: () => dispatch(GetMessages())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageListe);


