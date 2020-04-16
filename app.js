// Init
// Get stored location data
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

// Get weather on DOM loaded
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // Change location
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    // Get and display weather again
    getWeather();
    $('#locModal').modal('hide');
})

function getWeather()
{
    weather.getWeather()
        .then(result => ui.paint(result))
        .catch(err => console.log(err))
}