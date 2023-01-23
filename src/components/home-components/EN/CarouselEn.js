import React,{useEffect} from 'react';
import elantraCarouesel from "../../../static/images/elantra_c.webp";
import fountainCarouesel from "../../../static/images/fountain.webp";
import museumCarouesel from "../../../static/images/museum-of-the-future.webp";
import reserveYourVehicle from "../../../static/images/reserve-your-vehicle.webp"

import FormComponent from '../../FormComponent';

function CarouselEn () {
  
  useEffect(() => {
    // create a new Image object
    const img = new Image();
    // set the src property to the URL of the image you want to preload
    img.src = reserveYourVehicle;
    // add the Image object to the DOM
    document.getElementsByTagName("head")[0].appendChild(img);
  }, []);

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img fetchpriority="high" src={reserveYourVehicle} className="d-block w-100"  alt="..."/>
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img fetchpriority="low" src={elantraCarouesel} className="d-block w-100"  alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img fetchpriority="low" src={fountainCarouesel} className="d-block w-100"  alt="..."/>
        </div>
        <div className="carousel-item">
          <img fetchpriority="low" src={museumCarouesel} className="d-block w-100"  alt="..."/>
        </div>
      </div>
      
      <div className="carousel-caption hide-on-tablet hide-on-mobile">
        <FormComponent/>
      </div>

    </div>
  );
};

export default CarouselEn;
