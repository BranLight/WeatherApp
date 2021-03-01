class Forecast{
  constructor(){
    this.key = API_KEY;
    this.city = "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.weather = "http://dataservice.accuweather.com/currentconditions/v1/"
  }

  async updateCity(city){
    const city_details = await this.getCity(city);
    const weather = await this.getCurrentConditions(city_details.Key);

    return {
      city_details,
      weather
    };
  }

  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxyUrl + this.city + query);
    const data = await response.json();
    return data[0];
  }

  async getCurrentConditions(city_code){
    const query = `${city_code}?apikey=${this.key}`;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxyUrl + this.weather + query);
    const data = await response.json();
    return data[0];
  }
}
