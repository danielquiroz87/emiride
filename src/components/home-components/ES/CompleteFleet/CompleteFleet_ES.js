import React ,{useState,useEffect}from 'react';
import CarComponent from '../../../CarComponent';

import Mitsubishi from '../../../../static/images/mitsubishi.webp';
import MitsubishiLogo from '../../../../static/images/Mitsubishi_logo_g.webp'

import KiaPegas from '../../../../static/images/kiapegas.webp';

import KiaLogo from '../../../../static/images/kia_logo_g.webp';

import Elantra from '../../../../static/images/elantra-1.webp';
import Accent from '../../../../static/images/hyundaiaccent.webp';
import Santafe from '../../../../static/images/santafe.webp';

import HyundaiLogo from '../../../../static/images/hyundai_logo_g.webp';

import Xterra from '../../../../static/images/xterra.webp';

import NissanLogo from '../../../../static/images/nissan_logo_g.webp';

import Fortuner from '../../../../static/images/fortuner.webp';

import ToyotaLogo from '../../../../static/images/toyota_logo.webp';

import Creta from '../../../../static/images/creta.webp';

import Picanto from '../../../../static/images/picanto.webp';

import attrage_char from '../../../../static/images/atragge_ch_es.webp';
import pegass_char from '../../../../static/images/pegass_ch_es.webp';
import accent_char from '../../../../static/images/accent_ch_es.webp';
import elantra_char from '../../../../static/images/elantra_ch_es.webp';

import santafe_char from '../../../../static/images/santafe_ch_es.webp';
import xterra_char from '../../../../static/images/x-terra_ch_es.webp';
import fortuner_char from '../../../../static/images/fortuner_ch_es.webp';


import CompleteFleetImg from '../../../../static/images/know-fleet-img.webp';

import MobileCarousel from './MobileCarouselComponent';
function CompleteFleet () {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767 || window.innerWidth === 767); // Adjust the breakpoint value as needed
    }

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile){
    return (
      <>
      <div className="container-fluid d-flex flex-row align-items-center justify-content-center my-4  ">              
        <div className='flota-completa-img-container'>
          <img className="flota-completa-img img-fluid" width='139' height='148' alt='complete fleet for rental'  src={CompleteFleetImg}/>
        </div>
        <div className='flota-completa-tittle-container'>
          <div className="black-white">
            <h2 className='flota-completa-tittle'>CONOCE</h2>
          </div>
          <div className="white-black">
            <h2 className='flota-completa-tittle'>NUESTRA FLOTA</h2>
          </div>
        </div>
      </div>

    <div className='car-container'>
      <MobileCarousel/>
    </div>
      </>
    );
  }
  else{

  
  return (
    <>
      <div className="container-fluid d-flex flex-row align-items-center justify-content-center my-4  ">              
        <div className='flota-completa-img-container'>
          <img className="flota-completa-img img-fluid" width='139' height='148' alt='complete fleet for rental'  src={CompleteFleetImg}/>
        </div>
        <div className='flota-completa-tittle-container'>
          <div className="black-white">
            <h2 className='flota-completa-tittle'>CONOCE</h2>
          </div>
          <div className="white-black">
            <h2 className='flota-completa-tittle'>NUESTRA FLOTA</h2>
          </div>
        </div>
      </div>



    <div className=' container-fluid car-container d-flex py-4'>
        <div className='row py-2 mx-3 px-2 align-items-center justify-content-center'>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Picanto} 
            alt_img={"KIA"}
            logo_src={KiaLogo} 
            price={"99,99"}
            price_msg={"A partir de"} 
            marca={"KIA"} 
            linea={"PICANTO"} 
            modelo={"2023"}
            char_img={attrage_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Mitsubishi} 
            alt_img={"MITSUBISHI"}
            logo_src={MitsubishiLogo} 
            price={"109,99"}
            price_msg={"A partir de"} 
            marca={"MITSUBISHI"} 
            linea={"ATTRAGE"} 
            modelo={"2023"}
            char_img={attrage_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={KiaPegas}   
            alt_img={"KIA"}
            logo_src={KiaLogo}        
            price={"114,99"}
            price_msg={"A partir de"} 
            marca={"KIA"} 
            linea={"PEGAS"} 
            modelo={"2023"}
            char_img={pegass_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Accent}     
            alt_img={"ACCENT"}
            logo_src={HyundaiLogo}     
            price={"119,99"}
            price_msg={"A partir de"} 
            marca={"HYUNDAI"} 
            linea={"ACCENT"} 
            modelo={"2023"}
            char_img={accent_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Elantra}    
            alt_img={"ELANTRA"}
            logo_src={HyundaiLogo}    
            price={"179,99"}
            price_msg={"A partir de"} 
            marca={"HYUNDAI"} 
            linea={"ELANTRA"} 
            modelo={"2023"}
            char_img={elantra_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>

          <div   className="col-10 col-md-4 col-sm-4">
          <CarComponent 
            img_src={Creta} 
            alt_img={"HYUNDAI"}
            logo_src={HyundaiLogo} 
            price={"179,99"}
            price_msg={"Starting from"} 
            marca={"HYUNDAI"} 
            linea={"CRETA"} 
            modelo={"2023"}
            char_img={pegass_char}
            link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
        </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Santafe} 
            alt_img={"SANTAFE"}
            logo_src={HyundaiLogo} 
            price={"299,99"}
            price_msg={"A partir de"} 
            marca={"HYUNDAI"} 
            linea={"SANTAFE"} 
            modelo={"2023"}
            char_img={santafe_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Xterra} 
            alt_img={"NISSAN"}
            logo_src={NissanLogo} 
            price={"349,99"}
            price_msg={"A partir de"} 
            marca={"NISSAN"} 
            linea={"X-TERRA"} 
            modelo={"2023"}
            char_img={xterra_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          <div className="col-10 col-md-4 col-sm-4">
            <CarComponent 
            img_src={Fortuner} 
            alt_img={"TOYOTA"}
            logo_src={ToyotaLogo} 
            price={"359,99"}
            price_msg={"A partir de"} 
            marca={"TOYOTA"} 
            linea={"FORTUNER"} 
            modelo={"2023"}
            char_img={fortuner_char}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div>
          {/* <div className="col-10 col-md-4 col-sm-4">
          <CarComponent 
            img_src={Urus} 
            alt_img={"LAMBORGHINI"}
            logo_src={LamborghiniLogo} 
            price={"SOON"}
            price_msg={"A partir de"} 
            marca={"LAMBORGHINI"} 
            linea={"URUS"} 
            modelo={"2023"}
            char_img={CharLow}
            link={"https://emiride.renthubsoftware.com/rental-booking-engine/search"}
            />
          </div> */}
        </div>
    </div>     
    </> 
  );
  }
};

export default CompleteFleet;


