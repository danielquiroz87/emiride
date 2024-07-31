import React, {useState, Fragment} from 'react';

function CarComponent ({img_src,alt_img, logo_src,alt_logo,price,marca,linea,modelo,price_msg,char_img,link,
  description,Bluetooth,title}) {


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

          <div class="row mb-4 mx-2">
            <div class="container ">
              <h1 class="model-line-title">{title}</h1>
            </div>
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

          <div><div class="container"><div><p class="description-text">
            {description}
            </p>
          <button class="btn btn-primary">Show More</button></div></div></div>

          <div class="card-body pb-0">
            <div class="line-separator"></div>
            <div class="container mt-2 py-2 hide-mobile-devices">
              <div class="row"><div class="col">
                  <table class="table"><thead class="table-light"><tr><th scope="col" colspan="4" class="d-flex align-items-center"><span class="material-symbols-outlined">house</span><span class="ml-2">Requirements for UAE Residents</span></th></tr></thead><tbody><tr><td>Passport copy</td></tr><tr><td>Valid UAE driving license</td></tr><tr><td>Emirates ID</td></tr></tbody></table></div><div class="col"><table class="table"><thead class="table-light"><tr><th scope="col" colspan="4" class="d-flex align-items-center"><span class="material-symbols-outlined">language</span><span class="ml-2">Requirements for Tourists</span></th></tr></thead><tbody><tr><td>Passport copy</td></tr><tr><td>Valid International driving license</td></tr><tr><td>Visa/Visa stamp</td></tr></tbody></table>
                  </div>
                </div>
              </div>
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
