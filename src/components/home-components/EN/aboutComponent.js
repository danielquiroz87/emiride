import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DocumentsRequired from "./DocumentsRequired";
import FaqAccordion from "../../FaqAccordion";

import FAQImage from '../../../static/images/faq.webp'
import MapPointerImg from '../../../static/images/map-pointer.webp';
import { Helmet } from 'react-helmet';

function AboutComponent(){

    return(
        <div>
            <Helmet>
                <title>Emi Ride Rent a Car Dubai - About Us</title>
                <meta name="description" content="About our renting company, clarify your doubts about renting a car to ride on dubai" />
            </Helmet>

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
                <img className="img-fluid my-4 py-4"  src={MapPointerImg} alt="map"/>
            </div>

            <div className="container">
                <p className="about-us-tittle" >OUR MISION</p>
            <div className="about-us-text mx-4">
                
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>Create a personalized, unique and quality service in the car rental industry in the United Arab Emirates with a focus on the Spanish-speaking public.</span>
                </p>
               
              
            </div>
            </div>

            <div className="container">
                <p className="about-us-tittle">OUR VISION</p>
            <div className="about-us-text mx-4">
                
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>Our pillar in 5 years will be to be one of the companies in the rental car industry most recognized for its punctuality, quality and comprehensive service.</span>
                </p>
               
              
            </div>
            </div>
            <div className='container required-documents d-flex align-items-center justify-content-center flex-column'>
                <h2 className="required-documents-title my-2">DOCUMENTS REQUIRED</h2>
                <h2 className="required-documents-text">TO RENT A CAR WITH US</h2>
            </div>

            
            <DocumentsRequired/>

          
           
            <Footer/>
        </div>
    )
}

export default AboutComponent;