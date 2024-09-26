import React, { useEffect, useState } from 'react';
import CarItemImgComponent from './CarItemImgComponent';

function CategoryCarouselItemComponent({category}){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
  
    useEffect(() => {
      fetchData(category);
    }, []);
  
    const fetchData = async (category) => {
      try {
        const response = await fetch('https://test-emiride.movlife.co/jsongoogle.php?random=true&categoria='+category); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(category);
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
            <CarItemImgComponent {...carDetails}></CarItemImgComponent>
        );
      });
   
    return(
      <div className="col-md-4">
             {carCategoriesComponents}
      </div>
    )
}

export default CategoryCarouselItemComponent;