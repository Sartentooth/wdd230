// banner that appears only when have an Alert
const day = new Date();
const promo = document.querySelector('.banner');
const promoText = "WEATHER ALERT: ";
const button = document.querySelector(".close");

// by default only show on monday (1) tuesday (2) and wednesday (3).
// for testing porpuse change the value to another number between 0 to 6 (getDay()).
if (day.getDay() >= 1 && day.getDay() <= 3) {
    
    promo.innerHTML = promoText;
    promo.style.display = 'block';

    button.addEventListener("click", () => {
      
        if (button.textContent.includes("❌")) {
            promo.style.display = 'none';
            button.style.display = 'none';
        }
    });
}
else {
    promo.style.display = 'none';
    button.style.display = 'none';
}

// I used this for reference about how to hide elements.
// https://norfipc.com/inf/javascript-como-ocultar-mostrar-elementos-paginas-web.html