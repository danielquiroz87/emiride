import React from "react";
import Header from "../../HeaderComponent";
import Footer from "../../FooterComponent";
import DocumentsRequired from "./DocumentsRequired";
import FaqAccordion from "../../FaqAccordion";

import FAQImage from '../../../static/images/faq.webp'
import MapPointerImg from '../../../static/images/map-pointer.webp';

function AboutComponent(){

    return(
        <div>

            <Header/>
            <div className="about-us-container">
                <p className="about-us-tittle pt-4">ABOUT US</p>
            <div className="about-us-text mx-4">
                
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>E M I RIDE RENT A CAR is a company created in 2022 in search of improving the car rental service in the United Arab Emirates, offering mobility services for tourists, residents, and companies. We provide vehicle rental solutions for short periods of time such as days, weeks, and months, as well as corporate plans for small, medium, and large companies, guaranteeing a wide and varied fleet of vehicles to satisfy all needs.</span>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>We focus on solving the unattended needs of the industry, guaranteeing a proactive, efficient, and responsible customer service, tallowing absolute satisfaction in relation to price, quality and service. E M I RIDE RENT A CAR will always seek to provide personalized attention from start to finish.
                    </span>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>Our goal is for E M I RIDE RENT A CAR to be one of the largest companies in the car rental industry in the United Arab Emirates where we focus on taking care of each of our processes in order to provide our customers with the best vehicle rental experience. within the country. We work hard to improve the quality of our processes and services every day, we worry day after day about the maintenance and renewal of our fleet in order to offer vehicles with the highest standards of safety and comfort that allow us to meet the needs of our individual customers and corporate.</span>
                </p>
            </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
                <img className="img-fluid my-4 py-4"  src={MapPointerImg}/>
            </div>
            <div className='container required-documents d-flex align-items-center justify-content-center flex-column'>
                <h2 className="required-documents-title my-2">DOCUMENTS REQUIRED</h2>
                <h2 className="required-documents-text">TO RENT A CAR WITH US</h2>
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
            <Footer/>
        </div>
    )
}

export default AboutComponent;