const date = new Date();
const year = date.getFullYear();

// List of the name of the week, Index starts in 0 to 6.
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Header Current Date
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.querySelector(".current-dateTime").textContent = fulldate;


// Page Visitor static for now.
document.querySelector("#page-visitor").innerHTML = "1";


// Last Modified 
document.querySelector("#year").innerHTML = year;
document.querySelector("#lastModified").innerHTML = document.lastModified;


