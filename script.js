


/*
API for jokes
*/

var request = new XMLHttpRequest() ;

function displayJoke() {
  request.open('GET', 'https://v2.jokeapi.dev/joke/Dark?type=single', true);
  request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    document.querySelector('#getJoke').innerHTML = data.joke;
  }
  
  request.send();
};

