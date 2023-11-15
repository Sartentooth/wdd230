const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");
        let numofchildren = document.createElement("p");
        let death = document.createElement("p");
        let order = document.createElement("p");
        let years = document.createElement("p");
        let portrait = document.createElement("img");

        // check if the prophet is alive
        const deathAlive = `${(prophet.death == null) ? "alive" : "died, " + prophet.death}`;
        const orderOf = `${(prophet.death == null) ? "he is the " + prophet.order : "he was the " + prophet.order}° prophet of the Church`;
        const servedYears = `${(prophet.death == null) ? "currently serving as a prophet for " + prophet.length : "and served as a prophet for " + prophet.length} years`;

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `was born on ${prophet.birthdate}`;
        birthplace.textContent = `in the city of ${prophet.birthplace}`;
        numofchildren.textContent = `he had ${prophet.numofchildren} childrens`;
        death.textContent = deathAlive;
        order.textContent = orderOf;
        years.textContent = servedYears;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.append(fullName, birthdate, birthplace, numofchildren, death, order, years, portrait); //fill in the blank

        cards.appendChild(card);
    });
}