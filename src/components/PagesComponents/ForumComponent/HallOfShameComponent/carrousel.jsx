import React, { Component } from 'react';
import TinySlider from 'tiny-slider-react';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const imgStyles = {
  width: '100%',
  height: '500px',
  objectFit: 'cover',
};

const imgs = [
  '/img/shameCarroussel/chats.jpg',
  '/img/shameCarroussel/chats1.jpg',
  '/img/shameCarroussel/chiots.jpg',
  '/img/shameCarroussel/chiots2.jpg',
  '/img/shameCarroussel/chiots3.jpg',
];

const loadingImage =
  'data:image/gif;base64,0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

const settings = {
  lazyload: true,
  nav: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  loop: true,
  items: 1,
  autoplay: true,
  gutter: 5,
  responsive: {
    420: {
      items: 1,
    },
  },
};

const clickEvent = () => {};

class Carrousel extends Component {
  render() {
    return (
      <div style={styles}>
        <TinySlider settings={settings} onInit={clickEvent}>
          {imgs.map((el) => (
            <div key={el.id} style={{ position: 'relative' }}>
              <img
                className="tns-lazy-img"
                src={loadingImage}
                data-src={el}
                alt=""
                style={imgStyles}
              />
            </div>
          ))}
        </TinySlider>
      </div>
    );
  }
}

export default Carrousel;
