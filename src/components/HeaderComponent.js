import React from 'react';

import facebookImage from '../static/images/facebook.svg';
import instagramImage from '../static/images/instagram.svg';
import tiktokImage from '../static/images/tiktok.svg';
import whatsappImage from '../static/images/whatsapp.svg';
import spainImage from '../static/images/spanish.webp';
const Header = () => {
  return (
 
<nav className="navbar header_ navbar-expand-lg navbar-dark bg-light">
  <div className="container-fluid">
    
    <div className="navbar-header">

      <a className="navbar-brand d-none d-sm-block" href="/">
        <img src="/images/Full-Color.webp" alt="Logo"  className="d-inline-block align-text-top header-logo"/>
      </a>
      <a className="navbar-brand d-sm-none" href="/">
        <img src="/images/header-logo-mobile.webp" alt="Logo"  className="d-inline-block align-text-top header-logo"/>
      </a>
    </div>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2 active">
          <a className="nav-link header-text" href="#">HOME</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link header-text" href="#cars-for-rent">CARS FOR RENT</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link header-text" href="#">ABOUT US</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link header-text" href="#">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link header-text" href="#"><img src={facebookImage} width={"25vw"} /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link header-text" href="#"><img src={instagramImage} width={"25vw"} /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link header-text" href="#"><img src={tiktokImage} width={"25vw"} /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link header-text" href="#"><img src={whatsappImage} width={"25vw"} /></a>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>

    </div>

    <div className='d-flex justify-content-end align-items-center'>

      <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon d-flex justify-content-end align-items-end"></span>
      </button>
      <a className="nav-link header-text mx-2" href="#"><img src={spainImage} width={"25vw"} /></a>
    </div>

  </div>
</nav>



  );
};

export default Header;


// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>

//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>

//     </div>

//   </div>
// </nav>