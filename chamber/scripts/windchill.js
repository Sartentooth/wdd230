// variables for Formula WindChill
// T = temperature in F
// V = Wind velocity in MPH

const windInfo = document.querySelector("#wind-info");
const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#wind-speed");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    const T = document.querySelector("#temp").value;
    const V = document.querySelector("#wind").value;
    
    temperature.innerHTML = `${T}°F`;
    windSpeed.innerHTML = `${V} MPH`;

    if (T <= 50 && V > 3.0) {
        windInfo.innerHTML = `${Math.floor(windChill(T, V) * 10) / 10}°F`;
        btn.style.background = "green";
        btn.style.color = "white";
    }
    else {
        windInfo.innerHTML = "N/A";
        btn.style.background = "red";
        btn.style.color = "white";
    }    
});

function windChill(T, V) {
var wind_Chill = 35.74 + 0.6215 * T - 35.75 * (V ** 0.16) + 0.4275 * T * (V ** 0.16);
return wind_Chill;
}


