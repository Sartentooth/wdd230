// Variables
let errorMessage = document.querySelector("#error-message");
const tagName = document.querySelector("input");
const form = document.querySelector("form");

// call to event listener and function
form.addEventListener("focusout", (event) => {
    const element = event.target;

    if (element.tagName.toLowerCase() === "input") {
        validateInputs(element);
    }
});

function validateInputs(element) {

    const pattern = element.pattern;
    const userInput = element.value;
    const regex = new RegExp(pattern);
    
    if (regex.test(userInput)) {
        element.style.background = "#b2f5c8";
        errorMessage.innerText = "";
    } else {
        element.style.background = "#f1bfbf";
        element.focus();
        errorMessage.innerText = `Please enter a valid Input`;
    }
}

form.addEventListener("submit", (event) => {
    const timeStampInput = document.querySelector("#dtime");
    const timeStamp = Date.now();
    timeStampInput.value = timeStamp;
});