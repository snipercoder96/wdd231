const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(webUrl) {

    try {
        const response = await fetch(webUrl);
        const data = await response.json();
        console.log(data)
        console.table(data.prophets); // creates a table to the console

        // place the cARDS IN HERE WHEN SUCCESSFUL
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error :", error);
    }


}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create setion, fullname protrait
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth ${prophet.birthplace}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}


getProphetData(url);