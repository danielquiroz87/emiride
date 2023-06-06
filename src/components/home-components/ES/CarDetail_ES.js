import React from 'react';
import { useParams } from 'react-router-dom';
import CarComponent from './CarDetailComponent';

const CarDetailPage = () => {
  const { car } = useParams(); // Access the route parameter

  // Map the car parameter to the corresponding car object
  const carData = {
    picanto: {
      img_src: '...', // Replace with the actual image source
      alt_img: 'KIA',
      logo_src: '...', // Replace with the actual logo source
      price: '99,99',
      price_msg: 'A partir de',
      marca: 'KIA',
      linea: 'PICANTO',
      modelo: '2023',
      char_img: '...', // Replace with the actual character image source
      link: 'https://emiride.renthubsoftware.com/rental-booking-engine/search',
    },
    attrage: {
      img_src: '...',
      alt_img: 'MITSUBISHI',
      logo_src: '...',
      price: '109,99',
      price_msg: 'A partir de',
      marca: 'MITSUBISHI',
      linea: 'ATTRAGE',
      modelo: '2023',
      char_img: '...',
      link: 'https://emiride.renthubsoftware.com/rental-booking-engine/search',
    },
    // Add more cars as needed
  };

  const carDetails = carData[car]; // Get the car details based on the route parameter

  if (!carDetails) {
    return <p>Car not found</p>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <CarComponent {...carDetails} />
      {/* Render the CarComponent with the car details */}
    </div>
  );
};

export default CarDetailPage;
