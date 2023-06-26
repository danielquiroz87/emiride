import React from 'react';

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

import picanto_char from '../../../../static/images/picanto_char.webp'
import attrage_char from '../../../../static/images/atragge_ch_es.webp';
import pegass_char from '../../../../static/images/pegass_ch_es.webp';
import accent_char from '../../../../static/images/accent_ch_es.webp';
import elantra_char from '../../../../static/images/elantra_ch_es.webp';

import santafe_char from '../../../../static/images/santafe_ch_es.webp';
import xterra_char from '../../../../static/images/x-terra_ch_es.webp';
import fortuner_char from '../../../../static/images/fortuner_ch_es.webp';



import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MobileCarousel() {

    return (
        // <div className='container-fluid car-container d-flex py-4'>
        <Carousel
        className='py-4 px-3'
          width={"100%"}

          slidesToShow= {1}
          slidesToScroll= {1}  
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          centerMode
          centerSlidePercentage={100}
          infiniteLoop
          swipeable
          emulateTouch
          autoPlay={true}
          interval={2300}
        //   responsive={[
        //     {
        //       breakpoint: 768, // Adjust the breakpoint value as needed
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 1,
        //         centerMode: true,
        //         centerSlidePercentage: 100,
        //       },
        //     },
        //   ]}
        >
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Picanto}
              alt_img={"PICANTO"}
              logo_src={KiaLogo}
              price={"99,99"}
              price_msg={"Desde"}
              marca={"KIA"}
              linea={"PICANTO"}
              modelo={"2023"}
              char_img={picanto_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Mitsubishi}
              alt_img={"MITSUBISHI"}
              logo_src={MitsubishiLogo}
              price={"109,99"}
              price_msg={"Desde"}
              marca={"MITSUBISHI"}
              linea={"ATTRAGE"}
              modelo={"2023"}
              char_img={attrage_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={KiaPegas}
              alt_img={"KIA"}
              logo_src={KiaLogo}
              price={"114,99"}
              price_msg={"Desde"}
              marca={"KIA"}
              linea={"PEGAS"}
              modelo={"2023"}
              char_img={pegass_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Accent}
              alt_img={"ACCENT"}
              logo_src={HyundaiLogo}
              price={"119,99"}
              price_msg={"Desde"}
              marca={"HYUNDAI"}
              linea={"ACCENT"}
              modelo={"2023"}
              char_img={accent_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Elantra}
              alt_img={"ELANTRA"}
              logo_src={HyundaiLogo}
              price={"179,99"}
              price_msg={"Desde"}
              marca={"HYUNDAI"}
              linea={"ELANTRA"}
              modelo={"2023"}
              char_img={elantra_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Creta}
              alt_img={"HYUNDAI"}
              logo_src={HyundaiLogo}
              price={"179,99"}
              price_msg={"Desde"}
              marca={"HYUNDAI"}
              linea={"CRETA"}
              modelo={"2023"}
              char_img={pegass_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Santafe}
              alt_img={"SANTAFE"}
              logo_src={HyundaiLogo}
              price={"299,99"}
              price_msg={"Desde"}
              marca={"HYUNDAI"}
              linea={"SANTAFE"}
              modelo={"2023"}
              char_img={santafe_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Xterra}
              alt_img={"NISSAN"}
              logo_src={NissanLogo}
              price={"219,99"}
              price_msg={"Desde"}
              marca={"NISSAN"}
              linea={"XTERRA"}
              modelo={"2023"}
              char_img={xterra_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
          <div className="container" style={{ width: '100%', maxWidth: '400px' }}>
            <CarComponent
              className="py-2"
              img_src={Fortuner}
              alt_img={"TOYOTA"}
              logo_src={ToyotaLogo}
              price={"199,99"}
              price_msg={"Desde"}
              marca={"TOYOTA"}
              linea={"FORTUNER"}
              modelo={"2023"}
              char_img={fortuner_char}
              link={"https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search"}
            />
          </div>
        </Carousel>
  

    )
}



export default MobileCarousel;