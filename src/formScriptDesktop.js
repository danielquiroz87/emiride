
window.onload = function () {
    const startDate = document.getElementById("startDate");
    const endDate   = document.getElementById("endDate");
    const today = new Date();
    startDate.value = today.toISOString().slice(0, 10);
    endDate.value = today.toISOString().slice(0, 10);
};

startDate.addEventListener('change',(e)=>{
let startDateVal = e.target.value // returns the date in this format "2022-12-07" (YYYY-MM-DD)

const current_date = new Date();
const isBeforeThisMoment = new Date(startDateVal) < current_date.setDate(current_date.getDate()-1);

// Checks if it is before this moment, if it is, set the value of the datepicker to an empty string
if(isBeforeThisMoment) startDate.value = current_date;
// The datepicker should now indicate that no date has been picked
}) 

endDate.addEventListener('change',(e)=>{
let endDateVal = e.target.value // returns the date in this format "2022-12-07" (YYYY-MM-DD)

const current_date = new Date();
const isBeforeThisMoment = new Date(endDateVal) < current_date.setDate(current_date.getDate()-1);

// Checks if it is before this moment, if it is, set the value of the datepicker to an empty string
if(isBeforeThisMoment) endDate.value = current_date;
// The datepicker should now indicate that no date has been picked
}) 

startDate.addEventListener('change',(e)=>{
let startDateVal = e.target.value
document.getElementById('startDate').innerText = startDateVal
})

endDate.addEventListener('change',(e)=>{
let endDateVal = e.target.value
document.getElementById('endDate').innerText = endDateVal
})  
// calendar script

function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(0), // get only two digits
    month = datePart[1], day = datePart[2];

    return day+'-'+month+'-'+year;
}

const url         = "https://emiride.renthubsoftware.com/en_GB/rental-booking-engine/"
const from        = document.getElementById('pick-up-place').value;
const to          = document.getElementById('drop-off-place').value;
const date_from   = formatDate(document.getElementById('startDate').value);
const time_from   = `${document.getElementById('pick-up-hour').value}:${document.getElementById('pick-up-minute').value}`
const date_to     = formatDate(document.getElementById('endDate').value);
const time_to     = `${document.getElementById('drop-off-hour').value}:${document.getElementById('drop-off-minute').value}`
const url_query   = `${url}search?from=${from}&to=${to}&date_from=${date_from}&time_from=${time_from}&date_to=${date_to}&time_to=${time_to}`;

function redirect(){
    console.log('redirecting')


    console.log('queryy',url_query);
    console.log('date_from',date_from);
    console.log('date_to',date_to);
    console.log('time_from',time_from);
    console.log('time_to',time_to);
    console.log('url_quert',url_query);

    window.location.href = url_query;
}
