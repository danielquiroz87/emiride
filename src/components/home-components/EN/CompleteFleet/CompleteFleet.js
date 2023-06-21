import React from 'react';
import CarComponent from '../../../CarComponent';

import Mitsubishi from '../../../../static/images/mitsubishi.webp';
import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo_g.webp'

import KiaPegas from '../../../../static/images/kiapegas.webp';

import KiaLogo from '../../../../static/images/kia_logo_g.webp';

import Elantra from '../../../../static/images/elantra-1.webp';
import Accent from '../../../../static/images/hyundaiaccent.webp';
import Santafe from '../../../../static/images/santafe.webp';

import HyundaiLogo from '../../../../static/images/hyundai_logo_g.webp';

import Xterra from '../../../../static/images/xterra.webp';

import NissanLogo from '../../../../static/images/nissan_logo_g.webp';

import Fortuner from '../../../../static/images/fortuner.webp';

import ToyotaLogo from '../../../../static/images/toyota_logo.webp';

import Creta from '../../../../static/images/creta.webp';

import Picanto from '../../../../static/images/picanto.webp'

import ss1 from '../../../../static/images/sss1.webp';
import ss2 from '../../../../static/images/sss2.webp';
// import ss3 from '../../../../static/images/sss3.webp';
import ss4 from '../../../../static/images/sss4.webp';
import picanto_char from '../../../../static/images/picanto_char.webp'

import CompleteFleetImg from '../../../../static/images/know-fleet-img.webp';


function CompleteFleet () {
  return (
    <>
    <div className='container-fluid d-flex mt-4 col mx-0 px-0 '>
        {/* <img className='complete-fleet-img my-2' src={CompleteFleetImg} alt="complete fleet" />  */}
        {/*width="1024" height="148"*/}

        <div className="container-fluid d-flex flex-row align-items-center justify-content-center my-4  ">              
          <div className='complete-fleet-img-container'>
            <img className="complete-fleet-img img-fluid" width='139' height='148' alt='complete fleet for rental'  src={CompleteFleetImg}/>
          </div>
          <div className='complete-fleet-tittle-container'>
            <div className="black-white">
              <h2 className='complete-fleet-tittle'>KNOW OUR</h2>
            </div>
            <div className="white-black">
              <h2 className='complete-fleet-tittle'>COMPLETE FLEET</h2>
            </div>
          </div>
        </div>
        
    </div>

    <div className='container-fluid car-container d-flex py-4'>
        <div className='row py-2 mx-3 px-2 align-items-center justify-content-center'>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Picanto} 
                alt_img={"PICANTO"}
                logo_src={KiaLogo} 
                price={"99,99"}
                price_msg={"Starting from"} 
                marca={"KIA"} 
                linea={"PICANTO"} 
                modelo={"2023"}
                char_img={picanto_char}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Mitsubishi} 
                alt_img={"MITSUBISHI"}
                logo_src={MitsubishiLogo} 
                price={"109,99"}
                price_msg={"Starting from"} 
                marca={"MITSUBISHI"} 
                linea={"ATTRAGE"} 
                modelo={"2023"}
                char_img={ss4}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={KiaPegas}   
                alt_img={"KIA"}
                logo_src={KiaLogo}        
                price={"114,99"}
                price_msg={"Starting from"} 
                marca={"KIA"} 
                linea={"PEGAS"} 
                modelo={"2023"}
                char_img={ss2}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Accent}     
                alt_img={"ACCENT"}
                logo_src={HyundaiLogo}     
                price={"119,99"}
                price_msg={"Starting from"} 
                marca={"HYUNDAI"} 
                linea={"ACCENT"} 
                modelo={"2023"}
                char_img={ss2}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Elantra}    
                alt_img={"ELANTRA"}
                logo_src={HyundaiLogo}    
                price={"179,99"}
                price_msg={"Starting from"} 
                marca={"HYUNDAI"} 
                linea={"ELANTRA"} 
                modelo={"2023"}
                char_img={ss2}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>

          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Creta} 
                alt_img={"HYUNDAI"}
                logo_src={HyundaiLogo} 
                price={"179,99"}
                price_msg={"Starting from"} 
                marca={"HYUNDAI"} 
                linea={"CRETA"} 
                modelo={"2023"}
                char_img={ss2}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Santafe} 
                alt_img={"SANTAFE"}
                logo_src={HyundaiLogo} 
                price={"299,99"}
                price_msg={"Starting from"} 
                marca={"HYUNDAI"} 
                linea={"SANTAFE"} 
                modelo={"2023"}
                char_img={ss1}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Xterra} 
                alt_img={"NISSAN"}
                logo_src={NissanLogo} 
                price={"349,99"}
                price_msg={"Starting from"} 
                marca={"NISSAN"} 
                linea={"X-TERRA"} 
                modelo={"2023"}
                char_img={ss1}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent className="py-2" 
                img_src={Fortuner} 
                alt_img={"TOYOTA"}
                logo_src={ToyotaLogo} 
                price={"359,99"}
                price_msg={"Starting from"} 
                marca={"TOYOTA"} 
                linea={"FORTUNER"} 
                modelo={"2023"}
                char_img={ss1}
                link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
                />
          </div>

        </div>
    </div>     
    </> 
  );
};

export default CompleteFleet;


