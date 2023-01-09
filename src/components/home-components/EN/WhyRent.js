import React from 'react';
import CarouselEn from './CarouselEn';

import ToyotaFortuner from '../../../static/images/Fortuner-2022-SuperBlanco-1024x683.webp'
import WhyShouldYou from '../../../static/images/whyy-1024x53.png'
function WhyRent () {
  return (
    <div className='why_rent container-fluid'>
        <div className='row'>
            <div className='py-4 my-2 d-flex align-items-center justify-content-center'>
                <img className='' src= {WhyShouldYou}/>                 
            </div>
            <div className='col-4'>
                <img className='toyota-why-rent' src= {ToyotaFortuner}/> 
            </div>
            
            <div className='col-4'>

            </div>
            
            <div className='col-4'>

            </div>

        </div>
    </div>
  );
};

export default WhyRent;
