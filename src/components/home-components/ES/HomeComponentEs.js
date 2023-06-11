import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Header from './HeaderComponent_ES';
import Footer from './FooterComponent';

import CarouselEs from './CarouselEs';
import WhyRent from '../ES/WhyToRentWithUs/WhyRent_ES';
import HowWorks from './HowWorks_ES';
import HowWorksMobile from './HowWorksMobile_ES';


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

import FAQIcon from '../../../static/images/faq_icon.webp'

import TicketsImageTrigger from '../../../static/images/vi_tr_1_ES.webp';
import TicketsImageModal from '../../../static/images/vi_c_1_ES.webp';

import RecklessDrivingImageTrigger from '../../../static/images/vi_tr_2_ES.webp';
import RecklessDrivingImageModal from '../../../static/images/vi_c_2_ES.webp';

import TrafficSignalsImageTrigger from '../../../static/images/vi_tr_3_ES.webp';
import TrafficSignalsImageModal from '../../../static/images/vi_c_3_ES.webp';

import DriverBehaivorImageTrigger from '../../../static/images/vi_tr_4_ES.webp';
import DriverBehaivorImageModal from '../../../static/images/vi_c_4_ES.webp';

import DrivingInfluenceImageTrigger from '../../../static/images/vi_tr_5_ES.webp';
import DrivingInfluenceImageModal from '../../../static/images/vi_c_5_ES.webp';

import SpeedingImageTrigger from '../../../static/images/vi_tr_6_ES.webp';
import SpeedingImageModal from '../../../static/images/vi_c_6_ES.webp';

import DrivingLicenceImageTrigger from '../../../static/images/vi_tr_7_ES.webp';
import DrivingLicenceImageModal from '../../../static/images/vi_c_7_ES.webp';

import DistractionsImageTrigger from '../../../static/images/vi_tr_8_ES.webp';
import DistractionsImageModal from '../../../static/images/vi_c_8_ES.webp';

import CompleteFleet from './CompleteFleet/CompleteFleet_ES';
import FormComponentMobile from './FormComponentMobile_ES';


import elantraCarouesel from "../../../static/images/elantra-es.webp";
import fountainCarousel from "../../../static/images/fountain-es.webp";
import museumCarouesel from "../../../static/images/museum-of-the-future-es.webp";
import reserveYourVehicleCarousel from "../../../static/images/reserve-your-vehicle-es.webp";

import WhatsappIcon from '../../whatsappIcon';

import CarComponent from '../../CarComponent';
import Urus from '../../../static/images/urus.webp';
import LamborghiniLogo from '../../../static/images/lamborghini_gg.webp';
import lamborghini_char from '../../../static/images/lamborghini_ch_es.webp';

