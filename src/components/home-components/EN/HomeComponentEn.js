import React, { useEffect, useState } from 'react';

import Header from '../../HeaderComponent';
import Footer from '../../FooterComponent';

import CarouselEn from './CarouselEn';
import WhyRent from '../EN/WhyToRentWithUs/WhyRent';
import HowWorks from './HowWorks';
import HowWorksMobile from './HowWorksMobile';
import BestChoiceImg from '../../../static/images/best-choice.webp';

import MapComponent from '../../MapComponent';

import DocumentsRequired from './DocumentsRequired';
import FaqAccordion from '../../FaqAccordion';
import ModalInformation from '../../ModalInformation';



import StepsPath from '../../../static/images/steps-path-desktop.webp';
import StepsPathMobile from '../../../static/images/steps-path-mobile.webp';
import Step1 from '../../../static/images/location-step-1.svg';
import Step2 from '../../../static/images/select-step-2.svg';
import Step3 from '../../../static/images/extras-step-3.svg';
import Step4 from '../../../static/images/info-step-4.svg';
import Step5 from '../../../static/images/payment-step-5.svg';
import Step6 from '../../../static/images/collect-step-6.svg';

import AngleDown from '../../../static/images/angle-down.webp';

import FAQImage from '../../../static/images/faq.webp'

import TicketsImageTrigger from '../../../static/images/traffic-tickets.webp';
import TicketsImageModal from '../../../static/images/traffic-tickets-modal.webp';

import RecklessDrivingImageTrigger from '../../../static/images/reckless-driving.webp';
import RecklessDrivingImageModal from '../../../static/images/reckless-driving-modal.webp';

import TrafficSignalsImageTrigger from '../../../static/images/traffic-signals.webp';
import TrafficSignalsImageModal from '../../../static/images/traffic-signals-modal.webp';

import DriverBehaivorImageTrigger from '../../../static/images/drivers-behaivor.webp';
import DriverBehaivorImageModal from '../../../static/images/drivers-behaivor-modal.webp';

import DrivingInfluenceImageTrigger from '../../../static/images/driving-under-influence.webp';
import DrivingInfluenceImageModal from '../../../static/images/driving-under-influence-modal.webp';

import SpeedingImageTrigger from '../../../static/images/speeding.webp';
import SpeedingImageModal from '../../../static/images/speeding-modal.webp';

import DrivingLicenceImageTrigger from '../../../static/images/driving-licences.webp';
import DrivingLicenceImageModal from '../../../static/images/driving-licences-modal.webp';

import DistractionsImageTrigger from '../../../static/images/distractions.webp';
import DistractionsImageModal from '../../../static/images/distractions-modal.webp';

import CompleteFleet from './CompleteFleet/CompleteFleet';
import FormComponentMobile from './FormComponentMobile';


import elantraCarouesel from "../../../static/images/elantra_c.webp";
import fountainCarouesel from "../../../static/images/fountain.webp";
import museumCarouesel from "../../../static/images/museum-of-the-future.webp";
import reserveYourVehicleCarousel from "../../../static/images/reserve-your-vehicle.webp"

