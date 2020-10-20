import React, { Component } from 'react';
import Carrousel from './carrousel';

class HallOfShame extends Component {
  render() {
    return (
      <div>
        <center>
          <img
            src="https://img.icons8.com/bubbles/150/000000/day-of-the-dead.png"
            alt="Icone pont"
          />
        </center>
        <p>
          Nous n'avons pas encore de photos à vous montrer, on a donc préférez mettre des
          photos de chats et de chiens en attendant ...
        </p>
        <div className="espace_2" />
        <center>
          <Carrousel />
        </center>
      </div>
    );
  }
}

export default HallOfShame;
