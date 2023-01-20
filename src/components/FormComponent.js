import React from "react";

function FormComponent(){

    return(
        <div>

        <form id="booking-form" action="javascript:redirect()">
        <div className="container form-container">
            <h3 className="py-3">Make your reservation</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label for="pick-up-place">Pick-up place <span className="text-danger">*</span></label>
                        <select className="form-control" id="pick-up-place">
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
                        <label for="startDate">Pick-up date <span className="text-danger">*</span></label>
                        <input id="startDate" className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="pick-up-hour">Pick-up hour <span className="text-danger">*</span></label>
                            <select className="form-control" id="pick-up-hour">
                                <option value="00">12 am</option>
                                <option value="01">1 am</option>
                                <option value="02">2 am</option>
                                <option value="03">3 am</option>
                                <option value="04">4 am</option>
                                <option value="05">5 am</option>
                                <option value="06">6 am</option>
                                <option value="07">7 am</option>
                                <option value="08">8 am</option>
                                <option value="09" selected>9 am</option>   
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
                            <label for="pick-up-minute">Pick-up minute</label>
                            <select className="form-control" id="pick-up-minute">
                                <option value="00">00</option>
                                <option value="30" selected>30</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="age">Age (years)</label>
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

                <div className="col-6">
                    <div className="form-group">
                        <label for="drop-off-place">Drop-off place <span className="text-danger">*</span></label>
                        <select className="form-control" id="drop-off-place">
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
                        <label for="endDate">Drop-off date <span className="text-danger">*</span></label>
                        <input id="endDate" className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="drop-off-hour">Drop-off hour <span className="text-danger">*</span></label>
                            <select className="form-control" id="drop-off-hour">
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
                                <option value="18" selected>6 pm</option>
                                <option value="19">7 pm</option>
                                <option value="20">8 pm</option>
                                <option value="21">9 pm</option>
                                <option value="22">10 pm</option>
                                <option value="23">11 pm</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label for="drop-off-minute">Drop-off minute</label>
                            <select className="form-control" id="drop-off-minute">
                                <option value="00">00</option>
                                <option value="30" selected>30</option>
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

    </div>
    )
}

export default FormComponent;