function HomeEn () {
  const [carousel_1,setCarousel_1] = useState("");
  const [carousel_1_loaded,setCarousel_1_loaded] = useState(false);

  const [carousel_2,setCarousel_2] = useState("");
  const [carousel_2_loaded,setCarousel_2_loaded] = useState(false);

  const [carousel_3,setCarousel_3] = useState("");
  const [carousel_3_loaded,setCarousel_3_loaded] = useState(false);
  
  const [carousel_4,setCarousel_4] = useState("");
  const [carousel_4_loaded,setCarousel_4_loaded] = useState(false);

  const [all_img_loaded, setAll_img_loaded] = useState(false);

  useEffect(() => {

    
    // create a new Image object
    const carousel_1 = new Image();
    // set the src property to the URL of the image you want to preload
    carousel_1.src = elantraCarouesel;
    setCarousel_1(carousel_1.src);
    carousel_1.onload = () => setCarousel_1_loaded(true);

    const carousel_2 = new Image();
    // set the src property to the URL of the image you want to preload
    carousel_2.src = fountainCarouesel;
    setCarousel_2(carousel_2.src);
    carousel_2.onload = () => setCarousel_2_loaded(true);
    
    const carousel_3 = new Image();
    // set the src property to the URL of the image you want to preload
    carousel_3.src = museumCarouesel;
    setCarousel_3(carousel_3.src);
    carousel_3.onload = () => setCarousel_3_loaded(true);

    const carousel_4 = new Image();
    // set the src property to the URL of the image you want to preload
    carousel_4.src = reserveYourVehicleCarousel;
    setCarousel_4(carousel_4.src);
    carousel_4.onload = () => setCarousel_4_loaded(true);

    // if (carousel_1_loaded && carousel_2_loaded && carousel_3_loaded && carousel_4_loaded){
    //   console.log('all loadedd', all_img_loaded)
    //   setAll_img_loaded(true)
    // }else (console.log('all no loadedd', all_img_loaded))
    try {
      if (carousel_1_loaded && carousel_2_loaded && carousel_3_loaded && carousel_4_loaded){
        console.log('all loadedd', all_img_loaded)
        setAll_img_loaded(true)
      }else (console.log('all no loadedd', all_img_loaded))
    } catch (error) {
      console.log('all no loadedd catch', all_img_loaded)
    }

  }, [carousel_1_loaded,carousel_2_loaded,carousel_3_loaded,carousel_4_loaded,]);


  const elements_1 = [
    {
      img: Step1,
      title: 'Locations & Dates',
      text: 'Select the pickup and return dates and locations'
    },
    {
      img: Step2,
      title: 'Select Vehicle',
      text: 'Compare and select your preferred vehicle'
    },
    {
      img: Step3,
      title: 'Add-ons & Extras',
      text: 'Select add-ons and extras based on your vehicle choice'
    }
  
  ]
  const elements_2 = [

    {
      img: Step6,
      title: 'Collect Vehicle',
      text: 'Our representative will contact you'
    },
    {
      img: Step5,
      title: 'Checkout & Payment',
      text: 'Review the charges and make online payment'
    },

    {
      img: Step4,
      title: 'Your Info',
      text: 'Enter and submit your acurate info'
    },
  ]
  
  return (
    all_img_loaded ? (
      <div>
        <Header/>
        <div>
          <CarouselEn c1={carousel_1} c2={carousel_2} c3={carousel_3} c4={carousel_4}/>

          <FormComponentMobile />
          
          <WhyRent/>
          <div className='best-choice-container d-flex  align-items-center'>
            <div className='d-flex container align-items-center justify-content-center'>
              <img className='best-choice-header' src={BestChoiceImg} width="5650" height="302"/>
            </div>
          </div>
          <div id="cars-for-rent">
            <CompleteFleet />
          </div>

        {/* ------------------------- HOW WORKS ----------------------- */}
        <div className='container my-4 hide-on-mobile'>
          <b><h3 className='d-flex align-items-center justify-content-center how-works-tittle my-4 py-4'>HOW IT WORKS</h3></b>
          <HowWorks elements={elements_1}/>
            
              <img
              className='steps-path'
              src={StepsPath}
              />

          <HowWorks elements={elements_2} />
        </div>

        <div className='container my-4 hide-on-desktop'>
            <b><h3 className='d-flex align-items-center justify-content-center how-works-tittle my-4 py-4'>HOW IT WORKS</h3></b>
            <div className='row'>
                <div className='col-4'>
                    <HowWorksMobile elements={elements_1}/>
                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <img
                    className='w-100'
                    src={StepsPathMobile}
                    />
                </div>
                <div className='col-4'>
                    <HowWorksMobile elements={elements_2} />
                </div>
            </div>
        </div>

        {/* --------------------- HOW WORKS END -------------------- */}

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

            <FaqAccordion  tittle={"What is Salik Toll system?"} content={"Salik is the name given to Dubai's electronic road toll system. The Salik system is based on radio frequency identification technology. All vehicles are subject to a toll of AED 4 plus 5 VAT."} tittle_id={"1"} content_id={"Content1"}/>
            <FaqAccordion  tittle={"What is Darb Toll System?"} content={"Darb is the name given to Abu Dhabi's electronic road toll system. The Darb system is based on radio frequency identification technology. All vehicles are subject to a toll of AED 4 plus 5 VAT."} tittle_id={"2"} content_id={"Content2"}/>
            <FaqAccordion  tittle={"Can I add another driver to the reservation?"} content={"Yes, you can add another driver in the ADDS ON option, this may be subject to an additional cost but only at the time of making the reservation it will be shown. The additional driver will have to provide the required documents as well as the person who is taking the reservation and they must be shown physically at the pickup date."} tittle_id={"3"} content_id={"Content3"}/>
            <FaqAccordion  tittle={"What happens if I return the vehicle after the contract end time?"} content={"A grace period of 1 hour (60 minutes) is granted, in case the vehicle is not delivered within this grace period, the rate corresponding to a rental day equal to the one contracted agreement within the contract it will be no charged."} tittle_id={"4"} content_id={"Content4"}/>
            <FaqAccordion  tittle={"Can I drive on OFF-ROAD roads or in the desert?"} content={"No, it is not allowed to drive in these places and to do so would be a violation of the rental agreement since it is not allowed."} tittle_id={"5"} content_id={"Content5"}/>
            <FaqAccordion  tittle={"Who can contract the Collision Damage Waiver (CDW)?"} content={"Anyone who has a driving license older than 1 year for UAE residents and tourists."} tittle_id={"6"} content_id={"Content6"}/>
            <FaqAccordion  tittle={"About fines for violations of traffic regulations?"} content={"Most of the roads in the United Arab Emirates are controlled by speed cameras and radars which will make it very easy for you to be fined for violating traffic regulations, along the roads you will be able to find the speed limit. In the event that one or more fines are charged for infractions during the rental period of the vehicle, these will be automatically charged to the customer's credit card plus 5% VAT and 10% as a handling fee."} tittle_id={"7"} content_id={"Content7"}/>
            <FaqAccordion  tittle={"How does the deposit refund process work?"} content={"According to the norm established for car rental companies in the United Arab Emirates, we are obliged to refund the money from the deposit in a period equal to or less than 30 days from the delivery of the vehicle, but at E M I RIDE RENT A CAR we know how tedious this process can be or the need for our clients to use their money, so we will do it as quickly as we make sure that no other additional charge was generated to the vehicle during the rental period as a result of fines, tolls or others."} tittle_id={"8"} content_id={"Content8"}/>
            <FaqAccordion  tittle={"Who can rent a vehicle at E M I and what are the rental periods?"} content={"The person must be at least 21 years old and must have a valid UAE license (minimum 6 months issued) if resident. For tourists, they must have a valid driving license from the country of origin (minimum 1 year issued) or, if required, must also present an international driving permit. In relation to the rental periods E M I RIDE RENT A CAR offers a daily (24 hours minimum), weekly or monthly (30 days in case the client wants to extend this period, a new rental agreement must be made again) rental periods."} tittle_id={"9"} content_id={"Content9"}/>

          </div>

          <div className='hide-on-desktop valuable-information-tittle-container'>
            <div className='d-flex  align-items-center justify-content-center flex-column'>
              <h2 className="valuable-information-tittle my-4">SOME VALUABLE INFORMATION</h2>
              <h2 className="valuable-information-text">FOR YOU</h2>        
            </div>        
          </div>

          <div className='container-fluid  valuable-information'>

              <div className='row row-modal-information'>
                
                  <ModalInformation  IdModal={"Tickets"} triggerImage={TicketsImageTrigger} modalContent={TicketsImageModal} />
                
                
                  <ModalInformation  IdModal={"Reckless"} triggerImage={RecklessDrivingImageTrigger} modalContent={RecklessDrivingImageModal} />
                
                
                  <ModalInformation  IdModal={"Traffic"} triggerImage={TrafficSignalsImageTrigger} modalContent={TrafficSignalsImageModal} />
                
                
                  <ModalInformation  IdModal={"Behaivor"} triggerImage={DriverBehaivorImageTrigger} modalContent={DriverBehaivorImageModal} />
                
              </div>
              <div className='row row-modal-information'>
                
                  <ModalInformation  IdModal={"Influence"} triggerImage={DrivingInfluenceImageTrigger} modalContent={DrivingInfluenceImageModal} />
                
                
                  <ModalInformation  IdModal={"Speeding"} triggerImage={SpeedingImageTrigger} modalContent={SpeedingImageModal} />
                
                
                  <ModalInformation  IdModal={"Licence"} triggerImage={DrivingLicenceImageTrigger} modalContent={DrivingLicenceImageModal} />
                
                
                  <ModalInformation  IdModal={"Distractions"} triggerImage={DistractionsImageTrigger} modalContent={DistractionsImageModal} />
                
              </div>
          </div>

        </div>
        <Footer/>
      </div>
    )
    : null
  );
};

export default HomeEn;
