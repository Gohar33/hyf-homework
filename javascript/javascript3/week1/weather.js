

//Weather app

const input = document.getElementById("hey")
const button = document.querySelector("button")
const weatherResult = document.querySelector(".weather-container")

function getCityWeather() {
    button.addEventListener("click", function () {
        let inputVal = input.value
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&apikey=0284346df0317b81c2e17a35dfbda0c4`
        if (!input.value) {
            alert("You should write a city name")
            return;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let name = document.querySelector("h2")
                name.innerHTML = data.name
                weatherResult.appendChild(name)

                const icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                let imgIcon = document.querySelector(".img")
                imgIcon.src = icon
                weatherResult.appendChild(imgIcon)

                let temp = document.querySelector(".temp")
                temp.innerHTML = Math.floor(data.main.temp) + "°";
                weatherResult.appendChild(temp)

                let weather = document.querySelector(".weather")
                weather.innerHTML = data.weather[0].main
                weatherResult.appendChild(weather)



                let windSpeed = document.querySelector(".wind")
                windSpeed.innerHTML = "Wind speed: " + data.wind.speed
                weatherResult.appendChild(windSpeed)

                let cloudy = document.querySelector(".cloudy")
                cloudy.innerHTML = "Cloudy: " + data.weather[0].description
                weatherResult.appendChild(cloudy)

                let sunrise = document.getElementById("sunrise")
                let sunrise1 = new Date(data.sys.sunrise * 1000);
                let timeChange = sunrise1.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });
                sunrise.innerHTML = "Sunrise: " + timeChange
                weatherResult.appendChild(sunrise)

                let sunset = document.querySelector(".sunset")
                let sunset1 = new Date(data.sys.sunset * 1000);
                let timeChange2 = sunset1.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });
                sunset.innerHTML = "Sunset: " + timeChange2
                weatherResult.appendChild(sunset)
            })

    })

}

getCityWeather(input.value)