import React, { Component } from 'react';

class WhoAreWe extends Component {

  render() {
    return (
        <section>
        <h1 className="hr"><img src="https://img.icons8.com/cotton/64/000000/lighthouse--v5.png"/></h1>
                <div className="question">
                    <h1>Vous aimez Saint-Nazaire ?</h1>
                </div>

                <div className="reponse">
                    <h1>Ca tombe bien nous aussi <i className="fas fa-laugh-wink"></i></h1>
                </div>

        <h1 className="hr">                <img src="https://img.icons8.com/cotton/64/000000/sneakers--v3.png"/><img src="https://img.icons8.com/cotton/64/000000/sneakers--v2.png"/></h1>
                <div className="titreInferieur">
                    <h3>Qui sommes Nous ?</h3>
                    <p>Nous sommes souvent des nazairiens mais pas seulement, jeunes comme agés, homme comme femme</p>
                </div>
        </section>
    );
  }
}

export default WhoAreWe;