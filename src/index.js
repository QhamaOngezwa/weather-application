function changeCity(event) {
  let searchInput = document.querySelector("#search-form-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
