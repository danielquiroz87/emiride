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


    // Handle form submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        // Build the URL htmlFor the external API

        const apiUrl = `${baseUrl}search?from=${from}&to=${to}&date_from=${formatDate(date_from)}&time_from=${hour_from}&date_to=${formatDate(date_to)}&time_to=${hour_to}`;
        // Redirect to the external API
        window.location.href = apiUrl;
    };

    return(
        <form className="hide-on-desktop show-on-tablet-mobile-flex" id="booking-form"  onSubmit={handleSubmit}>
        <div className="container form-container-mobile">
            <h4 className="py-3 d-flex align-items-center justify-content-center form-tittle">MAKE YOUR RESERVATION</h4>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="pick-up-place">Pick-up place <span className="text-danger">*</span></label>
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
                        <label htmlFor="drop-off-place">Drop-off place <span className="text-danger">*</span></label>
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
                        <label htmlFor="startDate">Pick-up date <span className="text-danger">*</span></label>
                        <input id="startDate" className="form-control" type="date"
                                              value={date_from}
                                              onChange={(e) => setDate_from(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">Drop-off date <span className="text-danger">*</span></label>
                        <input id="endDate" className="form-control" type="date" 
                                            value={date_to}
                                            onChange={(e) => setDate_to(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pick-up-hour">Pick-up hour <span className="text-danger">*</span></label>
                        <select className="form-control" id="pick-up-hour" value={hour_from} onChange={(e) => setHour_from(e.target.value)}>
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
                        <label htmlFor="drop-off-hour">Drop-off hour <span className="text-danger">*</span></label>
                        <select className="form-control" id="drop-off-hour" value={hour_to} onChange={(e) => setHour_to(e.target.value)}>
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
                        <label htmlFor="age">Age (years)</label>
                        <select className="form-control" id="age">
                            <option value="21">21</option>    
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                            <option value="60">60</option>
                            <option value="61">61</option>
                            <option value="62">62</option>
                            <option value="63">63</option>
                            <option value="64">64</option>
                            <option value="65">65</option>
                            <option value="66">66</option>
                            <option value="67">67</option>
                            <option value="68">68</option>
                            <option value="69">69</option>
                            <option value="70">70</option>
                            <option value="71">71</option>
                            <option value="72">72</option>
                            <option value="73">73</option>
                            <option value="74">74</option>
                            <option value="75">75</option>
                            <option value="76">76</option>
                            <option value="77">77</option>
                            <option value="78">78</option>
                            <option value="79">79</option>
                            <option value="80">80</option>
                            
                        </select>
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

export default FormComponentMobile