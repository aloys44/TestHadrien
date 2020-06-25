import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GetSorties } from "../../actions/sorties";



class SortieList extends React.Component {
 constructor(props) {
            super(props);    

  this.props.GetSorties();

                 
  }
  title = "";
  description = "";  
  author = "";
  nbMaxWalk_participants = "";  
  leaderWalk_participants = "";
  nbMaxRun_participants = "";
  leaderRun_participants = "";
  nbTotal_participants = "";





  render() {
    console.log(this.props.sorties);
    return (
      <div className="wrapper-suggestion-listUser">
        {this.props.sorties.sortieList == null
          ? "ERROR MOTHERFUCKER"
          : this.props.sorties.sortieList.map((sortie, index) => (
              <>
            <div className="form-wrapper">
                <h1>{sortie.title}</h1>
                <p>prénom: {sortie.description}</p>
            </div>
              </>
            ))}
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return { sorties: state.sorties };
};

function mapDispatchToProps(dispatch) {
  return {
        GetSorties: () => dispatch(GetSorties())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortieList);


