import React, {useState} from "react";

function formatDate(date) {
    const dateArray = date.split("-"); // split the date string into an array
    dateArray.reverse(); // reverse the order of the elements in the array
    return dateArray.join("-"); // join the elements back into a string, separated by "-"
  }

function FormComponent(){
    const baseUrl = "https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/"
    
    const [from,setFrom] = useState("");
    const [to,setTo] = useState("");

    const [date_from,setDate_from] = useState("");
    const [hour_from,setHour_from] = useState("09");
    const [minute_from,setMinute_from] = useState("30");
    
    const [date_to,setDate_to] = useState("");
    const [hour_to,setHour_to] = useState("18");
    const [minute_to,setMinute_to] = useState("30");

    const [age, setAge] = useState(21);

    // Handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        // Build the URL htmlFor the external API

        const time_from = hour_from+':'+minute_from;
        const time_to = hour_to+':'+minute_to;
        const apiUrl = `${baseUrl}search?from=${from}&to=${to}&date_from=${formatDate(date_from)}&time_from=${time_from}&date_to=${formatDate(date_to)}&time_to=${time_to}`;
        // Redirect to the external API
        window.location.href = apiUrl;
    };

    return(

        <form className="form-container" id="booking-form" onSubmit={handleSubmit}>
        <div className="container">
            <h3 className="py-3 form-tittle">MAKE YOUR RESERVATION</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="pick-up-place">Pick-up place <span className="red-color">*</span></label>
                        <select className="form-control" id="pick-up-place" value={from} onChange={(e) => setFrom(e.target.value)}>
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
                        <label htmlFor="startDate">Pick-up date <span className="red-color">*</span></label>
                        <input id="startDate" className="form-control" type="date"           
                                              value={date_from}
                                              onChange={(e) => setDate_from(e.target.value)}/>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="pick-up-hour">Pick-up hour <span className="red-color">*</span></label>
                            <select className="form-control" id="pick-up-hour" value={hour_from} onChange={(e) => setHour_from(e.target.value)}>
                                <option value="00">12 am</option>
                                <option value="01">1 am</option>
                                <option value="02">2 am</option>
                                <option value="03">3 am</option>
                                <option value="04">4 am</option>
                                <option value="05">5 am</option>
                                <option value="06">6 am</option>
                                <option value="07">7 am</option>
                                <option value="08">8 am</option>
                                <option value="09" >9 am</option>   
                                <option value="10">10 am</option>
                                <option value="11">11 am</option>
                                <option value="12">12 am</option>
                                <option value="13">1 pm</option>
                                <option value="14">2 pm</option>
                                <option value="15">3 pm</option>
                                <option value="16">4 pm</option>
                                <option value="17">5 pm</option>
                                <option value="18">6 pm</option>
                                <option value="19">7 pm</option>
                                <option value="20">8 pm</option>
                                <option value="21">9 pm</option>
                                <option value="22">10 pm</option>
                                <option value="23">11 pm</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="pick-up-minute">Pick-up minute</label>
                            <select className="form-control" id="pick-up-minute" value={minute_from} onChange={(e) => setMinute_from(e.target.value)}>
                                <option value="00">00</option>
                                <option value="30" >30</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age (years)</label>
                        <input type="number" min="21" max="80" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="age" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="drop-off-place">Drop-off place <span className="red-color">*</span></label>
                        <select className="form-control" id="drop-off-place" value={to} onChange={(e) => setTo(e.target.value)}>
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
                        <label htmlFor="endDate">Drop-off date <span className="red-color">*</span></label>
                        <input id="endDate" className="form-control" type="date"           
                                            value={date_to}
                                            onChange={(e) => setDate_to(e.target.value)}/>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="drop-off-hour">Drop-off hour <span className="red-color">*</span></label>
                            <select className="form-control" id="drop-off-hour" value={hour_to} onChange={(e) => setHour_to(e.target.value)}>
                                <option value="00">12 am</option>
                                <option value="01">1 am</option>
                                <option value="02">2 am</option>
                                <option value="03">3 am</option>
                                <option value="04">4 am</option>
                                <option value="05">5 am</option>
                                <option value="06">6 am</option>
                                <option value="07">7 am</option>
                                <option value="08">8 am</option>
                                <option value="09">9 am</option>   
                                <option value="10">10 am</option>
                                <option value="11">11 am</option>
                                <option value="12">12 am</option>
                                <option value="13">1 pm</option>
                                <option value="14">2 pm</option>
                                <option value="15">3 pm</option>
                                <option value="16">4 pm</option>
                                <option value="17">5 pm</option>
                                <option value="18" >6 pm</option>
                                <option value="19">7 pm</option>
                                <option value="20">8 pm</option>
                                <option value="21">9 pm</option>
                                <option value="22">10 pm</option>
                                <option value="23">11 pm</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="drop-off-minute">Drop-off minute</label>
                            <select className="form-control" id="drop-off-minute" value={minute_to} onChange={(e) => setMinute_to(e.target.value)}>
                                <option value="00">00</option>
                                <option value="30" >30</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <button type="submit" id="submitBtn" className="btn btn-lg btn-secondary rounded-pill submit-button ">Book Now</button>
                    </div>
                </div>
            </div>
        </div>

    </form>

    )
}

export default FormComponent;