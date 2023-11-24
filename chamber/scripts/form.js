// Variables
let errorMessage;
const form = document.querySelector("form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const titleInput = document.querySelector("#title");
const emailInput = document.querySelector("#mail");
const phoneNumberInput = document.querySelector("#mobile-number");

// call to event listener and function
form.addEventListener("focusout", (event) => {
    const element = event.target;

    if (element.tagName === "input") {
        validateInputs(element);
    }
});


function validateInputs(element) {

    errorMessage = document.querySelector("#error-message");

    const pattern = element.pattern;
    const userInput = element.value;
    const regex = new RegExp(pattern);

    if (regex.test(userInput)) {
        element.style.background = "var(--bg-color-input-valid)";
        errorMessage.innerText = "";
    } else {
        element.style.background = "var(--bg-color-input-invalid)";
        element.focus();
        errorMessage.innerText = "Please enter a valid Input";
    }
}


