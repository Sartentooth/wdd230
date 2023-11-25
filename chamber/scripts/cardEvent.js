
const baseURL = "https://sartentooth.github.io/wdd230/";
const linksURL = "https://sartentooth.github.io/wdd230/chamber/data/events.json";
const cardEvent = document.querySelector(".events");

async function getCompanies() {
	const response = await fetch(linksURL);
	const data = await response.json();
	displayCompany(data.events);
}

const displayCompany = (events) => {

	let event = events[Math.floor(Math.random() * events.length)];

	console.log(event);

    let card = document.createElement("section");
    let eventName = document.createElement("h2");
    let eventSlogan = document.createElement("h3");
    let eventAddress = document.createElement("p");
    let eventPhone = document.createElement("p");
  
    eventName.textContent = event.name;
    eventSlogan.textContent = event.slogan;
    eventAddress.textContent = event.address;
    eventPhone.textContent = event.phoneNumber;
  
    card.append(eventName, eventSlogan, eventAddress, eventPhone);
    cardEvent.appendChild(card);
}

getCompanies();