import React ,{useState} from 'react';
import { useLocation } from 'react-router-dom';

import desktopLogo from '../../../static/images/Full-Color.webp';
import mobileLogo from '../../../static/images/header-logo-mobile.webp';
import mobileLogoBW from '../../../static/images/header-logo-mobile-bw.webp';
import facebookImage from '../../../static/images/facebook.svg';
import instagramImage from '../../../static/images/instagram.svg';
import tiktokImage from '../../../static/images/tiktok.svg';
import whatsappImage from '../../../static/images/whatsapp.svg';
import spainImage from '../../../static/images/spanish.webp';
import closeCross from '../../../static/images/x-solid.svg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log('open?',isOpen)
  };

  const location = useLocation();
  const isCarsForRent = location.pathname.startsWith('/cars-for-rent/');



  return (
 


<nav className={`navbar header_ navbar-expand-lg ${ isCarsForRent? 'navbar-dark':'navbar-light'} ${isOpen ? 'navbar-open' : ''}`}>
  <div className={"container-fluid"}>
    <div className="navbar-header">
      <a className="navbar-brand d-none d-sm-block" href="/">
        <img src={isOpen ? mobileLogo : desktopLogo} alt="Logo" className="d-inline-block align-text-top header-logo " />
      </a>
      <a className="navbar-brand d-sm-none" href="/">
        {/* <img src={mobileLogo} alt="Logo" className="d-inline-block align-text-top header-logo"/> */}
        <img src={window.location.pathname === "/about-us" || window.location.pathname === "/privacy-policy" ? mobileLogoBW : mobileLogo} alt="Logo" className="d-inline-block align-text-top header-logo"/>
      </a>
    </div>
    
    <button className={`navbar-toggler ms-auto ${isOpen ? 'navbar-toggler-open me-2':''}`} type="button" onClick={toggleNavbar} alt="Header Toggler" aria-label='Header Toggler'>
      <span className="navbar-toggler-icon d-flex justify-content-end align-items-end">{isOpen? <img className={`${isOpen ? 'close-cross':''}`} src={closeCross} width="30" height="30" alt="cross-close-img" /> : <></>}</span>
    </button>
    
    <div className={`collapse navbar-collapse ${isOpen ? 'show navbar-content-open' : ''}`} id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2 active">
          <a className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="/">HOME</a>
        </li>
        <li className="nav-item mx-2">
          <a className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="/#cars-for-rent">CARS FOR RENT</a>
        </li>
        <li className="nav-item mx-2">
          <a className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="/about-us">ABOUT US</a>
        </li>
        <li className="nav-item mx-2">
          <a className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="https://api.whatsapp.com/send/?phone=%2B971503323079&text=Hello+i+want+to+rent+a+car+with+EMI&type=phone_number&app_absent=0">CONTACT US</a>
        </li>
        <li className="nav-item hide-on-mobile hide-on-tablet">
          <a aria-label='Facebook' className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="https://www.facebook.com/emiridedubai?mibextid=ZbWKwL"><img src={facebookImage} width="30" height="30" alt="Facebook" /></a>
        </li>
        <li className="nav-item hide-on-mobile hide-on-tablet">
          <a aria-label='Instagram' className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="https://www.instagram.com/emi_ride_dubai/"><img src={instagramImage} width="30" height="30" alt="Instagram" /></a>
        </li>
        <li className="nav-item hide-on-mobile hide-on-tablet">
          <a aria-label='TikTok' className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="https://www.tiktok.com/@emi_ride_dubai?_t=8XZAzmOXHXB&_r=1"><img src={tiktokImage} width="30" height="30" alt="TikTok" /></a>
        </li>
        <li className="nav-item hide-on-mobile hide-on-tablet">
          <a aria-label='Whatsapp' className={`nav-link header-text ${isOpen ? 'header-text-open':''}`} href="https://api.whatsapp.com/send/?phone=%2B971503323079&text=Hello+i+want+to+rent+a+car+with+EMI&type=phone_number&app_absent=0"><img src={whatsappImage} width="30" height="30" alt="Whatsapp" /></a>
        </li>

      </ul>

    </div>

    <div className={"d-flex justify-content-end align-items-center"}>
      <a aria-label="Spanish" className={`nav-link header-text mx-2 ${isOpen ? 'hide-language-icon' : ''}`} href="/inicio"><img src={spainImage} width="30" height="30" alt="Spanish Version"/></a>
    </div>

  </div>
</nav>



  );
};

export default Header;
