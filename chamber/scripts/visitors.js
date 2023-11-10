// variables to store elements
const visitsDisplay = document.querySelector(".page-visitor");
const today = document.querySelector(".today");

// variables for Date Time Stamp
const msToDays = 84600000;
const theDateToday = new Date();
const startVisitDay = theDateToday.getTime();
const dnow = Date.now();

// variables for localStorage
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let startVisit = Number(window.localStorage.getItem("sTime") || startVisitDay);

// calculate the interval between days related to user visits
// TIP for testing purpose replace the code using this:
// (Date.now() - startVisit + 99999999) / msToDays; (value for a day after)
let dayBtw = (dnow - startVisit) / msToDays;
// check if it is the first visit 
// if it is false, display number of the visit
// otherwise, display welcome message
if (numVisits !== 0) {

	visitsDisplay.textContent = numVisits;
	
	// check if the visit is on the same day - if so, display one of three messages.
	if (dayBtw > 0 && dayBtw < 1) {
		today.textContent = "Back so soon! Awesome!";
	} else {
		if (dayBtw.toFixed(0) == 1) {
			today.textContent = `You last visited ${dayBtw.toFixed(0)} day ago`;
		} else {
			today.textContent = `You last visited ${dayBtw.toFixed(0)} days ago`;
		}
	}
} else {
	today.textContent = `Welcome! Let us know if you have any questions`;
}

// increase numVisits by 1 
numVisits++;

// store the new values for localStorage variables
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("sTime", startVisit);
localStorage.setItem("dnow", dnow)
