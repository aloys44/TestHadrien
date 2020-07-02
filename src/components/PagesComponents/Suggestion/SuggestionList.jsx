import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LikeButton from "./LikeComponent/LikeButton";
import { GetSuggestions } from "../../../actions/suggestions";

class SuggestionList extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSuggestions();
  }

  load = () => {
    this.props.GetSuggestions();
  };

  render() {
    console.log(this.props.suggestions);
    return (
      
          <div className="container">
            <h1><strong>Liste des Joggeurs utiles</strong></h1>
          <div className="columns is-multiline">
            {this.props.suggestions.suggestionList == null
              ? "ERROR MOTHERFUCKER"
              : this.props.suggestions.suggestionList.map(
                  (suggestion, index) => (
                    <div class="column is-full">
                      <article
                        className={
                          index % 2 == 0
                            ? "message is-link"
                            : "message is-success"
                        }
                      >
                        <div class="message-header">
                          <p>
                            {suggestion.title} 
                          </p>
                          <p>{suggestion.description}</p>
                        </div>
                        <div class="message-body">
                          {suggestion.creation_date}{" "}
                        </div>
                      </article>
                    </div>
                  )
                )}
          </div>
        </div>

    );
  }
}


const mapStateToProps = (state) => {
  return { suggestions: state.suggestions };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSuggestions: () => dispatch(GetSuggestions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
