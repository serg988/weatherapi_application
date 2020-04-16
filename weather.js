class Weather {
    constructor(city, state) {
        this.apiKey = 'e328ba679e44498cbd2170842201504';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        return await response.json();
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}