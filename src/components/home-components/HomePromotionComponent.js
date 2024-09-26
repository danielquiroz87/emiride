import React, { useEffect, useState } from 'react';
import CarCategoriesCard from '../CarCategoriesCard';

function HomePromotionComponent(category){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
  
    useEffect(() => {
      fetchData(category);
    }, []);
  
    const fetchData = async (category) => {
      try {
        const response = await fetch('https://test-emiride.movlife.co/jsongoogle.php?promotion='+category); // Replace with your API endpoint
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
  
    const carCategories = data; // Get the car details based on the route parameter

    if (!carCategories) {
      return <p>Car not found</p>;
    }
    
    const carCategoriesComponents = [];
    data.forEach((carDetails) => {
        carCategoriesComponents.push(
            <CarCategoriesCard {...carDetails} ></CarCategoriesCard>
        );
      });
   
    return(
             carCategoriesComponents
    )
}

export default HomePromotionComponent;