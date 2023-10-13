const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		body.style.background = "#282829";
		body.style.border = "1px solid #79D509";
		header.style.background = "#282829";
		nav.style.background = "#282829";
		main.style.background = "#282829";
		footer.style.background = "#282829";
		header.style.color = "#F5F5F5";
		main.style.color = "#F5F5F5";
		footer.style.color = "#F5F5F5";
		modeButton.textContent = "🌕";
	} else {
		body.style.background = "#F5F5F5";
		body.style.border = "1px solid #1D3559";
		header.style.background = "#1D3559";
		nav.style.background = "#08689B"
		main.style.background = "#F5F5F5";
		footer.style.background = "#08689B";
		header.style.color = "#F5F5F5";
		main.style.color = "#000";
		footer.style.color = "#F5F5F5";
		modeButton.textContent = "🌑";
	}
});