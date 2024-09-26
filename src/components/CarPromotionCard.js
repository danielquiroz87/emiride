import React from 'react';
import { useLocation } from 'react-router-dom';

function CarPromotionCard ({title}) {
  const location = useLocation();
  const isInicio = location.pathname === '/inicio';
  return (
    <div className='home-ofertas col-md-3 col-sm-4'>
    <div className='card my-2 car-card'>
      <div className='container-fluid'>
        
        <div className='row'>
          <div className='col'>
            <div className='container'>
            <br/><br/><br/><br/>
             <h1><center>{title}</center></h1>
             <br/><br/><br/><br/>
            </div>
          </div>

        </div>
      </div>
    </div>
</div>
  );
};

function lowercaseAllChars(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Return the input if it's not a string or an empty string
  }
  if (str.toLowerCase() === "x-terra") {
    return "xterra";
  }

  return str.toLowerCase();
}

export default CarPromotionCard;
