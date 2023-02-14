import React from "react";
import whatsappIcon from '../static/images/whatsapp.svg';
function WhatsappIcon(){
    return(

    <a href="https://api.whatsapp.com/send/?phone=%2B971503323079&text=Hello+i+want+to+rent+a+car+with+EMI&type=phone_number&app_absent=0" className="floating" target="_blank">
        <img src={whatsappIcon} width="40" height="40" style={{alignItems:"center",textAlign:"center"}}/>
        <div className="notification">1</div>
    </a>
    )

}

export default WhatsappIcon;