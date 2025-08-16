function searchCity(city) {
  let apiKey = "2da524bt368f04d046ed72d4c1o50bad";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2da524bt368f04d046ed72d4c1o50bad`;
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city-form");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
