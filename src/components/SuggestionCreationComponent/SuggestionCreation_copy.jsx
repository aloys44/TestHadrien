import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddSuggestion, GetSuggestions } from "../../actions/suggestions";

class SuggestionCreation extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSuggestions();
  }

  add = () => {
    const suggestion = {
      id: 0,
      title: "titre 2",
      description: "Description 2",
      like_count: "2",
      author: "Alois",
    };

    this.props.AddSuggestion(suggestion);
  };

  load = () => {
    this.props.GetSuggestions();
  };

  render() {
    console.log(this.props.suggestions);
    return (
      <div>
        <button onClick={this.add}>ADD SUGGESTION</button>
        <button onClick={this.load}>LOAD SUGGESTION</button>
        {this.props.suggestions.suggestionList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.suggestions.suggestionList.map((suggestion, index) => (
              <>
                <h3>{suggestion.title}</h3>
                <p>{suggestion.description}</p>
                <p>{suggestion.like_count}</p>
              </>
            ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { suggestions: state.suggestions };
};

function mapDispatchToProps(dispatch) {
  return {
    AddSuggestion: (suggestion) => dispatch(AddSuggestion(suggestion)),
    GetSuggestions: () => dispatch(GetSuggestions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionCreation);
