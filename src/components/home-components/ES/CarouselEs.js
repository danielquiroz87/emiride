import React,{} from 'react';


import FormComponent from './FormComponent';

function CarouselEn (props) {



  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img fetchpriority="high" src={props.c1} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1350" height="760" alt="..."/>
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img fetchpriority="low" src={props.c2} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1350" height="760" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img fetchpriority="low" src={props.c3} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1350" height="760" alt="..."/>
        </div>
        <div className="carousel-item">
          <img fetchpriority="low" src={props.c4} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1350" height="760" alt="..."/>
        </div>
      </div>

      <div className="carousel-caption hide-on-tablet hide-on-mobile">
        <FormComponent/>
      </div>

    </div>
  );
};

export default CarouselEn;
