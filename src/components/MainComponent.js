import React, { lazy, Suspense } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'; //Switch changed to routes Also redirect is changed to Navigate since version 6


import HomeEn from './home-components/EN/HomeComponentEn';
import AboutUs from './home-components/EN/aboutComponent';
import HomeEs from './home-components/ES/HomeComponentEs';
import SobreNosotros from './home-components/ES/aboutComponent_ES';
import CarDetailPageEN from './home-components/EN/CarDetail_EN';
import CarDetailPageES from './home-components/ES/CarDetail_ES';

// import as here https://web.dev/code-splitting-suspense/

const TermsConditions = lazy(() => import('./home-components/EN/TermConditions'));
const TermsConditionsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <TermsConditions/>
  </Suspense>
)

const PrivacyPolicy = lazy(() => import('./home-components/EN/PrivacyPolicy'));
const PrivacyPolicyComponent = () => (
  <Suspense fallback={renderLoader()}>
    <PrivacyPolicy/>
  </Suspense>
)

const TermsConditionsEs = lazy(() => import('./home-components/ES/TermsConditions_ES'));
const TermsConditionsEsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <TermsConditionsEs/>
  </Suspense>
)

const PoliticaPrivacidad = lazy(() => import('./home-components/ES/PrivacyPolicy_ES'));
const PoliticaPrivacidadComponent = () => (
  <Suspense fallback={renderLoader()}>
    <PoliticaPrivacidad/>
  </Suspense>
)

// message for loading component
const renderLoader = () => <p>Loading</p>;

function Main(){
   

//   useEffect(() => {

//   }, []);

  return (  
    
    <div>
      
        <Routes>
            <Route path = "/"               element={<HomeEn/>}/>
            <Route path = "/about-us"       element={<AboutUs/>}/>
            <Route path = "/privacy-policy" element={<PrivacyPolicyComponent/>} />
            <Route path = "/terms-conditions" element={<TermsConditionsComponent/>} />
            <Route path = "/cars-for-rent/:car" element={<CarDetailPageEN/>}/>

            <Route path = "/inicio"         element={<HomeEs/>}/> 
            <Route path = '/sobre-nosotros' element={<SobreNosotros/>}/>
            <Route path = '/politica-privacidad' element={<PoliticaPrivacidadComponent/>}/>
            <Route path = "/terminos-condiciones" element={<TermsConditionsEsComponent/>} />
            <Route path = "/vehiculos-para-rentar/:car" element={<CarDetailPageES/>}/>

            <Route path = "*"               element={<Navigate to="/" />} />
            {/* Instead of redirect the above is needed to redirect if there is no matched url*/}
        </Routes>

    </div>
  );

};



export default Main;
