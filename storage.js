class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Novorossiysk';
        this.defaultState = '';
    }
    getLocationData(){
        if (localStorage.getItem('city') === null){
            this.city = this.defaultCity;
            this.state = this.defaultState;
        } else {
            this.city = localStorage.getItem('city');
            this.state = localStorage.getItem('state');
        }

        if (localStorage.getItem('state') === null){
            this.state = this.defaultState;
        } else {
            this.state = localStorage.getItem('state');
        }
        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}