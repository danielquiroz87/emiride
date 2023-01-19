import React from 'react';

// import {Link} from 'react-router-dom';

//will render in any location except /admin
function Footer() {
    // logic to render footer

    return(

        <div className="footer rounded-top rounded-3" style={{backgroundColor: "#ffffff",
                                        color:"black",
                                        // little border radius in top corners
                                        
                                        }} >


        <div className="container-fluid text-left " >
    
            <div className="row align-items-center justify-content-center ">
              
                <div className="col-md-3 col-6" >
                    
                    <p className='text-center'>
                    <img src = {'/images/Full-Color.webp'}
                    className="mt-4"
                    width={"90%"} 
                    height={"90%"}
                    
                    alt='logo'
                    />
                    </p>
                </div>

                <div className="col-md-3 col-6">
                    <b><p className="text-uppercase mt-4" >Explore</p></b>
                    <p>About Us</p>
                    <p>Cars For Rent</p>
                    <p>Contact Us</p>
                </div>
        
                <div className="col-md-3 col-6" style={{ textDecoration: "none", color: "inherit"}}>
                    <b><p className="text-uppercase mt-4">Customer Care</p></b>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>

                <div className="col-md-3 col-6" style={{ textDecoration: "none", color: "inherit"}}>
                    <b><p className="text-uppercase mt-4">Connect</p></b>
                    <p>Dubai UAE</p>
                    <p>+971 50 332 3079</p>
                    <p>info@emiride.com</p>
                </div>

            </div>
        </div>
      </div>

    
    )
}

export default Footer;


