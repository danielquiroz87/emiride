import React, {useState} from 'react';

import ToyotaFortuner from '../../../../static/images/Fortuner-2022-SuperBlanco-1024x683.webp';

import WhyShouldYou from '../../../../static/images/whyy-1024x53.webp';
import pickup_dropoff from '../../../../static/images/Drop-off-1024x253.webp';
import additional_driver from '../../../../static/images/for-free-1024x253.webp';
import assistance_24h from '../../../../static/images/assistance-1024x253.webp';
import insurance_policy from '../../../../static/images/Insurance-1024x253.webp';

import reason1 from '../../../../static/images/sde1.webp';
import reason2 from '../../../../static/images/sde2.webp';
import reason3 from '../../../../static/images/sde3.webp';
import reason4 from '../../../../static/images/sde4.webp';

function WhyRent () {
  const [hoverImage, setHoverImage] = useState(reason1);

  return (
    <div className='why_rent container-fluid'>
        <div className='row hide-on-mobile'>
            <div className='py-4 my-2 d-flex align-items-center justify-content-center'>
                <div className='container d-flex justify-content-center'>
                  <img className='w-50' src= {WhyShouldYou}/>
                </div>                 
            </div>

            <div className='col-4  d-flex align-items-center justify-content-center'>
                <img className='toyota-why-rent' src= {ToyotaFortuner}/> 
            </div>
            
            <div className='col-4 '>
                  <div className='container'>
                    <img className='why-rent-img mb-2'      src={pickup_dropoff}    onMouseOver={() => setHoverImage(reason1)}/> 
                    <img className='why-rent-img mb-2 ms-4' src={additional_driver} onMouseOver={() => setHoverImage(reason2)}/> 
                    <img className='why-rent-img mb-2 ms-4' src={assistance_24h}    onMouseOver={() => setHoverImage(reason3)}/> 
                    <img className='why-rent-img mb-2'      src={insurance_policy}  onMouseOver={() => setHoverImage(reason4)}/> 
                  </div>
            </div>
                
            <div className='col-4 '>
              <div className='container'>
                {hoverImage && <img className='hover-image why-rent-img' src={hoverImage} />}
              </div>
            </div>

        </div>

        <div className='row  hide-on-desktop'>
            <div className='py-4 my-2 d-flex align-items-center justify-content-center'>
                <div className='container d-flex justify-content-center'>
                  <img className='w-100' src= {WhyShouldYou}/>
                </div>                 
            </div>

            <div className='col-6  d-flex align-items-center justify-content-center'>
                <img className='toyota-why-rent' src= {ToyotaFortuner}/> 
            </div>
            
            <div className='col-6 '>
                  <div className='container'>
                    <img className='why-rent-img-mobile mb-2'      src={pickup_dropoff}    onMouseOver={() => setHoverImage(reason1)}/> 
                    <img className='why-rent-img-mobile mb-2 ms-4' src={additional_driver} onMouseOver={() => setHoverImage(reason2)}/> 
                    <img className='why-rent-img-mobile mb-2 ms-4' src={assistance_24h}    onMouseOver={() => setHoverImage(reason3)}/> 
                    <img className='why-rent-img-mobile mb-2'      src={insurance_policy}  onMouseOver={() => setHoverImage(reason4)}/> 
                  </div>
            </div>
                
            <div className='col-12 '>
              <div className='container d-flex align-items-center justify-content-center'>
                {hoverImage && <img className='hover-image why-rent-img-reasons' src={hoverImage} />}
              </div>
            </div>

        </div>
    </div>
  );
};

export default WhyRent;
