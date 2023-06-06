import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Link, useLocation } from 'react-router-dom'

import CarComponentWithChar from '../../CarComponentFromDetails';
function CarComponent({ img_src, alt_img, logo_src, price,price_week,price_month, price_msg, marca, linea, modelo, char_img, link }) {
  return (
    <div>
      <div className='car-container'>
        <Header/>
          <div className='container '>
            <div className='row pt-4'>
              <div className='col pt-4'>
                {/* <BreadCrumbCarDetail marca={marca} linea={linea}/>
                 */}
                 <BreadcrumbCarDetail marca={marca} linea={linea}/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-7 col-12 my-3 shadow-lg'>
                <CarComponentWithChar
                  img_src={img_src} 
                  alt_img={alt_img}
                  logo_src={logo_src} 
                  price={price}
                  price_msg={"Starting from"} 
                  marca={marca} 
                  linea={linea} 
                  modelo={modelo}
                  char_img={char_img}
                  link={link}
                />
              </div>
              <div className='col-md-5 col-12 my-3 '>
                <BookPanel char_img={char_img} price={price} price_week={price_week} price_month={price_month} link={link}/>
              </div>
            </div>

          </div>        
      </div>

      <Footer/>
    </div>
  );
}

function BreadcrumbCarDetail(props) {
  const location = useLocation();

  return (
    <nav className= "px-2" style={{ marginTop: '50px' }}>
      <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/#cars-for-rent"
        className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Cars For Rent
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/#cars-for-rent"
        className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        {lowercaseExceptFirst(props.marca)}
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to={`/cars-for-rent/${props.linea}`}
        className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        {lowercaseExceptFirst(props.linea)}
      </Link>
    </nav>
  );
}

function BookPanel(props){
  const location = useLocation();
  const isInicio = location.pathname === '/inicio';
  return(
    <div className="book-panel card car-card">
      <div className="container card-body">

        <div className='container-fluid align-items-center mt-2 mb-0 mx-2'>

          <h1 className='table-tittle '><CostIcon/> Our Rental Prices</h1>
        </div>
        
        <div className='container-fluid border border-dark rounded-4 my-4 py-2 shadow'>
          
          <div className='row mt-4 text-center'>

            {/* Prices table */}
            <table class="table table-borderless ">
              <thead>
                <tr>
                  <th className='mt-2 pt-3 table-text mb-0 pb-0'><p className='mb-0'>{props.price} AED</p></th>
                  <th className='mt-2 pt-3 table-text mb-0 pb-0'><p className='mb-0'>{props.price_week} AED</p></th>
                  <th className='mt-2 pt-3 table-text mb-0 pb-0'><p className='mb-0'>{props.price_month} AED</p></th>              
                </tr>
              </thead>
              <tbody className='p-0'>

                <tr>
                  <td className="col py-0"><p className='text-muted'>Daily</p></td>
                  <td className="col py-0"><p className='text-muted'>Weekly</p></td>
                  <td className="col py-0"><p className='text-muted'>Monthly</p></td>
                  
                </tr>
              </tbody>
            </table>
            {/* -Prices table */}
          </div>

          <div className='container d-flex align-items-center justify-content-center'>

            <button 
              onClick={() => {window.location.href = `${props.link}`}} 
              id={`${props.marca}-${props.linea}-SubmitBtn`} 
              className={`btn rounded-right-corners px-4 mb-3 shadow ${props.marca === 'LAMBORGHINI' ? 'bg-gold text-black fw-bold' : 'bg-black text-white'}`}
            >
              {isInicio ? (
                props.marca === 'LAMBORGHINI' ? 'Proximamente' : 'Reservar'
              ) : (
                props.marca === 'LAMBORGHINI' ? 'Coming Soon' : 'Book Now'
              )}
            </button>
                    
            {/* <button onClick={() => {window.location.href = `${link}`}} id={`${marca}-${linea}-SubmitBtn`} className={`btn rounded-right-corners text-white px-4 mb-3 ${marca === 'LAMBORGHINI' ? 'bg-gold' : 'bg-black'}`}>{marca === 'LAMBORGHINI' ? 'Coming Soon' : 'Book Now'}</button> */}
            {/* <button id={`${marca}-${linea}-SubmitBtn`} className={`btn rounded-right-corners text-white px-4 mb-3 ${marca === 'LAMBORGHINI' ? 'bg-gold' : 'bg-black'}`} style={{ fontSize: marca === 'LAMBORGHINI' ? '0.8rem' : '1rem', fontWeight: marca === 'LAMBORGHINI' ? 'bold' : 'normal' }}>{marca === 'LAMBORGHINI' ? 'Coming Soon' : 'Book Now'}</button> */}

          </div>
        </div>

        <div className='container-fuid py-3 my-2 hide-mobile-devices'>
          <h3 className='table-tittle'><CarIcon/> Car Features</h3>
        </div>
        <div className='row'>
          <img src={props.char_img}
            className='hide-mobile-devices'
              width="1024"
              height="417"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>
        </div>

      </div>
    </div>
  )
}

function CostIcon(){
  return(
    <span className="material-symbols-outlined">
    sell
    </span>
  )
}
function CarIcon(){
  return(
    <span className="material-symbols-outlined ">
      <h3 className='mt-2'>directions_car</h3>
    </span>
  )
}
function lowercaseExceptFirst(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Return the input if it's not a string or an empty string
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default CarComponent;
    