import React from 'react';
import CarComponent from '../../../CarComponent';

import Mitsubishi from '../../../../static/images/mitsubishi.webp';
// import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo.svg.webp'
import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo_g.webp'

import KiaPegas from '../../../../static/images/kiapegas.webp';
// import KiaLogo from '../../../../static/images/kia_logo.webp';
import KiaLogo from '../../../../static/images/kia_logo_g.webp';

import Elantra from '../../../../static/images/elantra.webp';
import Accent from '../../../../static/images/hyundaiaccent.webp';
import Santafe from '../../../../static/images/santafe.webp';

// import HyundaiLogo from '../../../../static/images/hyundai_logo.webp';
import HyundaiLogo from '../../../../static/images/hyundai_logo_g.webp';

import Xterra from '../../../../static/images/xterra.webp';
// import NissanLogo from '../../../../static/images/nissan_logo.webp';
import NissanLogo from '../../../../static/images/nissan_logo_g.webp';

import Fortuner from '../../../../static/images/fortuner.webp';
// import ToyotaLogo from '../../../../static/images/toyota_logo.webp';
import ToyotaLogo from '../../../../static/images/toyota_logo_g.webp';

import Urus from '../../../../static/images/urus.webp';
// import LamborginiLogo from '../../../../static/images/lamborghini.webp';
import LamborginiLogo from '../../../../static/images/lamborghini_gg.webp';

import CharLow from '../../../../static/images/car-caract-low-en.webp'

import CompleteFleetImg from '../../../../static/images/know-fleet.webp';

function CompleteFleet () {
  return (
    <>
    <div className='mt-4 d-flex align-items-center container justify-content-center'>
        <img className='complete-fleet-img' src={CompleteFleetImg} />
    </div>

    <div className=' container-fluid car-container py-4'>
        <div className='row py-2'>

        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Mitsubishi} 
                                            alt_img={"Mitsubishi"}
                                            logo_src={MitsubishiLogo} 
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Mitsubishi"} 
                                            linea={"Attrage"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={KiaPegas}   
                                            alt_img={"Kia"}
                                            logo_src={KiaLogo}        
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Kia"} 
                                            linea={"Pegas"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Accent}     
                                            alt_img={"Accent"}
                                            logo_src={HyundaiLogo}     
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Hyundai"} 
                                            linea={"Accent"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Elantra}    
                                            alt_img={"Elantra"}
                                            logo_src={HyundaiLogo}    
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Hyundai"} 
                                            linea={"Elantra"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        </div>
        <div className='row py-2'>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Santafe} 
                                            alt_img={"Mitsubishi"}
                                            logo_src={HyundaiLogo} 
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Hyundai"} 
                                            linea={"Santafe"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Xterra} 
                                            alt_img={"Mitsubishi"}
                                            logo_src={NissanLogo} 
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Nissan"} 
                                            linea={"X-Terra"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Fortuner} 
                                            alt_img={"Mitsubishi"}
                                            logo_src={ToyotaLogo} 
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Toyota"} 
                                            linea={"Fortuner"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        <div className="col-6 col-md-3 col-sm-6"><CarComponent 
                                            img_src={Urus} 
                                            alt_img={"Mitsubishi"}
                                            logo_src={LamborginiLogo} 
                                            price={"500.000"}
                                            price_msg={"Starting from"} 
                                            marca={"Lamborhini"} 
                                            linea={"Urus"} 
                                            modelo={"2023"}
                                            char_img={CharLow}
                                            /></div>
        </div>
    </div>     
    </> 
  );
};

export default CompleteFleet;


