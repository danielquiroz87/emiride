import React from 'react';
import CarouselEn from './CarouselEn';
import WhyRent from '../EN/WhyToRentWithUs/WhyRent';
import HowWorks from './HowWorks';
import BestChoiceImg from '../../../static/images/best-choice.png';
import CompleteFleetImg from '../../../static/images/know-fleet.png';
import CarComponent from './CarComponent';
import MapComponent from '../../MapComponent';

import DocumentsRequired from './DocumentsRequired';
import FaqAccordion from '../../FaqAccordion';
import ModalInformation from '../../ModalInformation';

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

import FAQImage from '../../../static/images/faq.png'

import TicketsImageTrigger from '../../../static/images/traffic-tickets.png';
import TicketsImageModal from '../../../static/images/traffic-tickets-modal.png';

import RecklessDrivingImageTrigger from '../../../static/images/reckless-driving.png';
import RecklessDrivingImageModal from '../../../static/images/reckless-driving-modal.png';

import TrafficSignalsImageTrigger from '../../../static/images/traffic-signals.png';
import TrafficSignalsImageModal from '../../../static/images/traffic-signals-modal.png';

import DriverBehaivorImageTrigger from '../../../static/images/drivers-behaivor.png';
import DriverBehaivorImageModal from '../../../static/images/drivers-behaivor-modal.png';

import DrivingInfluenceImageTrigger from '../../../static/images/driving-under-influence.png';
import DrivingInfluenceImageModal from '../../../static/images/driving-under-influence-modal.png';

import SpeedingImageTrigger from '../../../static/images/speeding.png';
import SpeedingImageModal from '../../../static/images/speeding-modal.png';

import DrivingLicenceImageTrigger from '../../../static/images/driving-licences.png';
import DrivingLicenceImageModal from '../../../static/images/driving-licences-modal.png';

import DistractionsImageTrigger from '../../../static/images/distractions.png';
import DistractionsImageModal from '../../../static/images/distractions-modal.png';


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
        <div className='d-flex container align-items-center justify-content-center'>
          <img className='w-75' src={BestChoiceImg} />
        </div>
      </div>
      
      <div className='mt-4 d-flex align-items-center container justify-content-center'>
        <img className='w-50' src={CompleteFleetImg} />
      </div>
    
      {/* car */}
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
      <div className="d-flex align-items-center justify-content-center" >
        <MapComponent />
      </div>

      <div className='container required-documents d-flex align-items-center justify-content-center flex-column'>
        <h2 className="required-documents-title my-2">DOCUMENTS REQUIRED</h2>
        <h2 className="required-documents-text">TO RENT A CAR IN DUBAI</h2>
      </div>
      <DocumentsRequired/>

      <div className='faq-container d-flex align-items-center'>
        <div className='d-flex container align-items-center justify-content-center'>
          <img className='w-75' src={FAQImage} />
        </div>
      </div>
      
      <div className="accordion accordion-flush" id="accordionExample">

        <FaqAccordion  tittle={"Accordion Item #1"} content={"This is the first items accordion body."} tittle_id={"accordion1"} content_id={"accordion1Content"}/>
        <FaqAccordion  tittle={"Accordion Item #2"} content={"This is the second items accordion body."} tittle_id={"accordion2"} content_id={"accordion2Content"}/>
        <FaqAccordion  tittle={"Accordion Item #3"} content={"This is the third items accordion body."} tittle_id={"accordion3"} content_id={"accordion3Content"}/>
        <FaqAccordion  tittle={"Accordion Item #4"} content={"This is the fourth items accordion body."} tittle_id={"accordion4"} content_id={"accordion4Content"}/>
      </div>
      <div className='container valuable-information'>

          <div className='row'>
            
              <ModalInformation  IdModal={"Tickets"} triggerImage={TicketsImageTrigger} modalContent={TicketsImageModal} />
            
            
              <ModalInformation  IdModal={"Reckless"} triggerImage={RecklessDrivingImageTrigger} modalContent={RecklessDrivingImageModal} />
            
            
              <ModalInformation  IdModal={"Traffic"} triggerImage={TrafficSignalsImageTrigger} modalContent={TrafficSignalsImageModal} />
            
            
              <ModalInformation  IdModal={"Behaivor"} triggerImage={DriverBehaivorImageTrigger} modalContent={DriverBehaivorImageModal} />
            
          </div>
          <div className='row'>
            
              <ModalInformation  IdModal={"Influence"} triggerImage={DrivingInfluenceImageTrigger} modalContent={DriverBehaivorImageModal} />
            
            
              <ModalInformation  IdModal={"Speeding"} triggerImage={SpeedingImageTrigger} modalContent={SpeedingImageModal} />
            
            
              <ModalInformation  IdModal={"Licence"} triggerImage={DrivingLicenceImageTrigger} modalContent={DrivingLicenceImageModal} />
            
            
              <ModalInformation  IdModal={"Distractions"} triggerImage={DistractionsImageTrigger} modalContent={DistractionsImageModal} />
            
          </div>
      </div>

    </div>
  );
};

export default HomeEn;
