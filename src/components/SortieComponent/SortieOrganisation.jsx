import React from 'react';
import { connect } from 'react-redux';
import { GetNextSortie, ReactOnSortie } from '../../actions/sorties';
import {
  promoteRank1,
  promoteRank2,
  promoteRank3,
  promoteRank4,
} from '../../actions/users';
import LikeButton from './LikeComponent/LikeButton';

class SortieOrganisation extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetNextSortie();

    this.state = {
      is_subscribed: 0,
    };
  }

  reaction = (sortie) => {
    this.setState((prevState) => ({ is_subscribed: prevState.is_subscribed }));
    this.props.ReactOnSortie(sortie, this.props.user?.authToken);
    this.props.promoteRank1(this.props.user?.authToken);
    this.props.promoteRank2(this.props.user?.authToken);
    this.props.promoteRank3(this.props.user?.authToken);
    this.props.promoteRank4(this.props.user?.authToken);
  };

  render() {
    return (
      <article className="message is-success">
        {this.props.sorties.nextSortie == null ? (
          'Problème chargement prochaine sortie'
        ) : (
          <>
            <div className="message-body">
              <h1>{this.props.sorties.nextSortie.title}</h1>
              <p>Description: {this.props.sorties.nextSortie.description}</p>
              <p>
                Nombre Maximum de coureurs:{' '}
                {this.props.sorties.nextSortie.nbMaxRun_participants} Nombre Maximum de
                marcheurs: {this.props.sorties.nextSortie.nbMaxWalk_participants}
              </p>
              <p>Date de la course: {this.props.sorties.nextSortie.running_date}</p>
              <p>
                Nombre d'inscrits: {this.props.sorties.nextSortie.participants.length}
              </p>
              <p>
                Liste des inscrits:{' '}
                {this.props.sorties.nextSortie.participants == null
                  ? 'Aucun inscrits'
                  : this.props.sorties.nextSortie.participants.map((participant) => (
                      <>{`${participant.username} `}</>
                    ))}
              </p>
              <LikeButton
                is_suscribed={this.state.is_subscribed}
                sortie={this.props.sorties.nextSortie}
                fallback={this.reaction}
              />
            </div>
          </>
        )}
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { sorties: state.sorties, user: state.users?.user };
};

function mapDispatchToProps(dispatch) {
  return {
    GetNextSortie: () => dispatch(GetNextSortie()),
    ReactOnSortie: (sortie, authToken) => dispatch(ReactOnSortie(sortie, authToken)),
    promoteRank1: (authToken) => dispatch(promoteRank1(authToken)),
    promoteRank2: (authToken) => dispatch(promoteRank2(authToken)),
    promoteRank3: (authToken) => dispatch(promoteRank3(authToken)),
    promoteRank4: (authToken) => dispatch(promoteRank4(authToken)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieOrganisation);
