import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LikeButton from "./LikeComponent/LikeButton";
import { GetSuggestions, ReactOnSuggestion } from "../../../actions/suggestions";

class SuggestionList extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSuggestions();
  }

  load = () => {
    this.props.GetSuggestions();
  };

  reaction = (suggestion, is_liked) => {
    this.props.ReactOnSuggestion(suggestion, is_liked, this.props.user?.auth_token);
  }

  render() {
    console.log(this.props.suggestions);
    return (
      
          <div className="container">
            <h1><strong>Liste des Suggestions</strong></h1>
          <div className="columns is-multiline">
            {this.props.suggestions.suggestionList == null
              ? "ERROR MOTHERFUCKER"
              : this.props.suggestions.suggestionList.map(
                  (suggestion, index) => (
                    <div className="column is-full">
                      <article>
                        <div className="message-header">
                          <p>
                            {suggestion.title} 
                          </p>
                          <p>{suggestion.description}</p>
                        </div>
                        <div className="message-body">
                          {suggestion.creation_date}{" "}
                        </div>
                        <LikeButton is_like={true} nbr={suggestion.likes} suggestion={suggestion} fallback={this.reaction} />
                        <LikeButton is_like={false} nbr={suggestion.dislikes} suggestion={suggestion} fallback={this.reaction} />
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
  return { suggestions: state.suggestions, user: state.users?.user };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSuggestions: () => dispatch(GetSuggestions()),
    ReactOnSuggestion: (suggestion, is_liked, auth_token) => dispatch(ReactOnSuggestion(suggestion, is_liked, auth_token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
