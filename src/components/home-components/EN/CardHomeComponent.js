
import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DocumentsRequired from "./DocumentsRequired";
import FaqAccordion from "../../FaqAccordion";

import FAQImage from '../../../static/images/faq.webp'
import MapPointerImg from '../../../static/images/map-pointer.webp';
import { Helmet } from 'react-helmet';

function CardHomeComponent(){

    return(
        <div>
            <Helmet>
                <title>Emi Ride Rent a Car Dubai - Card Home Component</title>
                <meta name="description" content="About our renting company, clarify your doubts about renting a car to ride on dubai" />
            </Helmet>

            <Header/>
            <div className="about-us-container">
   <div className="col-10 col-md-4 col-sm-4">
      <div className="card my-2 car-card">
         <div className="container-fluid">
            <div className="row">
               <div className="col">
                  <div className="container">
                     <img className="logo-img" src="/static/media/hyundai_logo_g.dd3f756e349c49f7c352.webp" alt="ACCENT-logo" width="50" height="50" />
                  </div>
               </div>
               <div className="col d-flex justify-content-end">
                  <b className="">2023</b>
               </div>
            </div>
            <div className="row">
               <div className="container d-flex justify-content-center align-items-center">
                  
               </div>
            </div>
            <div className="card-body pb-0">
               <div className="line-separator"></div>
               <div>
                  <p className="text-price price-overflow">Starting from <b>AED 119,99</b></p>
               </div>
               <div className="text-model-container hide-on-mobile">
                  <p className="text-model">HYUNDAI ACCENT</p>
               </div>
               <div className="text-model-container hide-on-desktop show-767-1246">
                  <p className="text-model font-tablet">HYUNDAI ACCENT</p>
               </div>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center  px-0">
            </div>
            <div className="container d-flex align-items-center justify-content-center">
               <button id="HYUNDAI-ACCENT-SubmitBtn" className="btn rounded-right-corners px-4 mb-3 bg-black text-white">Details</button>
            </div>
         </div>
      </div>
   </div>
</div>

         

            

    
        
            <Footer/>
        </div>
    )
}

export default CardHomeComponent;