import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LikeButton from "./LikeComponent/LikeButton"
import { GetSuggestions } from "../../actions/suggestions";


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
      <div className="wrapper-suggestion">
        {this.props.suggestions.suggestionList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.suggestions.suggestionList.map((suggestion, index) => (
              <>
            <div className="form-wrapper">
                <h3>{suggestion.title}</h3>
                <p>{suggestion.description}</p>
                <p>{suggestion.like_count}</p>
                <LikeButton likes={suggestion.like_count} />
            </div>
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
    GetSuggestions: () => dispatch(GetSuggestions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
