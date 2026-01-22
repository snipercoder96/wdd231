async function loadTodaysEvent() {
    try {
        const response = await fetch("./data/events.json");
        if (!response.ok) throw new Error("Events file not found");
        const events = await response.json();

        const today = new Date().toISOString().split("T")[0];
        const event = events.find(e => e.date === today);

        const container = document.querySelector("#events-container");
        if (event) {
            container.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <img src="images/events/${event.image}" alt="${event.title}">
            `;
        } else {
            container.textContent = "No events scheduled for today.";
        }
    } catch (error) {
        document.querySelector("#events-container").textContent = `Error loading events: ${error}`;
    }
}

export { loadTodaysEvent };