function updateWeather(response) {
  console.log(response.data);
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
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
