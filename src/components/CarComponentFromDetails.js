import React from 'react';

function CarComponent ({img_src,alt_img, logo_src,alt_logo,price,marca,linea,modelo,price_msg,char_img,link}) {


  return (
    <div className='card car-card'>
      <div className='container-fluid'>
        
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <img
              className='logo-img' 
              src={logo_src} 
              alt={`${alt_img}-logo`} 
              width="100"
              height="100"
              />
            </div>
          </div>

          <div className='col d-flex justify-content-end align-items-center'>
            <b><h2 className=''>{modelo}</h2></b>
          </div>

        </div>

        <div className='row'>
          <div className='container d-flex justify-content-center align-items-center'>
            <img
              className='car-image' 
              src={img_src} 
              alt={`${alt_img}`}
              width="350"
              height="263"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
          </div>
        </div>
        
        <div className='card-body pb-0'>
          <div className="line-separator"></div>
                                       
          <div className='container my-4'>
            <h2 className='model-tittle'>{marca} {linea} {modelo}</h2>
          </div>

        </div>
          <div className='container px-0'>
            
            <div className='container-fuid py-3 my-2 hide-web-devices'>
              <h3 className='table-tittle'><CarIcon/> Car Features</h3>
            </div>
            
            <img
                  className='car-charact-img mt-0 mb-4 hide-web-devices'
                  src={char_img}
                  alt={`${marca}-${linea} for rent features!`}
                  width="1024"
                  height="417"
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />        
          </div>

          
      </div>
    </div>

  );
};

function CarIcon(){
  return(
    <span className="material-symbols-outlined ">
      <h3 className='mt-2'>directions_car</h3>
    </span>
  )
}

export default CarComponent;
