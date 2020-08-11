import React from 'react';
import { connect } from 'react-redux';
import { GetNotSeenListEvenement, ReactOnEvenement } from '../../../actions/evenements';
import LikeButton from './LikeComponent/LikeButton';

class NextEvenement extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetNotSeenListEvenement(this.props.user?.authToken);
  }

  reaction = (evenement) => {
    this.props.ReactOnEvenement(evenement, this.props.user?.authToken);
  };

  render() {
    return (
      <div className="container">
        <h1>
          <strong>Liste des Evenements</strong>
        </h1>
        <div className="columns is-multiline">
          {this.props.evenements.evenementList == null
            ? 'Pas de nouveaux évènements !'
            : this.props.evenements.evenementList.map((evenement) => (
                <>
                  <div className="column is-full">
                    <article>
                      <div className="message-header">
                        <p>{evenement.title}</p>
                        <p>{evenement.description}</p>
                      </div>
                      <div className="message-body">{evenement.creation_date} </div>
                    </article>
                    <LikeButton evenement={evenement} fallback={this.reaction} />
                  </div>
                </>
              ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { evenements: state.evenements, user: state.users?.user };
};

function mapDispatchToProps(dispatch) {
  return {
    GetNotSeenListEvenement: (authToken) => dispatch(GetNotSeenListEvenement(authToken)),
    ReactOnEvenement: (evenement, authToken) =>
      dispatch(ReactOnEvenement(evenement, authToken)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NextEvenement);
