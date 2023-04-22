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