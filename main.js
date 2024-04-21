const apikey = "6c23ff3c27a37c1bfccc7d898638f86a";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".data input");
const searhbtn = document.querySelector(".data button");
const weathericon = document.querySelector(".weather-icon");
const maincard = document.querySelector(".card");

async function checkwheather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Humidity") {
    weathericon.src = "images/humidity.png";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weathericon.src = "images/snow.png";
  } else if (data.weather[0].main == "Wind") {
    weathericon.src = "images/wind.png";
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".hum").innerHTML = data.main.humidity + "%";
  document.querySelector(".win").innerHTML = data.wind.speed + "Km/h";
}

searhbtn.addEventListener("click", function () {
  // console.log("hi");
  checkwheather(searchbox.value);

  maincard.style.height = "500px";
});
