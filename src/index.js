function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city-form");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
