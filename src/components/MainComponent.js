import React, { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'; //Switch changed to routes Also redirect is changed to Navigate since version 6


import HomeEn from './home-components/EN/HomeComponentEn';
import HomeEs from './home-components/ES/HomeComponentEs';

function Main(){
   


//   useEffect(() => {

//   }, []);

  return (  
    
    <div>
      
        <Routes>
            <Route path = "/"       element={<HomeEn/>}/> 
            <Route path = "/inicio" element={<HomeEs/>}/> 
            <Route path = "*"       element={<Navigate to="/" />} />
            {/* Instead of redirect the above is needed to redirect if there is no matched url*/}
        </Routes>

    </div>
  );

};



export default Main;
