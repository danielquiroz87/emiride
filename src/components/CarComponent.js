import React from 'react';


function CarComponent ({img_src,alt_img, logo_src,alt_logo,price,marca,linea,modelo,price_msg,char_img}) {
  
  return (
    <div className='card my-2 car-card'>
      <div className='container'>
        
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <img
              className='logo-img' 
              src={logo_src} 
              alt={alt_img} />
            </div>
          </div>

          <div className='col d-flex justify-content-end'>
            <b className=''>{modelo}</b>
          </div>
        </div>

        <div className='row'>
          <div className='container d-flex justify-content-center align-items-center'>
            <img
              className='car-image' 
              src={img_src} 
              alt={alt_img} />
          </div>
        </div>
        
        <div className='card-body'>
          <div className="line-separator"></div>
            <p className=''>{price_msg} <b>AED {price}</b></p>
          <div className='text-model-container hide-on-mobile'>
            <p className='text-model'>{marca} {linea}</p>
          </div>
          <div className='text-model-container hide-on-desktop'>
            <p className='text-model'>{marca} <br/> {linea}</p>
          </div>
          <div className='container d-flex justify-content-center align-items-center mb-3'>
            <img
            className='car-charact-img'
            src={char_img}
            />
          </div>
          <div className='container d-flex align-items-center justify-content-center'>
            <button className="btn rounded-right-corners bg-black text-white">Button</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CarComponent;
