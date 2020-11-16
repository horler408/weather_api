// Accessing Form DOM
const form = document.querySelector(".form")
const latitude = document.getElementById('lat');
const longitude = document.getElementById('lng');
// Display DOM
const title = document.querySelector(".title");
const tempSection = document.querySelector(".temperature-section")
const temperature = document.querySelector('.temperature__degree');
const unit = document.querySelector('.unit');
const description = document.querySelector('.temperature__description')
const img =document.querySelector(".location img");
const timezone = document.querySelector(".location-timezone")

const BASE_URL = 'https://fcc-weather-api.glitch.me/'
const proxy = "https://cors-anywhere.herokuapp.com/"  

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let lat = latitude.value;
    let lng = longitude.value;

    const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`;
})

window.addEventListener('load', () => {
    let lat;
    let lng;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position);
            lng = position.coords.longitude;
            lat = position.coords.latitude;

            const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`;
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                //Set DOM from API
                title.innerHTML = `${data.name}, ${data.sys.country}`
                timezone.textContent = data.timezone
                temperature.textContent = data.main.temp_max;
                description.textContent = data.weather[0].description;
                img.src = data.weather[0].icon

                // Temperature Formula
                let celsius = (data.main.temp - 32) * (5 / 9);

                //Change of Temperature
                tempSection.addEventListener("click", () => {
                    if(unit.textContent === "F") {
                        unit.textContent = "C"
                        temperature.textContent = Math.floor(celsius); 
                    } else {
                        unit.textContent = "F"
                        temperature.textContent = data.main.temp
                    }
                })
            })
        })
    }
})