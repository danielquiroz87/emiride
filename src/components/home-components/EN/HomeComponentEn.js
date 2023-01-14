import React from 'react';
import CarouselEn from './CarouselEn';
import WhyRent from '../EN/WhyToRentWithUs/WhyRent';
import HowWorks from './HowWorks';
import BestChoiceImg from '../../../static/images/best-choice.png';
import CompleteFleetImg from '../../../static/images/know-fleet.png';
import CarComponent from './CarComponent';

import Mitsubishi from '../../../static/images/mitsubishi.png';
import MitsubishiLogo from '../../../static/images/Mitsubishi_logo.svg.png'

import KiaPegas from '../../../static/images/kiapegas.png';
import KiaLogo from '../../../static/images/kia_logo.jpg';

import Elantra from '../../../static/images/elantra.png';
import Accent from '../../../static/images/hyundaiaccent.png';
import Santafe from '../../../static/images/santafe.png';

import HyundaiLogo from '../../../static/images/hyundai_logo.jpg'

import Xterra from '../../../static/images/xterra.png';
import NissanLogo from '../../../static/images/nissan_logo.jpg';

import Fortuner from '../../../static/images/fortuner.png';
import ToyotaLogo from '../../../static/images/toyota_logo.png';

import Urus from '../../../static/images/urus.png';
import LamborginiLogo from '../../../static/images/lamborghini.jpg';

import CharLow from '../../../static/images/car-caract-low-en.png'

import StepsPath from '../../../static/images/steps-path-desktop.png';
import Step1 from '../../../static/images/location-step-1.svg';
import Step2 from '../../../static/images/select-step-2.svg';
import Step3 from '../../../static/images/extras-step-3.svg';
import Step4 from '../../../static/images/info-step-4.svg';
import Step5 from '../../../static/images/payment-step-5.svg';
import Step6 from '../../../static/images/collect-step-6.svg';

import AngleDown from '../../../static/images/angle-down.png';

function HomeEn () {

  const elements_1 = [
    {
      img: Step1,
      title: 'Title 1',
      text: 'Description 1'
    },
    {
      img: Step2,
      title: 'Title 2',
      text: 'Description 2'
    },
    {
      img: Step3,
      title: 'Title 1',
      text: 'Description 1'
    }
  
  ]
  const elements_2 = [
    {
      img: Step4,
      title: 'Title 2',
      text: 'Description 2'
    },
    {
      img: Step5,
      title: 'Title 1',
      text: 'Description 1'
    },
    {
      img: Step6,
      title: 'Title 2',
      text: 'Description 2'
    }
  ]

  return (
    <div>
      <CarouselEn/>
      <WhyRent/>
      <div className='best-choice-container d-flex  align-items-center'>
        <div className='container justify-content-center'>
          <img className='w-100' src={BestChoiceImg} />
        </div>
      </div>
      
      <div className='mt-4 d-flex align-items-center container justify-content-center'>
        <img className='w-50' src={CompleteFleetImg} />
      </div>
    
      <div className=' container-fluid car-container py-4'>
        <div className='row py-2'>
          {/* img_src,alt_img, logo_src,alt_logo,price,marca,linea,modelo,price_msg */}
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
      
      <div className='container'>
        <b><h3 className='d-flex align-items-center justify-content-center'>HOW IT WORKS</h3></b>
      <HowWorks elements={elements_1}/>
      <div className='container d-flex align-items-center justify-content-center'>
        <img
        src={StepsPath}
        />
      </div>
      <HowWorks elements={elements_2} />
      </div>

      <div className='d-flex align-items-center justify-content-center angle-down-parent'>
        <img 
          src={AngleDown}
          className="angle-down"
        />
      </div>
    </div>
  );
};

export default HomeEn;
