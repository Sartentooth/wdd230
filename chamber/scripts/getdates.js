// List of the name of the week, Index starts in 0 to 6.
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Header Current Date
const current = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(current);
document.querySelector(".current-dateTime").innerHTML = fulldate;

// Last Modified 
const date = new Date();
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;
document.querySelector("#lastModified").innerHTML = document.lastModified;