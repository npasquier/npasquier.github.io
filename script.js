/*
API for jokes
*/

var request = new XMLHttpRequest();

function displayJoke() {
  request.open("GET", "https://v2.jokeapi.dev/joke/Dark?type=single", true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    document.querySelector("#getJoke").innerHTML = data.joke;
  };

  request.send();
}

/*
API for weather (with another get method)
*/

function displayWeather() {
  const query = document.getElementById("cityInput").value;
  if (query !== "") {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=a9bc0664251a52a2051c28a3ce415070&units=metric";
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        const status = data.cod;
        if (status == 200) {
          const temp = data.main.temp;
          const weather = data.weather[0].description;
          const icon = data.weather[0].icon;
          const imageURL =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
          document.querySelector("#getWeather").innerHTML =
            "The current weather in " +
            query +
            " is " +
            data.weather[0].description +
            "<br>" +
            "The temperature is of " +
            temp +
            " degrees Celcius. <br>" +
            "<img src= " +
            imageURL +
            ">";
          // console.log(data.cod);
          // console.log(data.weather[0].description);
          // console.log(data.main.temp);
          // console.log(data);
        } else {
          document.querySelector("#getWeather").innerHTML =
            "The API does not recognize this city.. <br> (it might be because your city name is not written in english)";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (query == "") {
    document.querySelector("#getWeather").innerHTML =
      "Don't forget to enter a city name :)";
  }
}

/*
Dropdown nav btn
*/

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
