import React from 'react';
import { useParams } from 'react-router-dom';
import CarComponent from './CarDetailComponent';

import KiaLogo from '../../../static/images/kia_logo.webp';
import PicantoChar from '../../../static/images/picanto_char.webp';
import Picanto from '../../../static/images/picanto_700.webp';

import Mitsubishi from '../../../static/images/mitsubishi_700.webp';
import MitsubishiLogo from '../../../static/images/Mitsubishi_logo_g.webp';

import Accent from '../../../static/images/accent_700.webp';
import HyundaiLogo from '../../../static/images/hyundai_logo_g.webp';

import Elantra from '../../../static/images/elantra_700.webp';

import Pegas from '../../../static/images/pegas_700.webp';

import Creta from '../../../static/images/creata_700.webp';

import SantaFe from '../../../static/images/santafe_700.webp';

import Xterra from '../../../static/images/xterra_700.webp';
import NissanLogo from '../../../static/images/nissan_logo_g.webp';

import Fortuner from '../../../static/images/fortuner_700.webp';
import ToyotaLogo from '../../../static/images/toyota_logo_g.webp'


import ss1 from '../../../static/images/sss1.webp';
import ss2 from '../../../static/images/sss2.webp';
// import ss3 from '../../../static/images/sss3.webp';
import ss4 from '../../../static/images/sss4.webp';

const CarDetailPage = () => {
  const { car } = useParams(); // Access the route parameter

  // Map the car parameter to the corresponding car object
  const carData = {
    kia_picanto_2023: {
      img_src: Picanto, 
      alt_img: 'Kia Picanto for rent dubai',
      logo_src: KiaLogo, 
      price: '99,99',
      price_week:'649,99',
      price_month:'1849,99',
      price_msg: 'A partir de',
      marca: 'KIA',
      linea: 'PICANTO',
      modelo: '2023',
      char_img: PicantoChar, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    mitsubishi_attrage_2023: {
      img_src: Mitsubishi,
      alt_img: 'Mitsubishi Attrage for rent Dubai',
      logo_src: MitsubishiLogo  ,
      price: '109,99',
      price_week:'659,99',
      price_month:'2099,99',
      price_msg: 'A partir de',
      marca: 'MITSUBISHI',
      linea: 'ATTRAGE',
      modelo: '2023',
      char_img: ss4,
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    kia_pegas_2023: {
      img_src: Pegas, 
      alt_img: 'Kia Pegas for rent dubai',
      logo_src: KiaLogo, 
      price: '114,99',
      price_week:'689,99',
      price_month:'2199,99',
      price_msg: 'A partir de',
      marca: 'KIA',
      linea: 'PEGAS',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    hyundai_accent_2023: {
      img_src: Accent, 
      alt_img: 'Hyundai Accent for rent dubai',
      logo_src: HyundaiLogo, 
      price: '119,99',
      price_week:'749,99',
      price_month:'2299,99',
      price_msg: 'A partir de',
      marca: 'HYUNDAI',
      linea: 'ACCENT',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    hyundai_elantra_2023: {
      img_src: Elantra, 
      alt_img: 'Hyundai Elantra for rent dubai',
      logo_src: HyundaiLogo, 
      price: '169,99',
      price_week:'1149,99',
      price_month:'3099,99',
      price_msg: 'A partir de',
      marca: 'HYUNDAI',
      linea: 'ELANTRA',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    hyundai_creta_2023: {
      img_src: Creta, 
      alt_img: 'Hyundai Creta for rent dubai',
      logo_src: HyundaiLogo, 
      price: '169,99',
      price_week:'1149,99',
      price_month:'3099,99',
      price_msg: 'A partir de',
      marca: 'HYUNDAI',
      linea: 'CRETA',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    hyundai_santafe_2023: {
      img_src: SantaFe, 
      alt_img: 'Hyundai Santa Fe for rent dubai',
      logo_src: HyundaiLogo, 
      price: '299,99',
      price_week:'1849,99',
      price_month:'4899,99',
      price_msg: 'A partir de',
      marca: 'HYUNDAI',
      linea: 'SANTA FE',
      modelo: '2023',
      char_img: ss1, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    nissan_xterra_2023: {
      img_src: Xterra, 
      alt_img: 'Nissan X-Terra for rent dubai',
      logo_src: NissanLogo, 
      price: '349,99',
      price_week:'1899,99',
      price_month:'5499,99',
      price_msg: 'A partir de',
      marca: 'HYUNDAI',
      linea: 'SANTA FE',
      modelo: '2023',
      char_img: ss1, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },
    toyota_fortuner_2023: {
      img_src: Fortuner, 
      alt_img: 'Toyota Fortuner for rent dubai',
      logo_src: ToyotaLogo, 
      price: '359,99',
      price_week:'1899,99',
      price_month:'5999,99',
      price_msg: 'A partir de',
      marca: 'TOYOTA',
      linea: 'FORTUNER',
      modelo: '2023',
      char_img: ss1, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
    },

  };

  const carDetails = carData[car]; // Get the car details based on the route parameter

  if (!carDetails) {
    return <p>Car not found</p>;
  }

  return (
      <CarComponent {...carDetails} />
  );
};

export default CarDetailPage;
