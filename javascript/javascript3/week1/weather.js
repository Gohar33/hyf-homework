

//Weather app

const input = document.getElementById("hey")
const button = document.querySelector("button")
const weatherResult = document.querySelector(".weather-container")

function getCityWeather() {
    button.addEventListener("click", function () {
        const inputVal = input.value
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&apikey=0284346df0317b81c2e17a35dfbda0c4`
        if (!input.value) {
            alert("You should write a city name")
            return;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const name = document.querySelector("h2")
                name.innerHTML = data.name
                weatherResult.appendChild(name)

                const icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                const imgIcon = document.querySelector(".img")
                imgIcon.src = icon
                weatherResult.appendChild(imgIcon)

                const temp = document.querySelector(".temp")
                temp.innerHTML = Math.floor(data.main.temp) + "°";
                weatherResult.appendChild(temp)

                const weather = document.querySelector(".weather")
                weather.innerHTML = data.weather[0].main
                weatherResult.appendChild(weather)



                const windSpeed = document.querySelector(".wind")
                windSpeed.innerHTML = "Wind speed: " + data.wind.speed
                weatherResult.appendChild(windSpeed)

                const cloudy = document.querySelector(".cloudy")
                cloudy.innerHTML = "Cloudy: " + data.weather[0].description
                weatherResult.appendChild(cloudy)

                const sunrise = document.getElementById("sunrise")
                const sunrise1 = new Date(data.sys.sunrise * 1000);
                const timeChange = sunrise1.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });
                sunrise.innerHTML = "Sunrise: " + timeChange
                weatherResult.appendChild(sunrise)

                const sunset = document.querySelector(".sunset")
                const sunset1 = new Date(data.sys.sunset * 1000);
                const timeChange2 = sunset1.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });
                sunset.innerHTML = "Sunset: " + timeChange2
                weatherResult.appendChild(sunset)
            })

    })

}

getCityWeather(input.value)