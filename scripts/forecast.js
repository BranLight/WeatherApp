const key = "82lvXtmG63clzz8wddG5l3FB1aJyNYjh";

const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const response = await fetch(proxyUrl + base + query);
  const data = await response.json();

  return data[0];
};

const getCurrentConditions = async (city_code) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${city_code}?apikey=${key}`;
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const response = await fetch(proxyUrl + base + query);
  const data = await response.json();

  return data[0];
};

// getCity('laurel')
//   .then(data => {
//     return getCurrentConditions(data.Key)
//   }).then(data => {
//     console.log(data);
//   }).catch(err => {
//     console.log(err);
//   });
