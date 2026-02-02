async function interestPlace() {
    try {
        const response = await fetch("./data/interest.json");
        const data = await response.json();
        const interest = document.getElementById("places-of-int"); // get the div

        data.placesOfInterest.forEach(int => {
            
            const section = document.createElement("section"); // create section
            // give it a className for css
            section.classList.add("interest-cards");
            section.innerHTML +=
                `${int.image}
            ${int.title}
            ${int.description}
            ${int.address}
            `;
            interest.appendChild(section);

        });
    } catch (error) {
        const interest = document.getElementById("places-of-int");
        interest.innerHTML = `
        <p> Error found: ${error}`;
    }
}


export { interestPlace };