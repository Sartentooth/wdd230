// toggle menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// header current date
const current = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(current);
document.querySelector(".current-dateTime").textContent = fulldate;

// footer date and last update
const date = new Date();
const year = date.getFullYear();
// const options = {
// weekday: "long",
// day: "numeric",
// month: "long",
// year: "numeric",
// hour: "numeric",
// minute: "numeric",
// second: "numeric",
// hour12: false
// };
// const fullDate = date.toLocaleDateString('en-US', options);
document.querySelector("#year").innerHTML = year;
document.querySelector("#current-date").innerHTML = document.lastModified;

// banner that appears only two days a week 
const day = date.getDay();
const promo = document.querySelector('.banner');
const promoText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

// by default only show on monday (1) and tuesday (2).
// for testing porpuse change the value to another number between 0 to 6 (getDay()).
if (date.getDay() == 6 || date.getDay() == 2) {
   
    promo.innerHTML = promoText;
    promo.style.display = 'block';
}
else {
    promo.style.display = 'none';
}

// I used this for reference about how to hide elements. 
// https://norfipc.com/inf/javascript-como-ocultar-mostrar-elementos-paginas-web.html