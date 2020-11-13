const latitude = document.getElementById('lat');
const longitude = document.getElementById('lng');

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
            })
        })
    }
})