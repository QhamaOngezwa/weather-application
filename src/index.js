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
  let weatherIcon = document.querySelector("#icon");

  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-temperature-icon"/>`;
  currentTime.innerHTML = formatDate(currentDate);
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  cityHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  cityName.innerHTML = response.data.city;
  cityTemperature.innerHTML = Math.round(currentTemperature);
  getForecast(response.data.city);
}
function formatDate(currentDate) {
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes},`;
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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return days[date.getDay()];
}
function getForecast(city) {
  let apiKey = "c0fete58adfd83d2733e0c0bo44abfc6";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response) {
  console.log(response.data);
  let forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 7) {
      forecastHTML += `<div class="weather-app-forecast-day">
       <div class="weather-app-forecast-date">${formatDay(day.time)}</div>
       <img  src="${day.condition.icon_url}" class="weather-app-forecast-icon">
       <div class="weather-app-forecast-temperatures">
       <div class="weather-app-forecast-temperature">
        <strong>${Math.round(day.temperature.maximum)}°</strong>
       </div><div class="weather-app-forecast-temperature">${Math.round(
         day.temperature.minimum
       )}°</div></div></div>`;
    }
  });

  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHTML;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
searchCity("Johannesburg");

displayForecast();
