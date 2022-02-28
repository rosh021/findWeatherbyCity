
const searchElm = document.querySelector(".search-weather");



const displayWeather = (data) => {
  const { name } = data;

  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".tempurature").innerText = temp + " °C";
  document.querySelector(".humidity").innerTest = "Humidity " + humidity + "%";
  document.querySelector(".wind").innerText = "wind Speed: " + speed + " Kmh";
  document.querySelector(".heading").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
};

const search = () => {
  fetchWeather(searchElm.value);
};

document.querySelector(".search-button").addEventListener("click", () => {
  search();
});

searchElm.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    search();
  }
});

const fetchWeather = (city) => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=78902c65366ecbfd628106db571d3d70&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayWeather(data);
    });
};

fetchWeather("Kathmandu");

