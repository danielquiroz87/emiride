import React from 'react';
import elantraCarouesel from "../../../static/images/elantra_c.webp";
import fountainCarouesel from "../../../static/images/fountain.webp";
import museumCarouesel from "../../../static/images/museum-of-the-future.webp";
import reserveYourVehicle from "../../../static/images/reserve-your-vehicle.webp"

import FormComponent from '../../FormComponent';

function CarouselEn () {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={reserveYourVehicle} className="d-block w-100"  alt="..."/>
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={elantraCarouesel} className="d-block w-100"  alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={fountainCarouesel} className="d-block w-100"  alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={museumCarouesel} className="d-block w-100"  alt="..."/>
        </div>
      </div>
      
      {/* <div className="carousel-caption d-none d-md-block">
        <FormComponent/>
      </div> */}

    </div>
  );
};

export default CarouselEn;
