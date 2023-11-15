
const baseURL = "https://sartentooth.github.io/wdd230/";
const linksURL = "https://sartentooth.github.io/wdd230/chamber/data/links.json";
const cards = document.querySelector(".grid");

async function getCompanies() {
	const response = await fetch(linksURL);
	const data = await response.json();
	displayCompanies(data.getCompanies);
}

const displayCompanies = (companies) => {

	companies.forEach((company) => {

		let card = document.createElement("section");
		let name = document.createElement("h2");
		let slogan = document.createElement("h3");
		let address = document.createElement("p");
		let phone = document.createElement("p");
		let level = document.createElement("p");

		let url = document.createElement("a");
		url.setAttribute("href", company.websiteURL);
		url.setAttribute("target", "_blank");

		let logo = document.createElement("img");
		logo.setAttribute("src", company.logo);
		logo.setAttribute("alt", `logo of ${company.name}`);
		logo.setAttribute("loading", "lazy");
		logo.setAttribute("width", "100");
		logo.setAttribute("height", "100");

		name.textContent = `${company.name}`;
		slogan.textContent = `${company.slogan}`;
		address.textContent = `${company.address}`;
		phone.textContent = `${company.phone}`;
		level.textContent = `${company.membershipLevel}`;

		card.append(logo, name, slogan, address, phone, level, url);
		cards.appendChild(card);

	});
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}