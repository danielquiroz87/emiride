import React from 'react';


function CarComponent ({img_src,alt_img, logo_src,alt_logo,price,marca,linea,modelo,price_msg,char_img}) {
  return (
    <div className='card my-2'>
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
          <div className='text-model'>
            <h4 className='text-with-line'>{marca} {linea}</h4>
          </div>
          <div className='container mb-3'>
            <img
            className='car-image'
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
