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


        <div className="container-fluid text-center text-md-left " style={{"width":"90%"}}>
    
           
            <div className="row ">
    
               
                <div className="col-md-4 mt-md-0 mt-3" style={{textAlign:"center"}}>
    
                
                    <p >
                    <img src = {'/images/Full-Color.png'}
                    width="120" 

                    align="center"
                    alt='logo'
                    />
                    </p>
                    <h5 className="text-uppercase font-weight-bold">síguenos en redes</h5>
                    <div style={{"align":"center"}}>
                      <a href="https://www.facebook.com">
                          <i className="fa fa-facebook fa-3x icon-3d"></i>
                      </a>
                      <a href="https://www.instagram.com">
                          <i className="fa fa-instagram fa-3x icon-3d"></i>
                      </a>
                      <a href="https://wa.me/573155806571">
                          <i className="fa fa-whatsapp fa-3x icon-3d"></i> 
                      </a>
                    </div>
                </div>
              
    
                
    
              
                <div className="col-md-4 mb-md-0 mb-3">
                    <br/>
                   
                    <h5 className="text-uppercase font-weight-bold" >Nuestra sala de ventas</h5>
                    <p>
                      
                      <b>San Juan de Pasto, Nariño</b>
                      <br/>
                      AV Panamericana Calle 16 # 35 - 69
                      <br/> 
                      <br/>
                      <b> Horario de atención</b>
                      <br/>
                      Lunes a viernes: 8:00 am a 6:00 pm
                      Sabados y festivos: 8:00 am a 4:00 pm 
                    </p>
    
                </div>
        
                <div className="col-md-4 mb-md-0 mb-3" style={{ textDecoration: "none",
                                                                color: "inherit"}}>
                    <br/>
              
                    <h5 className="text-uppercase font-weight-bold">Para mayor informacion</h5>
                    <p>
                      
                        Jaime Figueroa Mora - Gerente
                        <br/>
                        Correo: <a className = "links" href="victoriautos@hotmail.com" target="_blank">victoriautos@hotmail.com</a>
                        <br/>
                        Celular:<a className = "links" href="3155806571" target="_blank">3155806571</a>
                
                    </p>
                </div>
            </div>
        </div>
      </div>
        
        
   
    
    )
}

export default Footer;