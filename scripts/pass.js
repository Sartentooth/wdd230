const rangevalue = document.querySelector(".rangevalue");
const range = document.querySelector("#range");

const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", areEquals);

function areEquals() {
	if (pass1.value !== pass2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#eb7676";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#76eb9d";
		pass2.style.color = "#000";
	}
}


// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}