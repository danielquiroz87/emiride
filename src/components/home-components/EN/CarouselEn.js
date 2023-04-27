import React, { useEffect } from 'react';
import FormComponent from './FormComponent';

function CarouselEn(props) {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 2500,
      wrap: true,
    });
    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-pause="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img fetchpriority="high" src={props.c1} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1920" height="1080" alt="..."/>
        </div>
        <div className="carousel-item">
          <img fetchpriority="low" src={props.c2} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1920" height="1080" alt="..."/>
        </div>
        <div className="carousel-item">
          <img fetchpriority="low" src={props.c3} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1920" height="1080" alt="..."/>
        </div>
        <div className="carousel-item">
          <img fetchpriority="low" src={props.c4} className="d-flex w-100 h-100" style={{objectFit:"scale-up "}}  width= "1920" height="1080" alt="..."/>
        </div>
      </div>

      <div className="carousel-caption hide-on-tablet hide-on-mobile">
        <FormComponent/>
      </div>

    </div>
  );
};

export default CarouselEn;
