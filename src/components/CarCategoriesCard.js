import React from 'react';

function gotoWhatsApp(go){
  if(go){
    window.open('https://api.whatsapp.com/send/?phone=%2B971503323079&text=Hello+i+want+to+rent+a+car+with+EMI&type=phone_number&app_absent=0', '_blank');
  }
}

function CarCategoriesCard ({ img_src, alt_img, logo_src, price,price_week,price_month,price_offer,price_month_offer, price_week_offer,  price_msg, marca, linea, modelo, char_img, link,description,
  EngineSize,Bluetooth,CruiseControl,AUX,USB,FiveSeater,SevenSeater,smallLuggage,bigLuggage,Navigation,ReverseCamera,ParkingSensor,appleCarPlay,TintedWindows,sunRoof,title,id,categoria
 }) {
   
  return (
    <div className='col-brand'>
    <div className="card">
    <a href={`/cars-for-category/${categoria}`}>

       <div className="container d-flex justify-content-center align-items-center">
        <img src={`https://app2.movlife.co/static/images/${img_src}`} className="card-custom-img" width="250" height="163" alt="Auto" />
        </div>
        <div class="card-body">
          <div className='text-center'>
          <p style={{ fontWeight: 900 }} className="text-center mb-0">{title}</p>

              <table class="table table-borderless ">
              <thead>
             
                <tr>
                  <th className='mt-2 pt-3 table-text mb-0 pb-0'>
                    <span className="card-custom-title-price">Per Day</span><br/>
                    <del>{price_offer} AED</del>
                    <p className='card-custom-title-green'>{price} AED</p>
                  </th>
                  <th className='mt-2 pt-3 table-text mb-0 pb-0'>
                  <span className="card-custom-title-price">Per Week</span><br/>
                    <del>{price_week_offer} AED</del>
                    <p className='card-custom-title-green'>{price_week} AED</p>
                    </th>
                  <th className='mt-2 pt-3 table-text mb-0 pb-0'>
                  <span className="card-custom-title-price">Per Month</span><br/>
                    <del>{price_month_offer} AED</del>
                    <p className='card-custom-title-green'>{price_month} AED</p></th>              
                </tr>
              </thead>
              <tbody className='p-0'>
      
               
              </tbody>
            </table>
            {/* -Prices table */}
            </div>
        </div>
        <div className="card-footer">
            <div class="container d-flex align-items-center justify-content-center">
            <button id="" onClick={() => gotoWhatsApp(true)} class="btn-book-now btn rounded-right-corners px-4 mb-3 bg-black text-white">Book Now</button>
            &nbsp;&nbsp;&nbsp;<a href={`/cars-for-rent/${id}`} id="HYUNDAI-SANTAFE-SubmitBtn" class="btn rounded-right-corners px-4 mb-3 bg-black text-white">Details</a>

            </div>
            <div class="container d-flex align-items-center justify-content-center">
            </div>      
        </div>
        </a>
    </div>
    <br/>

    </div>
    );
  };

  export default CarCategoriesCard;