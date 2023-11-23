// Variables for API OpenWeatherMap
const APIKey = "6d0ff4a79c0420155a16e49153c8a8a5";
const lat = -34.65405441244451;
const long = -58.64360440136229;
const cnt = 32;

// Variables for Weather API
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");

// Variables for Forecast API
const forecastTemp = document.querySelector("#forecast-temp");
const forecastIcon = document.querySelector("#forecast-icon");
const forecastDesc = document.querySelector("#forecast-desc");
const forecastDate = document.querySelector(".day")

const forecastTemp1 = document.querySelector("#forecast-temp1");
const forecastIcon1 = document.querySelector("#forecast-icon1");
const forecastDesc1 = document.querySelector("#forecast-desc1");
const forecastDate1 = document.querySelector(".day1")

const forecastTemp2 = document.querySelector("#forecast-temp2");
const forecastIcon2 = document.querySelector("#forecast-icon2");
const forecastDesc2 = document.querySelector("#forecast-desc2");
const forecastDate2 = document.querySelector(".day2")

// WEATHER API CALL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKey}&units=metric`;

async function weatherAPIFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// FORECAST API CALL
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APIKey}&units=metric&cnt=${cnt}`;

async function forecastAPIFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
// Functions
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
}

function displayForecastResults(data) {

    forecastTemp.innerHTML = `${data.list[4].main.temp.toFixed(1)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`;
    let desc = data.list[4].weather[0].description;
    forecastIcon.setAttribute("src", iconsrc);
    forecastIcon.setAttribute("alt", "weather icon");
    forecastDesc.textContent = `${desc}`;
    forecastDate.textContent = getWeekDay(data.list[4].dt_txt.slice(0, 10));

    forecastTemp1.innerHTML = `${data.list[12].main.temp.toFixed(1)}&deg;C`;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[12].weather[0].icon}.png`;
    let desc1 = data.list[12].weather[0].description;
    forecastIcon1.setAttribute("src", iconsrc1);
    forecastIcon1.setAttribute("alt", "weather icon");
    forecastDesc1.textContent = `${desc1}`;
    forecastDate1.textContent = getWeekDay(data.list[12].dt_txt.slice(0, 10));

    forecastTemp2.innerHTML = `${data.list[20].main.temp.toFixed(1)}&deg;C`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`;
    let desc2 = data.list[20].weather[0].description;
    forecastIcon2.setAttribute("src", iconsrc2);
    forecastIcon2.setAttribute("alt", "weather icon");
    forecastDesc2.textContent = `${desc2}`;
    forecastDate2.textContent = getWeekDay(data.list[20].dt_txt.slice(0, 10));
}

function getWeekDay(day) {
    const week = new Date(day);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return current_day = weekday[week.getDay()];
}

weatherAPIFetch();
forecastAPIFetch();

