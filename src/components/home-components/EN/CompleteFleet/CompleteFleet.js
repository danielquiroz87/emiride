import React from 'react';
import CarComponent from '../../../CarComponent';

import Mitsubishi from '../../../../static/images/mitsubishi.png';
// import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo.svg.png'
import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo_g.png'

import KiaPegas from '../../../../static/images/kiapegas.png';
// import KiaLogo from '../../../../static/images/kia_logo.jpg';
import KiaLogo from '../../../../static/images/kia_logo_g.jpg';

import Elantra from '../../../../static/images/elantra.png';
import Accent from '../../../../static/images/hyundaiaccent.png';
import Santafe from '../../../../static/images/santafe.png';

// import HyundaiLogo from '../../../../static/images/hyundai_logo.jpg';
import HyundaiLogo from '../../../../static/images/hyundai_logo_g.jpg';

import Xterra from '../../../../static/images/xterra.png';
// import NissanLogo from '../../../../static/images/nissan_logo.jpg';
import NissanLogo from '../../../../static/images/nissan_logo_g.jpg';

import Fortuner from '../../../../static/images/fortuner.png';
// import ToyotaLogo from '../../../../static/images/toyota_logo.png';
import ToyotaLogo from '../../../../static/images/toyota_logo_g.png';

import Urus from '../../../../static/images/urus.png';
// import LamborginiLogo from '../../../../static/images/lamborghini.jpg';
import LamborginiLogo from '../../../../static/images/lamborghini_gg.png';

import CharLow from '../../../../static/images/car-caract-low-en.png'

import CompleteFleetImg from '../../../../static/images/know-fleet.png';

function CompleteFleet () {
  return (
    <>
    <div className='mt-4 d-flex align-items-center container justify-content-center'>
        <img className='w-50' src={CompleteFleetImg} />
    </div>

    <div className=' container-fluid car-container py-4'>
        <div className='row py-2'>

        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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
        <div className="col-md-3 col-sm-6"><CarComponent 
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