function HomeEs () {
  <Helmet>
      <title>Emi Ride - Renta un vehiculo en Dubai</title>
      <meta
        name="description"
        content="Renta un vehiculo en dubai con Emi Ride, Escoge entre nuestra gran variedad de marcas y modelos. Recoge y entrega en cualquier lugar de los emiratos"/>
  </Helmet>
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
    carousel_2.src = fountainCarousel;
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


    try {
      if (carousel_1_loaded && carousel_2_loaded && carousel_3_loaded && carousel_4_loaded){
        console.log('all loadedd', all_img_loaded)
        setAll_img_loaded(true)
      }else (console.log('all no loadedd', all_img_loaded))
    } catch (error) {
      console.log('all no loadedd catch', all_img_loaded)
      setAll_img_loaded(true); //this line is to avoid break the page if one image couldn't be loaded
    }

  }, [carousel_1_loaded,carousel_2_loaded,carousel_3_loaded,carousel_4_loaded,all_img_loaded]);


  const elements_1 = [
    {
      img: Step1,
      title: 'Ubicaciones y Fechas',
      text: 'Seleccione las fechas y lugares de recogida y devolución '
    },
    {
      img: Step2,
      title: 'Selecciona el Vehículo ',
      text: 'Compara y selecciona tu vehículo preferido'
    },
    {
      img: Step3,
      title: 'Complementos & Extras ',
      text: 'Seleccione complementos y extras según su elección de vehículo.'
    }
  
  ]
  const elements_2 = [

    {
      img: Step6,
      title: 'Recoger vehículo',
      text: 'Nuestro representante se comunicará con usted.'
    },
    {
      img: Step5,
      title: 'Pagos',
      text: 'Revisa los cargos y realiza el pago en línea.'
    },

    {
      img: Step4,
      title: 'Tú información',
      text: 'Ingrese y envíe su información precisa'
    },
  ]
  
  return (
    all_img_loaded ? (
      <div>
        <Header/>
        <div>
          <CarouselEs c1={carousel_1} c2={carousel_2} c3={carousel_3} c4={carousel_4}/>

          <FormComponentMobile />
          
          <WhyRent/>
          <div className='best-choice-container d-flex  align-items-center'>
          <div class="container-fluid d-flex flex-row align-items-center justify-content-center">              
                <div class="white-black">
                  <h2 className='mejor-opcion-tittle'>LA MEJOR OPCIÓN</h2>
                </div>
                <div class="black-white">
                  <h2 className='mejor-opcion-tittle'>PARA RECORRER DUBAI</h2>
                </div>
              </div>
          </div>
          <div id="cars-for-rent">
            <CompleteFleet />
            <div className='container-fluid'>
              <div className='row car-container justify-content-center'>

                <div className='container  d-flex align-items-center justify-content-center flex-column my-4'>
                  <p style={{fontWeight:900}} className="required-documents-title my-2 py-3">PROXIMAMENTE</p>
                </div>
                  <div className="col-8 col-md-4 col-sm-4">
                    <CarComponent 
                      img_src={Urus} 
                      alt_img={"LAMBORGHINI"}
                      logo_src={LamborghiniLogo} 
                      price={"SOON"}
                      price_msg={"A partir de"} 
                      marca={"LAMBORGHINI"} 
                      linea={"URUS"} 
                      modelo={"2023"}
                      char_img={lamborghini_char}
                      link={"/"}
                    />
                  </div>
                </div>
            </div>
          </div>

        {/* ------------------------- HOW WORKS ----------------------- */}
        <div className='container my-4 hide-on-mobile'>
          <b><h3 className='d-flex align-items-center justify-content-center how-works-tittle my-4 py-4'>COMO FUNCIONA</h3></b>
          <HowWorks elements={elements_1}/>
            
              <img
              className='steps-path'
              src={StepsPath}
              alt="stepsPaths"
              width="1024"
              height="200"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />

          <HowWorks elements={elements_2} />
        </div>

        <div className='container my-4 hide-on-desktop'>
            <b><h3 className='d-flex align-items-center justify-content-center how-works-tittle my-4 py-4'>COMO FUNCIONA</h3></b>
            <div className='row'>
                <div className='col-4'>
                    <HowWorksMobile elements={elements_1}/>
                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <img
                    className='w-100'
                    src={StepsPathMobile}
                    alt="Steps"
                    width="295"
                    height="1024"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
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
              alt="AngleDown"
              // width="512"
              // height="512"
              // style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center" >
            <MapComponent />
          </div>

          <div className='container required-documents d-flex align-items-center justify-content-center flex-column'>
            <h2 className="required-documents-title my-2">DOCUMENTOS REQUERIDOS</h2>
            <h2 className="required-documents-text">PARA RENTAR UN VEHÍCULO EN DUBAI</h2>
          </div>
          <DocumentsRequired/>

          <div className='faq-container d-flex align-items-center'>
            <div class="container-fluid d-flex flex-row align-items-center justify-content-center my-4  ">              
              <div className='FAQ-img-container'>
                <img className="FAQ-img img-fluid" width='143' height='143' alt='complete fleet for rental'  src={FAQIcon}/>
              </div>
              <div className='FAQ-tittle-container'>

                <div class="black-white">
                  <h3 className='FAQ-tittle'>PREGUNTAS</h3>
                </div>
                <div class="white-black">
                  <h3 className='FAQ-tittle'>FRECUENTES</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="accordion accordion-flush" id="FAQ-Accordion">

            <FaqAccordion  tittle={"¿Qué es el Sistema de peajes Darb?"} content={"Darb es el nombre que recibe el sistema de peaje electrónico de las carreteras de Dubái. El sistema Salik se basa en la tecnología de identificación por radiofrecuencia. Todos los vehículos están sujetos a un peaje de 4 AED más el 5 % VAT y más el 20% de manejo por cada vez que crucen por uno de estos."} tittle_id={"1"} content_id={"Content1"}/>
            <FaqAccordion  tittle={"¿Qué es el Sistema de peajes Salik?"} content={"Salik es el nombre que recibe el sistema de peaje electrónico de las carreteras de Dubái. El sistema Salik se basa en la tecnología de identificación por radiofrecuencia. Todos los vehículos están sujetos a un peaje de 4 AED más el 5 % VAT y más el 20% de manejo por cada vez que crucen por uno de estos."} tittle_id={"2"} content_id={"Content2"}/>
            <FaqAccordion  tittle={"¿Puedo agregar otro conductor a la reserva?"} content={"Si, puedes agregar otro conductor en la opción ADDS ON, este puede estar sujeto a un costo adicional pero solo al momento de realizar la reserva se mostrará. El conductor adicional tendrá que mostrar los documentos requeridos al igual que la persona que está tomando la reserva y deberán ser mostrados en físico al momento de retirar el vehículo."} tittle_id={"3"} content_id={"Content3"}/>
            <FaqAccordion  tittle={"¿Qué sucede si regreso el vehículo después de la hora de contrato?"} content={"Se concede un periodo de gracia de 1 hora (60 minutos), en caso de no entregar el vehículo en este periodo de gracia se cobrará la tarifa que corresponda a un día de alquiler igual al contratado dentro del contrato."} tittle_id={"4"} content_id={"Content4"}/>
            <FaqAccordion  tittle={"¿Puedo conducir en carreteras OFF-ROAD o en el desierto?"} content={"No, no esta permitido conducir en estos lugares y de hacerlo sería una violación al contrato de alquiler ya que no es permitido."} tittle_id={"5"} content_id={"Content5"}/>
            <FaqAccordion  tittle={"¿Quien puede contratar el Collision Damage Waiver (CDW)?"} content={"Cualquier persona que tenga una licencia de conducción mayor a 1 año para residentes de UAE y turistas."} tittle_id={"6"} content_id={"Content6"}/>
            <FaqAccordion  tittle={"¿Sobre las multas por violaciones a las normas de tránsito?"} content={"La mayoría de las carreteras de los Emiratos Árabes Unidos están controladas por cámaras y radares de velocidad lo que hará muy fácil que puedas se acreedor a una multa por violar las normas de tránsito, a lo largo de las carreteras podrás encontrar la velocidad permitida. En caso de que sea cargada una o varias multas por infracciones durante el tiempo de alquiler del vehículo estas serán cobradas de manera automática de la tarjeta de crédito del cliente más el 5% de VAT y 10% como tasa de manejo."} tittle_id={"7"} content_id={"Content7"}/>
            <FaqAccordion  tittle={"¿Como funciona el proceso de reembolso del depósito?"} content={"Según la norma establecida para las compañías de renta de vehículos en los Emiratos Árabes Unidos se obliga a reintegrar el dinero producto del deposito en un periodo igual o menor a 30 días a partir de la entrega del vehículo, pero en E M I RIDE RENT A CAR sabemos lo tedioso que puede llegar hacer este proceso o la necesidad de nuestros clientes de usar su dinero así que lo haremos tan rápido como nos aseguremos que no se generó ningún otro cargo adicional al vehículo durante el periodo de alquiler producto de multas, peajes u otros."} tittle_id={"8"} content_id={"Content8"}/>
            <FaqAccordion  tittle={"¿Quién puede alquilar un vehículo en EMI y cuáles son los periodos?"} content={"La persona debe tener como mínimo 21 años y deberá tener una licencia valida de UAE (mínimo 6 meses de expedida) en casi de ser residente. Para turistas deberán licencia de conducción valida del país de origen o en caso de requerir deberá presentar adicionalmente un permiso internacional de conducción. En relación con los periodos de renta EMI RIDE RENT A CAR ofrece periodos de alquiler por días (24 horas mínimo), semanas o por mes (30 días en caso de que el cliente quiera extender este periodo se deberá volver a realizar un contrato de alquiler nuevo)."} tittle_id={"9"} content_id={"Content9"}/>

          </div>

          <div className='hide-on-desktop valuable-information-tittle-container'>
            <div className='d-flex  align-items-center justify-content-center flex-column'>
              <h2 className="valuable-information-tittle my-4">INFORMACIÓN VALIOSA</h2>
              <h2 className="valuable-information-text">PARA TI</h2>        
            </div>        
          </div>

          <div className='container-fluid  valuable-information-es'>

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
        <WhatsappIcon/>
        <Footer/>
      </div>
    )
    : null
  );
};

export default HomeEs;
