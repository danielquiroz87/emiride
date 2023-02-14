import React from 'react';


function CarComponent ({img_src,alt_img, logo_src,alt_logo,price,marca,linea,modelo,price_msg,char_img}) {
  
  return (
    <div className='card my-2 car-card'>
      <div className='container-fluid'>
        
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <img
              className='logo-img' 
              src={logo_src} 
              alt={`${alt_img}-logo`} 
              width="50"
              height="50"
              />
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
              alt={`${alt_img}-car-img`}
              width="350"
              height="263"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
          </div>
        </div>
        
        <div className='card-body pb-0'>
          <div className="line-separator"></div>
             
              <div className='hide-on-mobile'>
              {marca === 'LAMBORGHINI' ? 
                <p className='text-model'>COMING SOON</p>
                : 
                <p className='text-price'>{price_msg} <b>AED {price}</b></p>
              }
              </div>
              <div className='hide-on-desktop'>
              {marca === 'LAMBORGHINI' ? 
                <p className='text-model'>COMING<br/> SOON</p>
                : 
                <p className='text-price'>{price_msg} <b>AED {price}</b></p>
              }
              </div>
            
          <div className='text-model-container hide-on-mobile'>
            <p className='text-model'>{marca} {linea}</p>
          </div>
          <div className='text-model-container hide-on-desktop show-767-1246'>
            <p className='text-model font-tablet'>{marca} <br/> {linea}</p>
          </div>

        </div>
          <div className='container-fluid px-0'>

            <img
                  className='car-charact-img mt-0 mb-4'
                  src={char_img}
                  alt={`${marca}-${linea}-characteristics`}
                  width="1024"
                  height="423"
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />        
          </div>

          <div className='container d-flex align-items-center justify-content-center'>
                      
            <button id={`${marca}-${linea}-SubmitBtn`} className={`btn rounded-right-corners text-white px-4 mb-3 ${marca === 'LAMBORGHINI' ? 'bg-gold' : 'bg-black'}`}>{marca === 'LAMBORGHINI' ? 'Coming Soon' : 'Book Now'}</button>
            {/* <button id={`${marca}-${linea}-SubmitBtn`} className={`btn rounded-right-corners text-white px-4 mb-3 ${marca === 'LAMBORGHINI' ? 'bg-gold' : 'bg-black'}`} style={{ fontSize: marca === 'LAMBORGHINI' ? '0.8rem' : '1rem', fontWeight: marca === 'LAMBORGHINI' ? 'bold' : 'normal' }}>{marca === 'LAMBORGHINI' ? 'Coming Soon' : 'Book Now'}</button> */}

          </div>
          
      </div>
    </div>

  );
};

export default CarComponent;
