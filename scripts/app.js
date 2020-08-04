const city_form = document.querySelector('.change-location');

const update_city = async (city) => {
  const city_details = await getCity(city);
  const weather = await getCurrentConditions(city_details.Key);

  return {
    city_details: city_details,
    weather: weather
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
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
