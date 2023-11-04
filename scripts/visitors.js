// Initialize display element variable
localStorage.clear();
const visitsDisplay = document.querySelector(".page-visitor");

// If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Date.now() timestamp
const msToDays = 84600000;

// today's date
const theDateToday = new Date();
const startVisitDay = theDateToday.getTime();

let startVisit = Number(window.localStorage.getItem("sTime") || startVisitDay);

localStorage.setItem("sTime", startVisit);

let dayBtw = (Date.now() - startVisit) / msToDays;


// Determine if this is the first visit or display the number of visits. 
// We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

if (dayBtw > 0 && dayBtw < 1) {
	document.querySelector(".today").textContent = "has vuelto muy rapido! Gracias";
} else {
	if (dayBtw.toFixed(0) == 1) {
		document.querySelector(".today").textContent = `ha pasado ${dayBtw.toFixed(0)} día desde tu ultima visita`;
	} else {
		document.querySelector(".today").textContent = `han pasado ${dayBtw.toFixed(0)} dias desde tu ultima visita`;
	}
}


// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);