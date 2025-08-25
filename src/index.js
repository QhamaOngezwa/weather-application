function updateWeather(response) {
  let cityTemperature = document.querySelector(
    "#weather-app-temperature-value"
  );
  let currentTemperature = response.data.temperature.current;
  let cityName = document.querySelector("#city-name");
  let description = document.querySelector("#description");
  let cityHumidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let currentTime = document.querySelector("#time");
  let currentDate = new Date(response.data.time * 1000);

  currentTime.innerHTML = `${currentDate.getHours()}: ${
    currentDate.getMinutes
  },`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  cityHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
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
searchCity("Johannesburg");
