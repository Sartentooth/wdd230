// banner that appears only two days a week 
const day = date.getDay();
const promo = document.querySelector('.banner');
const promoText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
const button = document.querySelector(".close");

// by default only show on monday (1) tuesday (2) and wednesday (3).
// for testing porpuse change the value to another number between 0 to 6 (getDay()).
if (date.getDay() >= 1 && date.getDay() <= 3) {
    
    promo.innerHTML = promoText;
    promo.style.display = 'block';

    button.addEventListener("click", () => {
      
        if (button.textContent.includes("X")) {
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