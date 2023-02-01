import React, {useState} from 'react';

import ToyotaFortuner from '../../../../static/images/Fortuner-2022-SuperBlanco-1024x683.webp';

import WhyShouldYou from '../../../../static/images/why-en.webp';
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
                  <img className='my-4' src= {WhyShouldYou} alt="why rent with us" width="800" height="41"/>
                </div>                 
            </div>

            <div className='col-4  d-flex align-items-center justify-content-center'>
                <img className='toyota-why-rent' src= {ToyotaFortuner} alt="fortuner" width="439.2" height="292.95"/> 
            </div>
            
            <div className='col-4 '>
                  <div className='container'>
                    <img className='why-rent-img mb-2'      width="384" height="94.87" src={pickup_dropoff}    onMouseOver={() => setHoverImage(reason1)} alt="pickup dropoff"/> 
                    <img className='why-rent-img mb-2 ms-4' width="384" height="94.87" src={additional_driver} onMouseOver={() => setHoverImage(reason2)} alt="additional driver"/> 
                    <img className='why-rent-img mb-2 ms-4' width="384" height="94.87" src={assistance_24h}    onMouseOver={() => setHoverImage(reason3)} alt="assistance 24h"/> 
                    <img className='why-rent-img mb-2'      width="384" height="94.87" src={insurance_policy}  onMouseOver={() => setHoverImage(reason4)} alt="insurance policy"/> 
                  </div>
            </div>
                
            <div className='col-4 '>
              <div className='container'>
                {hoverImage && <img className='hover-image why-rent-img' src={hoverImage} alt="reasons to rent" width="100%" height="auto"/>}
              </div>
            </div>

        </div>

        <div className='row  hide-on-desktop'>
            <div className='py-4 my-2 d-flex align-items-center justify-content-center'>
                <div className='container d-flex justify-content-center'>
                  <img className='w-100' src= {WhyShouldYou} alt="why should you rent" width="800" height="41"/>
                </div>                 
            </div>

            <div className='col-6  d-flex align-items-center justify-content-center'>
                <img className='toyota-why-rent' src= {ToyotaFortuner} alt="toyoya fortuner"/> 
            </div>
            
            <div className='col-6 '>
                  <div className='container'>
                    <img className='why-rent-img-mobile mb-2'      src={pickup_dropoff}    onMouseOver={() => setHoverImage(reason1)} alt="pick up drop off m"/> 
                    <img className='why-rent-img-mobile mb-2 ms-4' src={additional_driver} onMouseOver={() => setHoverImage(reason2)} alt="additional driver m"/> 
                    <img className='why-rent-img-mobile mb-2 ms-4' src={assistance_24h}    onMouseOver={() => setHoverImage(reason3)} alt="24 assistance m"/> 
                    <img className='why-rent-img-mobile mb-2'      src={insurance_policy}  onMouseOver={() => setHoverImage(reason4)} alt="insurance policy m"/> 
                  </div>
            </div>
                
            <div className='col-12 '>
              <div className='container d-flex align-items-center justify-content-center'>
                {hoverImage && <img className='hover-image why-rent-img-reasons' src={hoverImage} alt="reasons to rent m"/>}
              </div>
            </div>

        </div>
    </div>
  );
};

export default WhyRent;
