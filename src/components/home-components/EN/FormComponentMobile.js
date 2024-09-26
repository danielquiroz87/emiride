import React, {useState} from "react";


function formatDate(date) {
    const dateArray = date.split("-"); // split the date string into an array
    dateArray.reverse(); // reverse the order of the elements in the array
    return dateArray.join("-"); // join the elements back into a string, separated by "-"
}

function FormComponentMobile(){

    const baseUrl = "https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/"
    
    const [from,setFrom] = useState("");
    const [to,setTo] = useState("");

    const [date_from,setDate_from] = useState("");
    const [hour_from,setHour_from] = useState("09:30");
    
    const [date_to,setDate_to] = useState("");
    const [hour_to,setHour_to] = useState("18:30");
    const [age, setAge] = useState(21);

    // Handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        // Build the URL htmlFor the external API
        const apiUrl = `${baseUrl}search?from=${from}&to=${to}&date_from=${formatDate(date_from)}&time_from=${hour_from}&date_to=${formatDate(date_to)}&time_to=${hour_to}`;
        // Redirect to the external API
        //window.location.href = apiUrl;
        var message = "New message from " + from + "\n\n"; // Pesan Pembuka
        message += "*to:* " + to + "\n";
        message += "*date_from:* " + formatDate(date_from) + "\n";
        message += "*time_from:* " + formatDate(hour_from) + "\n";
        message += "*date_to:* " + formatDate(date_to) + "\n\n";
        message += "*time_to:* " + formatDate(hour_to) + "\n\n";
        message += "=============================" + "\n";
        console.log(message);
        return false;
       
    };

    return(
        <form className="hide-on-desktop show-on-tablet-mobile-flex-form" id="mobile-booking-form"  onSubmit={handleSubmit} style={{height:620}}>
        <div className="container form-container-mobile">
            <h4 className="py-3 d-flex align-items-center justify-content-center form-tittle">RENT YOUR CAR IN DUBAI</h4>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="mobile-pick-up-place">Pick-up place <span className="red-color">*</span></label>
                        <select className="form-control" id="mobile-pick-up-place" value={from} onChange={(e) => setFrom(e.target.value)}>
                            <option value="0">- Choose -</option>    
                            <option value="3">Dubai International Airport - Terminal 1 - Dubai - United Arab Emirates</option>
                            <option value="4">Dubai International Airport - Terminal 2 - Dubai - United Arab Emirates</option>
                            <option value="5">Dubai International Airport - Terminal 3 - Dubai - United Arab Emirates</option>
                            <option value="13">Dubai International Airport (DXB) - Dubai - United Arab Emirates</option>
                            <option value="9">Downtown Dubai</option>
                            <option value="6">Dubai Marina</option>
                            <option value="12">Jumeirah Village Circle</option>
                            <option value="10">Jumeirah</option>
                            <option value="11">Dubai Silicon Oasis</option>
                            <option value="7">Abu Dhabi</option>
                            <option value="8">Sharjah</option>
                            <option value="14">EMI Ride Rent a Car Office</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile-drop-off-place">Drop-off place <span className="red-color">*</span></label>
                        <select className="form-control" id="mobile-drop-off-place" value={to} onChange={(e) => setTo(e.target.value)}>
                            <option value="0">- Choose -</option>    
                            <option value="3">Dubai International Airport - Terminal 1 - Dubai - United Arab Emirates</option>
                            <option value="4">Dubai International Airport - Terminal 2 - Dubai - United Arab Emirates</option>
                            <option value="5">Dubai International Airport - Terminal 3 - Dubai - United Arab Emirates</option>
                            <option value="13">Dubai International Airport (DXB) - Dubai - United Arab Emirates</option>
                            <option value="9">Downtown Dubai</option>
                            <option value="6">Dubai Marina</option>
                            <option value="12">Jumeirah Village Circle</option>
                            <option value="10">Jumeirah</option>
                            <option value="11">Dubai Silicon Oasis</option>
                            <option value="7">Abu Dhabi</option>
                            <option value="8">Sharjah</option>
                            <option value="14">EMI Ride Rent a Car Office</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile-startDate">Pick-up date <span className="red-color">*</span></label>
                        <input id="mobile-startDate" className="form-control" type="date"
                                              value={date_from}
                                              onChange={(e) => setDate_from(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile-endDate">Drop-off date <span className="red-color">*</span></label>
                        <input id="mobile-endDate" className="form-control" type="date" 
                                            value={date_to}
                                            onChange={(e) => setDate_to(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile-pick-up-hour">Pick-up hour <span className="red-color">*</span></label>
                        <select className="form-control" id="mobile-pick-up-hour" value={hour_from} onChange={(e) => setHour_from(e.target.value)}>
                            <option value="00:00" >00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile-drop-off-hour">Drop-off hour <span className="red-color">*</span></label>
                        <select className="form-control" id="mobile-drop-off-hour" value={hour_to} onChange={(e) => setHour_to(e.target.value)}>
                            <option value="00:00" >00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile-age">Age (years)</label>
                        <input type="number" min="21" max="80" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="mobile-age" />
                    </div>
                </div>


            </div>
            <div className="container py-4">
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <button type="submit" id="mobile-submitBtnMobile" className="btn btn-lg btn-secondary rounded-pill submit-button ">Book Now X</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default FormComponentMobile