import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LikeButton from "./LikeComponent/LikeButton"
import { GetSuggestionsSorted, LikeSuggestion } from "../../actions/suggestions";


class SuggestionsSortByLike extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSuggestionsSorted();
  }

  load = () => {
    this.props.GetSuggestionsSorted();
  };

  like = (suggestion) => {
    const suggestionLike = {
      title: suggestion.title,
      description: suggestion.description,
      is_liked: 1
    }
    
    this.props.LikeSuggestion(suggestionLike);
  }

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
                <LikeButton likes={suggestion.like_count} suggestion={suggestion} fallback={this.like} />
            </div>
              </>
            ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state : ", state);
  return { suggestions: state.suggestions };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSuggestionsSorted: () => dispatch(GetSuggestionsSorted()),
    LikeSuggestion: (suggestion) => dispatch(LikeSuggestion(suggestion)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsSortByLike);
