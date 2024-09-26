import React, { useEffect, useState } from 'react';
import CarCategoriesCard from '../CarCategoriesCard';

function HomeCategoryComponent(category){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
  
    useEffect(() => {
      fetchData(category);
    }, []);
  
    const fetchData = async (categoria) => {
      try {
        const response = await fetch('https://test-emiride.movlife.co/jsongoogle.php?categoria='+categoria.category); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log(categoria);
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
    const categoria=category
    let max=0;
    data.forEach((carDetails) => {
        max=max+1;
        if(max<=3){
          carCategoriesComponents.push(
            <CarCategoriesCard {...carDetails} ></CarCategoriesCard>
        );
        }
        
       
      });
   
    return(
             carCategoriesComponents 
    )
}

export default HomeCategoryComponent;