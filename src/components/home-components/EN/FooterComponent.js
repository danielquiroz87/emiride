import React from 'react';

import logoImg from '../../../static/images/Full-Color.webp'

import facebookImage from '../../../static/images/facebook.svg';
import instagramImage from '../../../static/images/instagram.svg';
import tiktokImage from '../../../static/images/tiktok.svg';
import whatsappImage from '../../../static/images/whatsapp.svg';
// import {Link} from 'react-router-dom';

//will render in any location except /admin
function Footer() {
    // logic to render footer

    return(

        <div className="footer rounded-top rounded-3" style={{backgroundColor: "#ffffff",
                                        color:"black",
                                        // little border radius in top corners
                                        
                                        }} >


        <div className="container-fluid text-left " >
    
            <div className="row align-items-center justify-content-center ">
              
                <div className="col-md-3 col-6" >
                    
                    <p className='text-center'>
                    <img src = {logoImg}
                    className="mt-4"
                    width={"90%"} 
                    height={"90%"}
                    
                    alt='logo'
                    />
                    </p>
                </div>

                <div className="col-md-3 col-6">
                    <b><p className="text-uppercase mt-4" >Explore</p></b>
                    <a className='footer-links' href='/about-us'><p>About Us</p></a>
                    <a className='footer-links' href='/#cars-for-rent'><p>Cars For Rent</p></a>
                    <a className='footer-links' href="https://api.whatsapp.com/send/?phone=%2B971503323079&text=Hello+i+want+to+rent+a+car+with+EMI&type=phone_number&app_absent=0"><p>Contact Us</p></a>
                </div>
        
                <div className="col-md-3 col-6" style={{ textDecoration: "none", color: "inherit"}}>
                    <b><p className="text-uppercase mt-4">Customer Care</p></b>
                    <a className='footer-links' href='/terms-conditions'><p>Terms and Conditions</p></a>
                    <a className='footer-links' href='/privacy-policy'><p>Privacy Policy</p></a>
                    <a className='footer-links' href='#FAQ-Accordion'><p>FAQs</p></a>
                </div>

                <div className="col-md-3 col-6" style={{ textDecoration: "none", color: "inherit"}}>
                    <b><p className="text-uppercase mt-4">Connect</p></b>
                    <p>Dubai UAE</p>
                    <p>+971 50 332 3079</p>
                    <p>info@emiride.com</p>
                </div>

            </div>
        </div>

        <div className="container-fluid text-left " >
    
    <div className="row align-items-center justify-content-center ">

        <div className="col-md-3 col-6">
        </div>
      
        <div className="col-md-3 col-6">
            <a className='footer-links text-left red w900' href='#'><p>Al Ain Mall Al Ain</p></a>
            <a className='footer-links text-left red w900' href='#'><p>AL Ghurair Mall</p></a>
            <a className='footer-links text-left red w900' href='#'><p>Arabian Ranches</p></a>
        </div>

        <div className="col-md-3 col-6">
            <a className='footer-links text-left red w900' href='#'><p>Al Ain Mall Al Ain</p></a>
            <a className='footer-links text-left red w900' href='#'><p>AL Ghurair Mall</p></a>
            <a className='footer-links text-left red w900' href='#'><p>Arabian Ranches</p></a>
        </div>
        <div className="col-md-3 col-6">
            <a className='footer-links text-left red w900' href='#'><p>Al Ain Mall Al Ain</p></a>
            <a className='footer-links text-left red w900' href='#'><p>AL Ghurair Mall</p></a>
            <a className='footer-links text-left red w900' href='#'><p>Arabian Ranches</p></a>
        </div>
    
    </div>
</div>
        <div className='container'>
            <ul className="navbar-nav ms-auto d-flex flex-row align-items-center justify-content-center">
                <li className="nav-item mx-3 my-2">
                    <a aria-label='Facebook' className={`nav-link header-text`} href="https://www.facebook.com/emiridedubai?mibextid=ZbWKwL"><img src={facebookImage} width="30" height="30" alt="Facebook" /></a>
                </li>
                <li className="nav-item mx-3 my-2">
                    <a aria-label='Instagram' className={`nav-link header-text`} href="https://www.instagram.com/emi_ride_dubai/"><img src={instagramImage} width="30" height="30" alt="Instagram" /></a>
                </li>
                <li className="nav-item mx-3 my-2">
                    <a aria-label='TikTok' className={`nav-link header-text`} href="https://www.tiktok.com/@emi_ride_dubai?_t=8XZAzmOXHXB&_r=1"><img src={tiktokImage} width="30" height="30" alt="TikTok" /></a>
                </li>
                <li className="nav-item mx-3 my-2">
                    <a aria-label='Whatsapp' className={`nav-link header-text`} href="https://api.whatsapp.com/send/?phone=%2B971503323079&text=Hello+i+want+to+rent+a+car+with+EMI&type=phone_number&app_absent=0"><img src={whatsappImage} width="30" height="30" alt="Whatsapp" /></a>
                </li>

            </ul>
        </div>
      </div>

    
    )
}

export default Footer;


