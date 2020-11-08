const latitude = document.getElementById('lat');
const longitude = document.getElementById('lng');

const BASE_URL = 'https://fcc-weather-api.glitch.me/'
//const lat = 35
//const lng = 139
const lat = latitude.value
const lng = longitude.value
console.log(lat);
const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`;

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

const weatherRequest = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
    
weatherRequest()