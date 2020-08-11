import React from 'react';
import { connect } from 'react-redux';
import { DeleteSortie, GetSorties } from '../../actions/sorties';
import LikeButton from './LikeComponent/LikeButton';

class SortieList extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSorties();
  }

  reaction = (sortie) => {
    const { id } = sortie;
    this.props.DeleteSortie(id);
  };

  render() {
    return (
      <article className="message is-success">
        {this.props.sorties.sortieList == null
          ? 'Problème chargement liste sorties'
          : this.props.sorties.sortieList.map((sortie) => (
              <>
                <div className="message-body">
                  <h1>{sortie.title}</h1>
                  <p>
                    Description:
                    {sortie.description}
                  </p>
                  <LikeButton sortie={sortie} fallback={this.reaction} />
                </div>
              </>
            ))}
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return { sorties: state.sorties };
};

function mapDispatchToProps(dispatch) {
  return {
    GetSorties: () => dispatch(GetSorties()),
    DeleteSortie: (id) => dispatch(DeleteSortie(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieList);
