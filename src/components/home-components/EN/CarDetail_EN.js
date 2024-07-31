import React, { useEffect, useState } from 'react';
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
import ToyotaLogo from '../../../static/images/toyota_logo.webp'


import ss1 from '../../../static/images/sss1.webp';
import ss2 from '../../../static/images/sss2.webp';
import ss3 from '../../../static/images/sss3.webp';
import ss4 from '../../../static/images/sss4.webp';


const DataFetcher = () => {
  

}

const CarDetailPage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { car } = useParams(); // Access the route parameter


  useEffect(() => {
    fetchData(car);
  }, []);

  const fetchData = async (car) => {
    try {
      const response = await fetch('https://app2.movlife.co/jsongoogle.php?id='+car); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };




  // Map the car parameter to the corresponding car object
  const carData = {
    kia_picanto_2023: {
      img_src: Picanto, 
      alt_img: 'Kia Picanto for rent dubai',
      logo_src: KiaLogo, 
      price: "99,99",
      price_offer: "99,99",
      sale: !1,
      price_week: "649,99",
      price_week_offer: "649,99",
      price_month: "1849,99",
      price_month_offer: "1849,99",
      price_msg: 'A partir de',
      marca: 'KIA',
      linea: 'PICANTO',
      modelo: '2023',
      char_img: PicantoChar, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Kia Picanto, available for rent at E M I RIDE RENT A CAR in Dubai. If you're looking for an affordable and reliable car rental option in Dubai our company offers convenient solutions to suit your needs, whether it's a daily, weekly or monthly basis, the Kia Picanto 2023 model is the perfect choice for your rental needs.\n\n      As one of the leading car rental companies in Dubai, we prioritize providing our customers with cheap and reliable options. With its compact design and sleek exterior, the Kia Picanto is an ideal choice. Designed to offer both comfort and efficiency, the 2023 Kia Picanto is equipped with a range of features such as LCD screen, Apple car play, automatic gear, 980 cc engine capacity, ABS, tinted windows, Bluetooth, USB connection, Fm radio, rear Camera and much more. Whether you're cruising down Sheikh Zayed Road or exploring the vibrant city center. We prioritize your safety and well-being, and our well-maintained vehicles undergo regular inspections to ensure optimum performance. the Kia Picanto ensures a smooth and enjoyable ride.\n\n      We understand that every customer has unique needs. That's why we offer flexible rental options to suit your schedule and preferences. Whether you're visiting Dubai for a quick getaway, vacations, an extended business trip or planning to stay for a long term plans ensure that you have the right vehicle for the right duration.\n\n      Our commitment to exceptional customer service means that we're available 24/7 to assist you. Should you have any inquiries or face any unexpected situations during your rental period, our dedicated team is here to provide support and ensure a hassle-free experience. Explore Dubai at your own pace with the 2023 Kia Picanto from E M I RIDE RENT A CAR experiencing the freedom of having a reliable and cost-effective car rental while enjoying the stunning sights and attractions of this remarkable city of Dubai.\n \n      ",
      EngineSize: "980 cc",
      Bluetooth: "Yes",
      CruiseControl: "No",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "Yes",
      SevenSeater: "No",
      smallLuggage: 2,
      bigLuggage: 0,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
    },
    mitsubishi_attrage_2023: {
      img_src: Mitsubishi,
      alt_img: 'Mitsubishi Attrage for rent Dubai',
      logo_src: MitsubishiLogo  ,
      price: "109,99",
      price_offer: "104,99",
      sale: !0,
      price_week: "659,99",
      price_week_offer: "649,99",
      price_month: "2099,99",
      price_month_offer: "1799,99",
      price_msg: 'A partir de',
      marca: 'MITSUBISHI',
      linea: 'ATTRAGE',
      modelo: '2023',
      char_img: ss4,
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Mitsubishi Attrage, available for rent at E M I RIDE RENT A CAR, conveniently located in Dubai. If you're looking for a reliable and efficient car rental service in Dubai, we've got you covered. Our company offers a wide range of options to suit your needs, including the popular Mitsubishi Attrage 2023 model. Arriving at Dubai Airport? Look no further than E M I RIDE RENT A CAR for your car rental needs. With our seamless rental process and exceptional service, we ensure a smooth and convenient experience from start to finish. Whether you need a vehicle for a day, a week, or even a month.\n\n      When it comes to safety, the 2023 Mitsubishi Attrage has you covered. With its advanced safety features, including airbags, ABS, stability control, cruise control, automatic gear, 1400 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio and much more and more, you can have peace of mind while driving in Dubai's busy streets. We prioritize your safety and well-being, and our well-maintained vehicles undergo regular inspections to ensure optimum performance.\n\n      We understand the importance of economy and affordability. This car is renowned for its fuel efficiency, making it an excellent choice for those seeking an economical car rental option in Dubai. Explore the city and its surroundings without breaking the bank.\n\n      To make your experience even more convenient, we offer delivery all over Dubai. Whether you're staying in the city center, Palm Jumeirah, or any other area, directly to your location. If you're arriving at Dubai Airport, our delivery service ensures a seamless transition from the airport to your desired destination.\n\n      Experience the comfort, reliability, and convenience with E M I RIDE RENT A CAR. Our friendly and dedicated team is available to assist you throughout your rental period, ensuring a stress-free experience. Contact us today to reserve your Mitsubishi Attrage and enjoy the freedom of exploring Dubai at your own pace.       \n      ",
      EngineSize: "920 cc",
      Bluetooth: "Yes",
      CruiseControl: "No",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "Yes",
      SevenSeater: "No",
      smallLuggage: 2,
      bigLuggage: 1,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
    },
    kia_pegas_2023: {
      img_src: Pegas, 
      alt_img: 'Kia Pegas for rent dubai',
      logo_src: KiaLogo, 
      price: "114,99",
      price_offer: "109,99",
      sale: !0,
      price_week: "689,99",
      price_week_offer: "649,99",
      price_month: "2199,99",
      price_month_offer: "1849,99",
      price_msg: "A partir de",
      marca: 'KIA',
      linea: 'PEGAS',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Kia Pegas, available for rent at E M I RIDE RENT A CAR in Dubai. When it comes to car rental in Dubai, we provide exceptional service and a wide range of options to suit your needs. Whether you are visiting Dubai for a day, weekly or monthly basis, the Kia Pegas 2023 model is the perfect choice for your rental needs.\n      At E M I RIDE RENT A CAR, we understand the importance of comfort, reliability and affordability. The 2023 Kia Pegas checks all, offering a smooth driving experience. Its sleek and modern design is bound to turn heads as you navigate the bustling streets. When you step inside the Kia Pegas, you'll find a spacious and well-designed interior that ensures both driver and passenger comfort. Equipped with advanced technology and convenient features as Apple car play, automatic gear, 1400 cc engine capacity, Cruise control, ABS, airbags,  stability control, tinted windows, LCD screen, Bluetooth, USB connection, Fm radio, rear Camera and much more, you can stay connected and entertained throughout your journey. We prioritize your safety and well-being, and our well-maintained vehicles undergo regular inspections to ensure optimum performance. The Kia Pegas offers an efficient performance, making it as an ideal car to drive.\n      Our rental options cater to your specific needs, whether you require a vehicle choose from our flexible daily, weekly, and monthly basis rental plans, and experience the convenience of having a reliable vehicle at your disposal throughout your stay in Dubai. the rental process is designed to be quick and hassle-free. We prioritize delivering exceptional customer service, and our dedicated team is available to assist you at any time. Whether you have inquiries, need assistance with your rental, or require support during renting period, our friendly staff is just a phone call away.\n      Discover Dubai with the 2023 Kia Pegas from E M I RIDE RENT A CAR. Explore the iconic attractions, cruise along Sheikh Zayed Road, and immerse yourself in the vibrant city life. With our affordable rates and top-notch service, renting a Kia Pegas in Dubai has never been easier. Contact us today and make your reservation to experience the comfort, convenience, and reliability of the Kia Pegas which is highly demanded by the market.\n      ",
      EngineSize: "1.040 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "Yes",
      SevenSeater: "No",
      smallLuggage: 2,
      bigLuggage: 1,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "Yes"
    },
    hyundai_accent_2023: {
      img_src: Accent, 
      alt_img: 'Hyundai Accent for rent dubai',
      logo_src: HyundaiLogo, 
      price: "119,99",
      price_offer: "114,99",
      sale: !0,
      price_week: "749,99",
      price_week_offer: "699,99",
      price_month: "2299,99",
      price_month_offer: "2099,99",
      price_msg: "A partir de",
      marca: 'HYUNDAI',
      linea: 'ACCENT',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Hyundai Accent, available for rent at E M I RIDE RENT A CAR, your trusted car rental company located in Dubai, UAE. Whether you're in Dubai for a short visit or a long-term stay, we offer flexible rental options to suit your needs.\n\n      When it comes to car rental in Dubai, E M I RIDE RENT A CAR is your best choice. We provide top service and a wide range of vehicles for those seeking comfort and economy. Whether you need a car for a day, a week, or on a monthly basis, we've got you covered. Safety is our top priority this car is equipped with advanced safety features to ensure a secure driving experience. From multiple airbags to stability control and ABS, cruise control, automatic gear, 1600 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio, rear Camera, and much more and more so you can confidently explore Dubai's roads knowing that you're well-protected.\n\n      We understand the importance of economy when it comes to car rentals. The Hyundai Accent 2023 is known for its fuel efficiency, making it an excellent choice for those seeking a cheap car rental option. Enjoy exploring Dubai's attractions and bustling city life without worrying about excessive fuel costs. To enhance your convenience, we offer delivery services all over Dubai. If you're arriving at Dubai Airport, take advantage of our airport delivery service, ensuring a seamless transition from the airport to your preferred destination.\n\n      Experience the comfort and reliability with E M I RIDE RENT A CAR. Our dedicated team is committed to providing excellent customer service and support throughout your rental period. Contact us today to reserve this car and enjoy the freedom of exploring Dubai at your own pace.       \n      ",
      EngineSize: "1.400 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "Yes",
      SevenSeater: "No",
      smallLuggage: 2,
      bigLuggage: 1,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
    },
    hyundai_elantra_2023: {
      img_src: Elantra, 
      alt_img: 'Hyundai Elantra for rent dubai',
      logo_src: HyundaiLogo, 
      price: "169,99",
      price_offer: "149,99",
      sale: !0,
      price_week: "1149,99",
      price_week_offer: "949,99",
      price_month: "3099,99",
      price_month_offer: "2899,99",
      price_msg: "A partir de",
      marca: 'HYUNDAI',
      linea: 'ELANTRA',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Hyundai Elantra, available for rent at E M I RIDE RENT A CAR, your car rental in Dubai, UAE. We provide flexible rental options to suit your needs. When it comes to Dubai car rentals our company is your trusted choice. We offer exceptional service and a diverse fleet of vehicles, and the Hyundai Elantra 2023 is a popular full size sedan for those seeking comfort, style, and safety. Whether you require a car on a daily, weekly, monthly, or long-term basis, we've got the perfect solution for you.\n\n      Safety is our top priority, and the Hyundai Elantra 2023 is equipped with advanced safety features to ensure a secure driving experience. From its airbag system to advanced braking technologies and stability control, cruise control, automatic gear, 2000 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio, rear Camera you can confidently navigate Dubai's roads knowing that you and your passengers are well-protected.\n\n      we understand the importance of affordability. Our cheap car rental rates make it easy for you to enjoy the luxury and performance without breaking the bank. Experience a comfortable and enjoyable ride while keeping your budget intact. To enhance your convenience, we offer delivery services across Dubai. Whether you're located in the heart of the city, the vibrant Jumeirah area or different locations like Dubai Marina, bussines bay, Deira, Jumeirah Village Circle, or anywhere else, we can deliver directly to your desired location. If you're arriving at Dubai Airport, take advantage of our airport delivery service, ensuring a seamless and hassle-free start to your journey.\n\n      Experience the comfort, style, and reliability with E M I RIDE RENT A CAR. Our dedicated team is committed to providing exceptional customer service and support throughout your booking period. Contact us today to reserve  with us and make your journey unforgettable             \n      ",
      EngineSize: "1.600 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "Yes",
      SevenSeater: "No",
      smallLuggage: 1,
      bigLuggage: 2,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
    },
    hyundai_creta_2023: {
      img_src: Creta, 
      alt_img: 'Hyundai Creta for rent dubai',
      logo_src: HyundaiLogo, 
      price: "169,99",
      price_offer: "149,99",
      sale: !0,
      price_week: "1149,99",
      price_week_offer: "949,99",
      price_month: "3099,99",
      price_month_offer: "2899,99",
      price_msg: "A partir de",
      marca: 'HYUNDAI',
      linea: 'CRETA',
      modelo: '2023',
      char_img: ss2, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Hyundai Creta, available for rent at E M I RIDE RENT A CAR, your car rental in Dubai, UAE, UAE. Whether you're in Dubai for a day, a week, or even longer, we offer flexible rental options to suit your needs. When it comes to renting a car we offer an exceptional service and a diverse range of vehicles, for those seeking comfort, safety, and affordability, we have the perfect solution for you.\n\n      Safety is our top priority, and the Hyundai Creta 2023 comes equipped with advanced safety features to ensure a secure driving experience. From its robust body structure to its airbag system and advanced braking technologies, stability control, cruise control, automatic gear, 1500 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio, rear Camera you can have peace of mind knowing that you and your passengers are well-protected.\n\n      We understand the importance of affordability. Our cheap car rental rates make it easy for you to enjoy the quality and performance. Experience a comfortable and enjoyable ride while enjoying excellent value for your money.  To enhance your convenience, we offer delivery services throughout Dubai. Whether you're located in the city center, the bustling neighborhoods, or any other area, we can deliver directly to your preferred location. Additionally, our delivery service is available at Dubai Airport, ensuring a seamless and hassle-free start to your journey.\n\n      Rest assured that when you rent from E M I RIDE RENT A CAR, you'll enjoy basic comprehensive insurance coverage for your peace of mind. We also provide 24/7 breakdown road assistance, ensuring that you're supported at all times during your rental period. Experience the comfort, versatility, and reliability. Our dedicated team is committed to providing exceptional customer service and support throughout your rental experience. Contact us today to reserve with us and make your journey unforgettable.\n      ",
      EngineSize: "1.400 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "Yes",
      SevenSeater: "No",
      smallLuggage: 1,
      bigLuggage: 2,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
    },
    hyundai_santafe_2023: {
      img_src: SantaFe, 
      alt_img: 'Hyundai Santa Fe for rent dubai',
      logo_src: HyundaiLogo, 
      price: "299,99",
      price_offer: "249,99",
      sale: !0,
      price_week: "1849,99",
      price_week_offer: "1649,99",
      price_month: "4899,99",
      price_month_offer: "4849,99",
      price_msg: "A partir de",
      marca: 'HYUNDAI',
      linea: 'SANTA FE',
      modelo: '2023',
      char_img: ss1, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Hyundai Santa Fe, available for rent at E M I RIDE RENT A CAR, your best car rental company in Dubai, UAE. We offer flexible rental options to suit your needs, including  this spacious and reliable model.\n\n      When it comes to cars for rent in Dubai we are your trusted choice. We provide exceptional service and a diverse fleet of vehicles for those seeking comfort, safety, and affordability. Whether you need a car on a daily, weekly,  monthly basis or long term, we have  the perfect solution for you.\n\n      Safety is our utmost priority, and the Hyundai Santa Fe 2023 is equipped with advanced safety features to ensure a secure driving experience. From its airbag system and advanced braking technologies, stability control, cruise control, automatic gear, 2400 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio, rear Camera, wireless phone charger so you can have peace of mind knowing that you and your passengers are well-protected.\n\n      We understand the importance of affordability. Our cheap rates make it easy for you to enjoy the comfort and performance without exceeding your budget. Experience a smooth and enjoyable ride while getting excellent value for your money. To enhance your convenience, we offer delivery services all over Dubai. Wherever you're located in the city, we go directly to your doorstep. With just one click, you can have the car ready to drive and explore the city.\n\n      Rest assured that when you rent from E M I RIDE RENT A CAR, you'll enjoy basic comprehensive insurance coverage, providing you with peace of mind during your booking period. Additionally, our 24/7 breakdown road assistance ensures that you're supported at all times, offering you added convenience and reassurance.\n\n      Experience the spaciousness, versatility, and reliability. Our dedicated team is committed to providing exceptional customer service and support throughout your rental experience. Contact us today to reserve your car and enjoy the freedom of exploring Dubai with ease. you're just one click away from drive your dream car and make your journey unforgettable.      \n      ",
      EngineSize: "2000 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "No",
      SevenSeater: "Yes",
      smallLuggage: 2,
      bigLuggage: 3,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
      
    },
    nissan_xterra_2023: {
      img_src: Xterra, 
      alt_img: 'Nissan X-Terra for rent dubai',
      logo_src: NissanLogo, 
      price: "349,99",
      price_offer: "339,99",
      sale: !0,
      price_week: "1899,99",
      price_week_offer: "1699,99",
      price_month: "5499,99",
      price_month_offer: "5399,99",
      price_msg: "A partir de",
      marca: 'HYUNDAI',
      linea: 'SANTA FE',
      modelo: '2023',
      char_img: ss1, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Nissan Xterra, available for rent at E M I RIDE RENT A CAR, your trusted car rental company in Dubai, UAE. we offer flexible rental options to suit your needs. We understand the importance of affordability. Our cheap rates make it easy for you to enjoy the comfort and performance without straining your budget. Experience a smooth and powerful drive while getting excellent value for your money.\n\n      Safety is our top priority, and the Nissan Xterra 2023 comes equipped with advanced safety features from its airbag system and advanced braking technologies, stability control, cruise control, automatic gear, 4X4, 2500 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio, rear Camera, to ensure a secure driving experience. With its sturdy build and advanced driver assistance technologies, you can have peace of mind knowing that you and your passengers are well-protected during your Dubai adventures.\n\n      To enhance your convenience, we offer delivery services across Dubai. No matter where you're located in the city, we can deliver directly to your desired location. With just one click, you'll have the car ready to drive and explore Dubai's stunning landscapes and attractions. Rest assured that, you will enjoy basic comprehensive insurance coverage, providing you with peace of mind throughout your rental period. Additionally, our 24/7 breakdown road assistance ensures that you're supported at all times, offering you added convenience and reassurance.\n\n      Experience the versatility, and reliability with our dedicated team which is committed to providing exceptional customer service and support throughout your rental experience. Contact us today to reserve your car and enjoy the freedom of exploring Dubai's adventurous terrains. With our delivery service, your dream car is just one click away. Rent a car in Dubai with E M I RIDE RENT A CAR and make your journey unforgettable.      \n      ",
      EngineSize: "2500 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "No",
      SevenSeater: "Yes",
      smallLuggage: 2,
      bigLuggage: 3,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
     
    },
    toyota_fortuner_2023: {
      img_src: Fortuner, 
      alt_img: 'Toyota Fortuner for rent dubai',
      logo_src: ToyotaLogo, 
      price: "359,99",
      price_offer: "349,99",
      sale: !0,
      price_week: "1899,99",
      price_week_offer: "1699,99",
      price_month: "5999,99",
      price_month_offer: "5899,99",
      price_msg: "A partir de",
      marca: 'TOYOTA',
      linea: 'FORTUNER',
      modelo: '2023',
      char_img: ss1, 
      link: 'https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/search',
      description: "Introducing the 2023 Toyota Fortuner, available for rent at E M I RIDE RENT A CAR, your trusted car rental company in Dubai, UAE. we offer flexible rental options to suit your needs. We understand the importance of affordability. Our cheap rates make it easy for you to enjoy the comfort and performance without straining your budget. Experience a smooth and powerful drive while getting excellent value for your money.\n\n      Safety is our top priority, and the Toyota Fortuner 2023 comes equipped with advanced safety features from its airbag system and advanced braking technologies, stability control, cruise control, automatic gear, 4X4, 2700 cc engine capacity, tinted windows, LCD screen, Apple car play, Bluetooth, USB connection, Fm radio, rear Camera, to ensure a secure driving experience. With its sturdy build and advanced driver assistance technologies, you can have peace of mind knowing that you and your passengers are well-protected during your Dubai adventures.\n\n      To enhance your convenience, we offer delivery services across Dubai. No matter where you're located in the city, we can deliver directly to your desired location. With just one click, you'll have the car ready to drive and explore Dubai's stunning landscapes and attractions. Rest assured that, you will enjoy basic comprehensive insurance coverage, providing you with peace of mind throughout your rental period. Additionally, our 24/7 breakdown road assistance ensures that you're supported at all times, offering you added convenience and reassurance.\n\n      Experience the versatility, and reliability with our dedicated team which is committed to providing exceptional customer service and support throughout your rental experience. Contact us today to reserve your car and enjoy the freedom of exploring Dubai's adventurous terrains. With our delivery service, your dream car is just one click away. Rent a car in Dubai with E M I RIDE RENT A CAR and make your journey unforgettable.            \n      ",
      EngineSize: "2700 cc",
      Bluetooth: "Yes",
      CruiseControl: "Yes",
      AUX: "Yes",
      USB: "Yes",
      FiveSeater: "No",
      SevenSeater: "Yes",
      smallLuggage: 2,
      bigLuggage: 3,
      Navigation: "Yes",
      ReverseCamera: "Yes",
      ParkingSensor: "Yes",
      appleCarPlay: "Yes",
      TintedWindows: "Yes",
      sunRoof: "No"
    },

  };

  const carDetails = data; // Get the car details based on the route parameter

  if (!carDetails) {
    return <p>Car not found</p>;
  }

  return (
      <CarComponent {...carDetails} />
      
  );
};

export default CarDetailPage;
