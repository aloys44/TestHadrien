import React, { Component } from 'react';

class WhoAreWe extends Component {
  render() {
    return (
      <section>
        <div className="espace" />
        <h1 className="hr">
          <img
            src="https://img.icons8.com/cotton/64/000000/lighthouse--v5.png"
            alt="Icone d'un phare breton"
          />
        </h1>

        <div className="question">
          <h1>Vous aimez Saint-Nazaire ?</h1>
        </div>

        <div className="reponse">
          <h1>
            Ca tombe bien nous aussi <i className="fas fa-laugh-wink" />
          </h1>
        </div>

        <h1 className="hr">
          <img
            src="https://img.icons8.com/cotton/64/000000/sneakers--v3.png"
            alt="Icone d'une basket bleue"
          />
          <img
            src="https://img.icons8.com/cotton/64/000000/sneakers--v2.png"
            alt="Icone d'une basket rouge"
          />
        </h1>
        <div className="titreInferieur">
          <h3>Qui sommes Nous ?</h3>
          <p>
            Nous sommes des nazairiens soucieux de notre environnement et qui avons à
            coeur de rendre notre ville agréable pour tous !
          </p>
        </div>
      </section>
    );
  }
}

export default WhoAreWe;
