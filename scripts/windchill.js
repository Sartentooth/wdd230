// variables for Formula WindChill
// T = temperature in F
// V = Wind velocity in MPH

function windChill(T, V) {
    var wind_Chill = 35.74 + 0.6215 * T - 35.75 * (V ** 0.16) + 0.4275 * T * (V ** 0.16);
    return wind_Chill;
}

let T = 60.0;
let V = 5;
const result = Math.floor(windChill(T, V) * 10) / 10;

document.querySelector("#wind-info").innerHTML = `${result}°f`;
document.querySelector("#temperature").innerHTML = `${T}°f`;
document.querySelector("#wind-speed").innerHTML = `${V} mph`;
