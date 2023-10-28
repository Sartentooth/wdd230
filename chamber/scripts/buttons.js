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
const hamBox = document.querySelector(".box")
const main = document.querySelector("main");
const hr = document.querySelector("hr");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌒 Dark mode")) {
		body.style.background = "#282829";
		body.style.border = "none";
		header.style.background = "#191919";
		nav.style.background = "#424242";
		main.style.background = "#191919";
		footer.style.background = "#424242";
		header.style.color = "#F5F5F5";
		main.style.color = "#F5F5F5";
		footer.style.color = "#F5F5F5";
		hr.style.backgroundImage = "-webkit-linear-gradient(left, #424242, #F5F5F5, #424242)";
		hamBox.style.background = "#424242";
		modeButton.textContent = "🌘 Light mode ";
	} else {
		body.style.background = "#F5F5F5";
		body.style.border = "none";
		header.style.background = "#1D3559";
		nav.style.background = "#08689B"
		main.style.background = "#F5F5F5";
		footer.style.background = "#08689B";
		header.style.color = "#F5F5F5";
		main.style.color = "#000";
		footer.style.color = "#F5F5F5";
		hr.style.backgroundImage = "-webkit-linear-gradient(left, #08689B, #F5F5F5, #08689B)";
		hamBox.style.background = "#08689B";
		modeButton.textContent = "🌒 Dark mode";
	}
});