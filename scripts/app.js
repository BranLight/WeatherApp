const city_form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const update_ui = (data) => {
  // const city_details = data.city_details;
  // const weather = data.weather;

  // destructuring properties
  const { city_details, weather } = data;

  // update the details template
  details.innerHTML = `
    <h5 class="my-3">${city_details.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
  `;

  // update the night/day & icon images
  const icon_source = `icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', icon_source);

  // ternary operator to determine the background based on time of day
  let time_source = weather.IsDayTime ? 'backgrounds/day.svg' : 'backgrounds/night.svg';

  time.setAttribute('src', time_source);

  // rmeove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

const update_city = async (city) => {
  const city_details = await getCity(city);
  const weather = await getCurrentConditions(city_details.Key);

  return {
    city_details,
    weather
  };
};

city_form.addEventListener('submit', e => {
  // prevent default action on submmission
  e.preventDefault();

  // get city value
  const city = city_form.city.value.trim();
  city_form.reset();

  // update the UI with the new city
  update_city(city)
    .then(data => update_ui(data))
    .catch(err => console.log(err));

  // set local storage
  localStorage.setItem('city', city);
});

// check if the user has a city in local storage
// if there is, automatically show the weather
if(localStorage.getItem('city')){
  update_city(localStorage.getItem('city'))
    .then(data => update_ui(data))
    .catch(err => console.log(err));
}
