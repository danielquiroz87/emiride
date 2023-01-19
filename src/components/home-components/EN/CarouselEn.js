import React from 'react';
import elantraCarouesel from "../../../static/images/elantra_c.webp";
import fountainCarouesel from "../../../static/images/fountain.webp";
import museumCarouesel from "../../../static/images/museum-of-the-future.webp";
import reserveYourVehicle from "../../../static/images/reserve-your-vehicle.webp"

function CarouselEn () {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={reserveYourVehicle} className="d-block w-100" loading='lazy' alt="..."/>
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={elantraCarouesel} className="d-block w-100" loading='lazy' alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={fountainCarouesel} className="d-block w-100" loading='lazy' alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={museumCarouesel} className="d-block w-100" loading='lazy' alt="..."/>
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default CarouselEn;
