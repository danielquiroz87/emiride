import React, { useEffect, useState } from 'react';
import CarCategoriesCard from '../CarCategoriesCard';

function CategoryCarouselItemComponent(category){


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
            <div className="col-md-4">
                        <div className="card">
                            <img src={`https://app2.movlife.co/static/images/${carDetails.img_src}`} className="card-img-top" alt="Imagen 1" />
                            <div className="card-body">
                                <h5 className="card-title">{category}</h5>
                                <a href="#" className="btn btn-primary">Botón y</a>
                            </div>
                        </div>
                    </div>
        );
      });
   
    return(
        <div>
             {carCategoriesComponents}
        </div>
    )
}

export default CategoryCarouselItemComponent;