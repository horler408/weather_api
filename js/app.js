const BASE_URL = 'https://fcc-weather-api.glitch.me/'
const lat = 35
const lng = 139

const URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`;

const weatherRequest = async () => {
    const response = await fetch(URL)
    const data = await response.json();

    console.log(data);
}

weatherRequest()