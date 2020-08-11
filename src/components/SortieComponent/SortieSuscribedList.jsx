import React from 'react';
import { connect } from 'react-redux';
import { GetSorties } from '../../actions/sorties';

class SortieSuscribedList extends React.Component {
  constructor(props) {
    super(props);

    this.props.GetSorties();
  }

  render() {
    return (
      <article className="message is-success">
        {this.props.sorties.sortieList == null
          ? 'Problème chargement liste sorties'
          : this.props.sorties.sortieList.map((sortie) => (
              <>
                <div className="message-body">
                  <h1>{sortie.title}</h1>
                  <p>Description: {sortie.description}</p>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieSuscribedList);
