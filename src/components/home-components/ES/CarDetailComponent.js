import React from 'react';

function CarComponent({ img_src, alt_img, logo_src, price, price_msg, marca, linea, modelo, char_img, link }) {
  return (
    <div className="car-component">
      <img className="car-image" src={img_src} alt={alt_img} />
      <div className="car-details">
        <div className="car-brand">
          <img className="car-logo" src={logo_src} alt={marca} />
          <span className="car-model">{linea}</span>
        </div>
        <div className="car-info">
          <div className="car-price">
            <span className="price-msg">{price_msg}</span>
            <span className="price">{price}</span>
          </div>
          <div className="car-model-info">
            <span className="marca">{marca}</span>
            <span className="linea">{linea}</span>
            <span className="modelo">{modelo}</span>
          </div>
          <img className="car-character" src={char_img} alt="Character" />
          <a className="car-link" href={link} target="_blank" rel="noopener noreferrer">
            Rent Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarComponent;
    