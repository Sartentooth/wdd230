const date = new Date();
const year = date.getFullYear();

// List of the name of the week, Index starts in 0 to 6.
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// weather static for now.
const current_day = weekday[date.getDay()];
document.querySelector("#day-name").innerHTML = current_day;
document.querySelector("#wind-info").innerHTML = "windy";
document.querySelector("#temperature").innerHTML = "23°C";

// Last Modified 
document.querySelector("#year").innerHTML = year;
document.querySelector("#lastModified").innerHTML = document.lastModified;

