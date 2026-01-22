// Date and Last modified
function footerInfo() {
    const modifiedDate = document.querySelectorAll("#current-year, #lastModified");
    modifiedDate[0].textContent = new Date().getFullYear();

    modifiedDate[1].textContent = document.lastModified;
}

// Fetch Events
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

// Current Weather
async function weatherInfo() {
    try {
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=4f61b733ffd7417b9b1145141261401&q=Kempton Park, ZA&aqi=no");
        if (!response.ok) throw new Error("Weather API error");
        const data = await response.json();

        const weatherDiv = document.createElement("div");
        weatherDiv.id = "current-weather";
        const iconURL = `https:${data.current.condition.icon}`;

        weatherDiv.innerHTML = `
            <h2>Current Weather</h2>
            <img src="${iconURL}" alt="Weather icon" loading="lazy" width=64 height=64>
            <p><strong>Condition</strong>: ${data.current.condition.text}</p>
            <p><strong>Temperature</strong>: ${data.current.temp_c} &deg;C</p>
            <p><strong>Humidity</strong>: ${data.current.humidity}%</p>
        `;
        document.getElementById("currentWeather").appendChild(weatherDiv);
        console.log("Weather icon URL:", iconURL);
    } catch (error) {
        document.getElementById("currentWeather").textContent = `Error retrieving weather: ${error}`;
    }
}

// Weather Forecast
async function weatherForecast() {
    try {
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=4f61b733ffd7417b9b1145141261401&q=Kempton Park, South Africa&days=3&aqi=no&alerts=no");
        if (!response.ok) throw new Error("Forecast API error");
        const data = await response.json();

        const days = data.forecast.forecastday;
        const weatherDiv = document.createElement("div");
        weatherDiv.id = "weather-forecast";
        weatherDiv.innerHTML = `
            <h2>Weather Forecast</h2>
            ${days.map(d => `
                <p><strong>${new Date(d.date).toLocaleDateString("en-US", { weekday: "long" })}:</strong> 
                ${d.day.avgtemp_c} &deg;C</p>
            `).join("")}
        `;
        document.getElementById("weatherForecast").appendChild(weatherDiv);
    } catch (error) {
        document.getElementById("weatherForecast").textContent = `Error retrieving forecast: ${error}`;
    }
}

// Business Info
async function businessInfo() {
    try {
        const response = await fetch("./data/members.json");
        if (!response.ok) throw new Error("Members file not found");
        const data = await response.json();

        const businessInfo = document.getElementById("business-info");
        data.forEach(d => {
            const membersDiv = document.createElement("div");
            membersDiv.className = "members-card";
            membersDiv.innerHTML = `
                <img src="${d.image}" alt="${d.name}" loading="lazy">
                <h3>${d.name}</h3>
                <p>${d.tagline}</p>
                <p><strong>Email</strong>: ${d.email}</p>
                <p><strong>Phone</strong>: ${d.phone}</p>
                <p><strong>URL</strong>: <a href="${d.website}" target="_blank">${d.website}</a></p>
            `;
            businessInfo.appendChild(membersDiv);
        });
    } catch (error) {
        document.getElementById("business-info").textContent = `Error loading businesses: ${error}`;
    }
}

// Hamburger Menu
function hamburgerButton() {
    const button = document.getElementById("ham-btn");
    const navigation = document.getElementById("nav-toggle");

    button.addEventListener("click", () => {
        navigation.classList.toggle("show");
        button.textContent = navigation.classList.contains("show") ? "\u00D7" : "\u2630";
    });
}

// Toggle list/grid view
function viewToggle() {
    const businessInfo = document.getElementById("business-info");
    const gridBtn = document.getElementById("grid-view");
    const listBtn = document.getElementById("list-view");

    businessInfo.classList.add("grid");

    gridBtn.addEventListener("click", () => {
        businessInfo.classList.add("grid");
        businessInfo.classList.remove("list");
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
        businessInfo.classList.add("list");
        businessInfo.classList.remove("grid");
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    });
}

// Run functions
hamburgerButton();
weatherForecast();
businessInfo();
weatherInfo();
loadTodaysEvent();
footerInfo();
viewToggle();