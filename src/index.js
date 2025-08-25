function changeCity(event) {
  event.preventDefault();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
let h1 = document.querySelector(".weather-app-city");
h1.innerHTML = city.value;
