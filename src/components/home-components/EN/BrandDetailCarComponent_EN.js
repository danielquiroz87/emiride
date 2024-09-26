import React, { useEffect, useState } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import CarCategoriesCard from '../../CarCategoriesCard';
import DocumentsRequired from './DocumentsRequired';

function BrandDetailCarComponent(){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { brand } = useParams(); // Access the route parameter
  
  
    useEffect(() => {
      fetchData(brand);
    }, []);
  
    const fetchData = async (brand) => {
      try {
        const response = await fetch('https://test-emiride.movlife.co/jsongoogle.php?marca='+brand); // Replace with your API endpoint
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
  
    const carBrands = data; // Get the car details based on the route parameter

    if (!carBrands) {
      return <p>Car not found</p>;
    }
    
    const carCategoriesComponents = [];
    carBrands.forEach((carDetails) => {
        carCategoriesComponents.push(
            <CarCategoriesCard {...carDetails} ></CarCategoriesCard>
        );
      });
   
    return(
        <div>
            <Helmet>
                <title>Emi Ride Rent a Car Dubai - Brands</title>
                <meta name="description" content="About our renting company, clarify your doubts about renting a car to ride on dubai" />
            </Helmet>

            <Header/>
            <div className="about-us-container">
                <div className='container'>
                  <div class="row">
                    <p className="us-tittle text-align-left">Rent a {brand} in Dubai</p>
                        <div className="row row-cols-1 row-cols-md-3 g-2">
                          {carCategoriesComponents}
                        </div>
                  </div>
                </div>
            </div>
            <br/>
            <div className='container required-documents d-flex align-items-center justify-content-center flex-column px-0'>
            <h2 className="required-documents-title my-2">DOCUMENTS REQUIRED</h2>
            <h2 className="required-documents-text">TO RENT A CAR IN DUBAI</h2>
          </div>
          <DocumentsRequired />
            <Footer/>
        </div>
    )
}

export default BrandDetailCarComponent;