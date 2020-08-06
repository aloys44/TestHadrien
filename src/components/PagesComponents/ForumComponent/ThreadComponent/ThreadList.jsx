import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetThreads } from "../../../../actions/threads";
import { GetMessages } from "../../../../actions/messages";


import MessageCreation from "../MessageComponent/MessageCreation";
import MessageListe from "../MessageComponent/MessageListe";



class ThreadList extends React.Component {
 constructor(props) {
            super(props);    

  this.props.GetThreads();             
  }


  render() {
    console.log(this.props.threads);
    return (
      <article className="message is-success">
        {this.props.threads.threadList == null
          ? "Problème chargement liste threads"
          : this.props.threads.threadList.map((thread, index) => (
              <>
            <div className="message-body">
                <h1>Sujet de ce forum:{thread.subject}</h1>
                <p>Description: {thread.author}</p>
                <button >Ecrire dans ce forum</button>
                <MessageListe thread={thread}/>
            </div>
              </>
            ))}

            
</article>
    );
  }
} 

const mapStateToProps = (state) => {
  return { threads: state.threads };
};

function mapDispatchToProps(dispatch) {
  return {
        GetThreads: () => dispatch(GetThreads())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadList);


