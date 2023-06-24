import React, {useState} from 'react';

import ToyotaFortuner from '../../../../static/images/Fortuner-2022-SuperBlanco.webp';

import reason1 from '../../../../static/images/sde1.webp';
import reason2 from '../../../../static/images/sde2.webp';
import reason3 from '../../../../static/images/sde3.webp';
import reason4 from '../../../../static/images/sde4.webp';
import dropoff_reason from '../../../../static/images/drop-off-logo.webp';
import add_driver_reason from '../../../../static/images/add-for-free-logo.webp';
import assistance_reason from '../../../../static/images/assistance-logo.webp';
import insurance_reason from '../../../../static/images/Insurance-logo.webp';

function WhyRent () {
  const [hoverImage, setHoverImage] = useState(reason1);

  return (
    <div className='why_rent container-fluid my-4 py-4'>
        <div className='row hide-on-mobile why-rent-show-tablet'>

                  <div className="container-fluid d-flex flex-row align-items-center justify-content-center my-2 py-4">              
                    <div className="black-white">
                      <h2 className='why-rent-tittle'>WHY</h2>
                    </div>
                    <div className="white-black">
                      <h2 className='why-rent-tittle'>SHOULD YOU RENT A CAR WITH US?</h2>
                    </div>
                  </div>

            <div className='col-4  d-flex align-items-center justify-content-center'>
                <img className='toyota-why-rent' src= {ToyotaFortuner} alt="fortuner" width="500" height="333" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/> 
            </div>
            
            <div className='col-4 '>
                  <div className='col-8 container px-0'>

                    <div className="mb-2"  onMouseOver={() => setHoverImage(reason1)}>
                      <WhyRentReasons img_src={dropoff_reason} reason={"Pick-Up and Drop-off everywhere"} img_alt={"Pick up and drop-off everywhere"}/>
                    </div>
                    <div className="mb-2 ms-4"  onMouseOver={() => setHoverImage(reason2)}>
                      <WhyRentReasons img_src={add_driver_reason} reason={"Additional driver for free"} img_alt={"Additional driver for free"}/>
                    </div>
                    <div className="mb-2 ms-4"  onMouseOver={() => setHoverImage(reason3)}>
                      <WhyRentReasons img_src={assistance_reason} reason={"Breakdown road side assistance"} img_alt={"Breakdown road side assistance"}/>
                    </div>
                    
                    <div className="mb-2"  onMouseOver={() => setHoverImage(reason4)}>
                      <WhyRentReasons img_src={insurance_reason} reason={"Insurance policy"} img_alt={"Insurance policy"}/>
                    </div>
                  
                  </div>
            </div>
                
            <div className='col-4 '>
              <div className='container'>
                {hoverImage && <img className='hover-image why-rent-img' src={hoverImage} alt="reasons to rent" width="350" height="368" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>}
              </div>
            </div>

        </div>

        <div className='row  hide-on-desktop'>
            <div className='py-4 my-2 d-flex align-items-center justify-content-center'>

                  <div className="container-fluid d-flex flex-row align-items-center justify-content-center my-2 py-4">              
                    <div className="black-white">
                      <h2 className='why-rent-tittle'>WHY</h2>
                    </div>
                    <div className="white-black">
                      <h2 className='why-rent-tittle'>SHOULD YOU RENT A CAR WITH US?</h2>
                    </div>
                  </div>

            </div>

            <div className='col-6  d-flex align-items-center justify-content-center'>
                <img className='toyota-why-rent' src= {ToyotaFortuner} alt="toyoya fortuner"  width="500" height="333" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/> 
            </div>
            
            <div className='col-6 '>
                  <div className='container'>
                    
                    <div className="mb-2"  onMouseOver={() => setHoverImage(reason1)}>
                      <WhyRentReasons img_src={dropoff_reason} reason={"Pick-Up and Drop-off everywhere"} img_alt={"Pick up and drop-off everywhere"}/>
                    </div>
                    <div className="mb-2 ms-4"  onMouseOver={() => setHoverImage(reason2)}>
                      <WhyRentReasons img_src={add_driver_reason} reason={"Additional driver for free"} img_alt={"Additional driver for free"}/>
                    </div>
                    <div className="mb-2 ms-4"  onMouseOver={() => setHoverImage(reason3)}>
                      <WhyRentReasons img_src={assistance_reason} reason={"Breakdown road side assistance"} img_alt={"Breakdown road side assistance"}/>
                    </div>
                    
                    <div className="mb-2"  onMouseOver={() => setHoverImage(reason4)}>
                      <WhyRentReasons img_src={insurance_reason} reason={"Insurance policy"} img_alt={"Insurance policy"}/>
                    </div>

                  </div>
            </div>
                
            <div className='col-12 '>
              <div className='container d-flex align-items-center justify-content-center'>
                {hoverImage && <img className='hover-image why-rent-img-reasons' src={hoverImage} alt="reasons to rent m" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>}
              </div>
            </div>

        </div>
    </div>
  );
};

const WhyRentReasons = (props) => {
  return (


    <div className="container why-rent-reasons-container px-0" style={{display:"flex",backgroundColor:"black",alignItems:"center"}}>
      
      <div className="imageContainer col-reasons">
        <img src={props.img_src} alt={props.img_alt} width={"85.68"} height={"80"}/>
      </div>

      <div className="textContainer col-reasons">
        <p>{props.reason}</p>
      </div>
      
    </div>
  );
};


export default WhyRent;
