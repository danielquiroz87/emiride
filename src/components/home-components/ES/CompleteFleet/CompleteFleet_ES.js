import React from 'react';
import CarComponent from '../../../CarComponent';

import Mitsubishi from '../../../../static/images/mitsubishi.webp';
import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo_g.webp'

import KiaPegas from '../../../../static/images/kiapegas.webp';

import KiaLogo from '../../../../static/images/kia_logo_g.webp';

import Elantra from '../../../../static/images/elantra.webp';
import Accent from '../../../../static/images/hyundaiaccent.webp';
import Santafe from '../../../../static/images/santafe.webp';

import HyundaiLogo from '../../../../static/images/hyundai_logo_g.webp';

import Xterra from '../../../../static/images/xterra.webp';

import NissanLogo from '../../../../static/images/nissan_logo_g.webp';

import Fortuner from '../../../../static/images/fortuner.webp';

import ToyotaLogo from '../../../../static/images/toyota_logo_g.webp';

import Urus from '../../../../static/images/urus.webp';

import LamborghiniLogo from '../../../../static/images/lamborghini_gg.webp';

import CharLow from '../../../../static/images/car-caract-low-en.webp'

import CompleteFleetImg from '../../../../static/images/complete_fleet_ES.webp';

function CompleteFleet () {
  return (
    <>
    <div className='mt-4 d-flex align-items-center container justify-content-center'>
        <img className='complete-fleet-img my-2' src={CompleteFleetImg} alt="complete fleet" />
    </div>

    <div className=' container-fluid car-container py-4'>
        <div className='row py-2'>

        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Mitsubishi} 
                                            alt_img={"MITSUBISHI"}
                                            logo_src={MitsubishiLogo} 
                                            price={"99,99"}
                                            price_msg={"A partir de"} 
                                            marca={"MITSUBISHI"} 
                                            linea={"ATTRAGE"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={KiaPegas}   
                                            alt_img={"KIA"}
                                            logo_src={KiaLogo}        
                                            price={"104,99"}
                                            price_msg={"A partir de"} 
                                            marca={"KIA"} 
                                            linea={"PEGAS"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Accent}     
                                            alt_img={"ACCENT"}
                                            logo_src={HyundaiLogo}     
                                            price={"114,99"}
                                            price_msg={"A partir de"} 
                                            marca={"HYUNDAI"} 
                                            linea={"ACCENT"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Elantra}    
                                            alt_img={"ELANTRA"}
                                            logo_src={HyundaiLogo}    
                                            price={"159,99"}
                                            price_msg={"A partir de"} 
                                            marca={"HYUNDAI"} 
                                            linea={"ELANTRA"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        </div>
        <div className='row py-2'>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Santafe} 
                                            alt_img={"SANTAFE"}
                                            logo_src={HyundaiLogo} 
                                            price={"299,99"}
                                            price_msg={"A partir de"} 
                                            marca={"HYUNDAI"} 
                                            linea={"SANTAFE"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Xterra} 
                                            alt_img={"NISSAN"}
                                            logo_src={NissanLogo} 
                                            price={"359,99"}
                                            price_msg={"A partir de"} 
                                            marca={"NISSAN"} 
                                            linea={"X-TERRA"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Fortuner} 
                                            alt_img={"TOYOTA"}
                                            logo_src={ToyotaLogo} 
                                            price={"349,99"}
                                            price_msg={"A partir de"} 
                                            marca={"TOYOTA"} 
                                            linea={"FORTUNER"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Urus} 
                                            alt_img={"LAMBORGHINI"}
                                            logo_src={LamborghiniLogo} 
                                            price={"SOON"}
                                            price_msg={"A partir de"} 
                                            marca={"LAMBORGHINI"} 
                                            linea={"URUS"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        </div>
    </div>     
    </> 
  );
};

export default CompleteFleet;


