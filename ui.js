class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.winddir = document.getElementById('w-wind-dir');
        this.updated = document.getElementById('w-updated');

    }
    paint(weather){
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `Temperature: ${weather.current.temp_c} deg.c`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative humidity: ${weather.current.humidity}`;
        this.feelslike.textContent = `Feels Like: ${weather.current.feelslike_c}`;
        this.pressure.textContent = `Pressure: ${weather.current.pressure_mb}`
        this.wind.textContent = `Wind speed, m/sec: ${Math.round(weather.current.wind_kph / 3.6)}`;
        this.winddir.textContent = `Wind direction : ${weather.current.wind_dir}`
        this.updated.textContent = `Last updated : ${weather.current.last_updated}`
    }
}