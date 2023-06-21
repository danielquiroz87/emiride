import React, {useState} from 'react';

import ToyotaFortuner from '../../../../static/images/Fortuner-2022-SuperBlanco.webp';


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
                  <div className='col-8 container'>
                    <img className='why-rent-img mb-2'      width="384" height="94.87" src={pickup_dropoff}    onMouseOver={() => setHoverImage(reason1)} alt="pickup dropoff" style={{ objectFit: 'contain', width: '100%', height: '100%' }} /> 
                    <img className='why-rent-img mb-2 ms-4' width="384" height="94.87" src={additional_driver} onMouseOver={() => setHoverImage(reason2)} alt="additional driver" style={{ objectFit: 'contain', width: '100%', height: '100%' }} /> 
                    <img className='why-rent-img mb-2 ms-4' width="384" height="94.87" src={assistance_24h}    onMouseOver={() => setHoverImage(reason3)} alt="assistance 24h" style={{ objectFit: 'contain', width: '100%', height: '100%' }} /> 
                    <img className='why-rent-img mb-2'      width="384" height="94.87" src={insurance_policy}  onMouseOver={() => setHoverImage(reason4)} alt="insurance policy" style={{ objectFit: 'contain', width: '100%', height: '100%' }} /> 
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
                    <img className='why-rent-img-mobile mb-2'      src={pickup_dropoff}    onMouseOver={() => setHoverImage(reason1)} alt="pick up drop off m" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/> 
                    <img className='why-rent-img-mobile mb-2 ms-4' src={additional_driver} onMouseOver={() => setHoverImage(reason2)} alt="additional driver m" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/> 
                    <img className='why-rent-img-mobile mb-2 ms-4' src={assistance_24h}    onMouseOver={() => setHoverImage(reason3)} alt="24 assistance m" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/> 
                    <img className='why-rent-img-mobile mb-2'      src={insurance_policy}  onMouseOver={() => setHoverImage(reason4)} alt="insurance policy m" style={{ objectFit: 'contain', width: '100%', height: '100%' }}/> 
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

export default WhyRent;
