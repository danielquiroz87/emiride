import React from 'react';

function CarItemImgComponent ({ img_src, alt_img, logo_src, price,price_week,price_month,price_offer,price_month_offer, price_week_offer,  price_msg, marca, linea, modelo, char_img, link,description,
  EngineSize,Bluetooth,CruiseControl,AUX,USB,FiveSeater,SevenSeater,smallLuggage,bigLuggage,Navigation,ReverseCamera,ParkingSensor,appleCarPlay,TintedWindows,sunRoof,title,categoria,id
 }) {
   
  return (
  <div className="card">
    <img src={`https://app2.movlife.co/static/images/${img_src}`} className="card-img-top" alt="Imagen 1" width={260}  />
    <a href={`/cars-for-category/${categoria}`}>
      <div className="card-body">
       <center><span className='item-img-carrousel'>{categoria}</span></center> 
      </div>
    </a>
  </div>
    );
  };

  export default CarItemImgComponent;