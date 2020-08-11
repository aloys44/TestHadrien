import React from 'react';
import { connect } from 'react-redux';
import { GetSuggestions, ReactOnSuggestion } from '../../../actions/suggestions';
import LikeButton from './LikeComponent/LikeButton';

class SuggestionList extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSuggestions();
  }

  reaction = (suggestion, isLiked) => {
    this.props.ReactOnSuggestion(suggestion, isLiked, this.props.user?.authToken);
  };

  mouseOver() {
    this.props.GetLikeList();
  }

  mouseOut() {
    this.props.GetLikeList();
  }

  render() {
    return (
      <div className="container">
        <h1>
          <strong>Liste des Suggestions</strong>
        </h1>
        <div className="columns is-multiline">
          {this.props.suggestions.suggestionList == null
            ? 'Problème chargement liste suggestions'
            : this.props.suggestions.suggestionList.map((suggestion) => (
                <>
                  <div className="column is-full">
                    <article>
                      <div className="message-header">
                        <p>{suggestion.title}</p>
                        <p>{suggestion.description}</p>
                      </div>
                      <div className="message-body">{suggestion.creation_date} </div>
                      <LikeButton
                        is_like
                        nbr={suggestion.likes}
                        suggestion={suggestion}
                        fallback={this.reaction}
                        onMouseEnter={this.mouseOver}
                        onMouseLeave={this.mouseOut}
                      />
                      <LikeButton
                        is_like={false}
                        nbr={suggestion.dislikes}
                        suggestion={suggestion}
                        fallback={this.reaction}
                      />
                    </article>
                  </div>
                </>
              ))}
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
    ReactOnSuggestion: (suggestion, isLiked, authToken) =>
      dispatch(ReactOnSuggestion(suggestion, isLiked, authToken)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
