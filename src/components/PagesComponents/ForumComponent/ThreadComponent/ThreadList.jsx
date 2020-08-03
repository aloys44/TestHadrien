import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetThreads } from "../../../../actions/threads";

import MessageCreation from "../MessageComponent/MessageCreation";


class ThreadList extends React.Component {
 constructor(props) {
            super(props);    

  this.props.GetThreads();             
  }

    reaction = (sortie) => {
      const id = sortie.id;
    this.props.DeleteSortie(id);
    console.log(id);

  }

  render() {
    console.log(this.props.threads);
    return (
      <article className="message is-success">
        {this.props.threads.threadList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.threads.threadList.map((thread, index) => (
              <>
            <div className="message-body">
                <h1>{thread.title}</h1>
                <p>Description: {thread.description}</p>
                <MessageCreation thread={thread} fallback={this.reaction}/>

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


