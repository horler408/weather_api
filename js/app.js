const latitude = document.getElementById('lat');
const longitude = document.getElementById('lng');
const temperature = document.querySelector('.temperature__degree');
const unit = document.querySelector('.degree-section span');
const description = document.querySelector('.temperature__description')
const img =document.querySelector(".location img");
const timezone = document.querySelector(".location-timezone")

const BASE_URL = 'https://fcc-weather-api.glitch.me/'
const proxy = "https://cors-anywhere.herokuapp.com/" 

//const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`;

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

                timezone.innerHTML = data.timezone
                temperature.innerHTML = data.main.temp_max;
                description.innerHTML = data.weather[0].description;
                img.src = data.weather[0].icon
            })
        })
    }
})