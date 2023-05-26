import React from "react";
import Header from "./HeaderComponent_ES";
import Footer from "./FooterComponent";
import DocumentsRequired from "./DocumentsRequired";
import FaqAccordion from "../../FaqAccordion";

import FAQImage from '../../../static/images/faq.webp'
import MapPointerImg from '../../../static/images/map-pointer.webp';
import { Helmet } from "react-helmet";
function AboutComponent(){

    return(
        <div>
            <Helmet>
                <title>Emi Ride Rent a Car Dubai - Sobre Nosotros</title>
                <meta name="description" content="Todo acerca de nuestra rentadora en dubai, Aclara tus dudas sobre como y donde rentar un vehiculo en dubai" />
            </Helmet>

            <Header/>
            <div className="about-us-container">
                <p className="about-us-tittle pt-4">SOBRE NOSOTROS</p>
            <div className="about-us-text mx-4">
                
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>E M I RIDE RENT A CAR es una empresa creada en el año 2022 en busca de mejorar el servicio de renta de vehículos en Emiratos Árabes Unidos, ofreciendo así servicios de movilidad tanto para turistas, residentes y empresas. Brindamos soluciones en la renta de vehículos de cortos periodos de tiempo como días, semanas y meses, así como también planes corporativos para aquellas pequeñas, medianas y grandes empresas garantizando una amplia y variada flota de vehículos para satisfacer todas las necesidades.</span>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>Nos enfocamos en solucionar las necesidades desatendidas de la industria garantizando un servicio al cliente proactivo, eficiente y responsable permitiendo así una satisfacción absoluta en relación precio, calidad y servicio. E M I RIDE RENT A CAR buscará siempre brindar una atención personalizada de principio a fin.
                    </span>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>Nuestra meta es que E M I RIDE RENT A CAR sea una de las más grande compañías en la industria automotriz de Emiratos Árabes Unidos en donde nos enfocamos en cuidar cada uno de nuestros procesos para así poder brindarle a nuestros clientes la mejor experiencia en la renta de vehículos dentro del País. Trabajamos arduamente para mejorar cada día la calidad de nuestros procesos y servicios, nos preocupamos día tras día por el mantenimiento y renovación de nuestra flota para ofrecer así vehículos con los más altos estándares de seguridad y comodidad que permitan cumplir las necesidades de nuestros clientes individuales y corporativos.</span>
                </p>
            </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
                <img className="img-fluid my-4 py-4"  src={MapPointerImg} alt="map"/>
            </div>
            <div className='container required-documents d-flex align-items-center justify-content-center flex-column'>
                <h2 className="required-documents-title my-2">DOCUMENTOS NECESARIOS</h2>
                <h2 className="required-documents-text">PARA RENTAR UN VEHICULO CON NOSOTROS</h2>
            </div>

            
            <DocumentsRequired/>

            <div className='faq-container d-flex align-items-center'>
                <div className='d-flex container align-items-center justify-content-center'>
                    <img className='w-75' src={FAQImage} alt="FAQs"/>
                </div>
            </div>
          
            <div className="accordion accordion-flush" id="accordionExample">

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
            <Footer/>
        </div>
    )
}

export default AboutComponent;