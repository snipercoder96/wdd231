async function FetchCurrentWeatherAPI(currentweather) {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kempton Park&appid=baa7e33ec6d62758268dbeb3c75a676d&units=metric");
        const data = await response.json();

        const currentWeather = document.getElementById(currentweather);
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        currentWeather.innerHTML = `
            <h2>Current Weather</h2>
            <img src="${iconUrl}" alt="weather icon" width=150 height=150 >
            <p><strong>Description: </strong>${data.weather[0].description}</p>
            <p><strong>Temperature: </strong>${data.main.temp} °C</p>
            <p><strong>Humidity: </strong>${data.main.humidity}%</p>
        `;

    } catch (error) {

        const currentWeather = document.getElementById(currentweather);
        currentWeather.innerHTML =
            `<p><strong>Error → </strong>${error}`;
    }
}

async function FetchDailyWeatherAPI() {
    try {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=Kempton Park&appid=baa7e33ec6d62758268dbeb3c75a676d&units=metric"
        );
        const data = await response.json();

        const section = document.getElementById("weatherForecast");
        section.innerHTML = "<h2>3-Day Forecast (Average Temp)</h2>";

        // Collect exactly 3 unique dates
        const dates = [];
        for (let i = 0; i < data.list.length; i++) {
            const date = data.list[i].dt_txt.split(" ")[0];
            if (!dates.includes(date)) {
                dates.push(date);
            }
            if (dates.length === 3) break;
        }

        // Append each day directly to the section
        dates.forEach(date => {
            const dayTemps = data.list
                .filter(item => item.dt_txt.startsWith(date))
                .map(item => item.main.temp);

            const avgTemp = (dayTemps.reduce((sum, t) => sum + t, 0) / dayTemps.length).toFixed(1);

            section.innerHTML += `
                <p>
                    <strong>${new Date(date).toLocaleDateString("en-US", { weekday: "long" })}:</strong>
                    ${avgTemp} °C
                </p>
            `;
        });

    } catch (error) {
        document.getElementById("weatherForecast").innerHTML =
            `<p><strong>Error → </strong>${error.message}</p>`;
    }
}



export { FetchCurrentWeatherAPI, FetchDailyWeatherAPI };
