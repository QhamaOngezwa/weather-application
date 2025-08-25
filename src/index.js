function updateWeather(response) {
  let cityTemperature = document.querySelector(
    "#weather-app-temperature-value"
  );
  let cityHumidity = document.querySelector;
  let currentTemperature = response.data.temperature.current;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = response.data.city;
  cityTemperature.innerHTML = Math.round(currentTemperature);
}
function searchCity(city) {
  let apiKey = "c0fete58adfd83d2733e0c0bo44abfc6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units = metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateWeather);
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
searchCity("Alice");
