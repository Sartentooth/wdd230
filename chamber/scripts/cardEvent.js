
const baseURL = "https://sartentooth.github.io/wdd230/";
const linksURL = "https://sartentooth.github.io/wdd230/chamber/data/events.json";
const cardEvent = document.querySelector(".events");

async function getCompanies() {
	const response = await fetch(linksURL);
	const data = await response.json();
	displayCompany(data.companies);
}

const displayCompany = (companies) => {

	let company = companies[Math.floor(Math.random() * companies.length)];

	console.log(company);

	let card = document.createElement("section");
	let name = document.createElement("h2");
	let slogan = document.createElement("h3");
	let address = document.createElement("p");
	let phone = document.createElement("p");
	let level = document.createElement("p");

	let url = document.createElement("a");
	url.setAttribute("href", "#");
	url.setAttribute("target", "_blank");
	url.textContent = `${company.websiteURL}`;

	let logo = document.createElement("img");
	logo.setAttribute("src", company.logo);
	logo.setAttribute("alt", `logo of ${company.name}`);
	logo.setAttribute("loading", "lazy");
	logo.setAttribute("width", "100");
	logo.setAttribute("height", "100");

	name.textContent = `${company.name}`;
	slogan.textContent = `${company.slogan}`;
	address.textContent = `${company.address}`;
	phone.textContent = `${company.phoneNumber}`;
	level.textContent = `${company.membershipLevel}`;

	card.append(logo, name, slogan, address, phone, level, url);
	cardEvent.appendChild(card);
}

getCompanies();