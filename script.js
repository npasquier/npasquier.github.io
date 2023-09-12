/*
API for jokes
*/

var request = new XMLHttpRequest();

var isFirstDarkJoke = false;

function displayJoke() {
  isFirstDarkJoke = true;

  request.open("GET", "https://v2.jokeapi.dev/joke/Dark?type=single", true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    document.querySelector("#getJoke").innerHTML = data.joke;
  };

  setTimeout(() => {
    document.querySelector("#darkJokeID").innerHTML = "Come on ! One more !";
  }, 3000);

  setTimeout(() => {
    document.querySelector("#darkJokeID").innerHTML =
      "Last one ! Promise  ! ;p";
  }, 8000);

  request.send();
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

/*
Drum Kit
*/

function handleKeyboardActivation() {
  if (
    document.getElementById("keyboard-active").innerText === "Activate Keyboard"
  ) {
    console.log("Keyboard was active");
    document.getElementById("keyboard-active").innerText = "Disactivate Keyboard";
  }
  else if (
    document.getElementById("keyboard-active").innerText === "Disactivate Keyboard"
  ) {
    console.log("Keyboard was inactive");
    document.getElementById("keyboard-active").innerText = "Activate Keyboard";
  };
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function makeSound(keyPressed) {
  if (
    document.getElementById("keyboard-active").innerText === "Disactivate Keyboard"
  ) {
    switch (keyPressed) {
      case "a":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case "z":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case "e":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case "r":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case "i":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case "o":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      case "p":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log(keyPressed);
        break;
    }
  }
}

for (let i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll(".btn_drum")
    [i].addEventListener("click", function () {
      // var keyPressed = this.innerHTML ;
      makeSound(this.innerHTML);
      buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
  // var keyPressed = event.key ;
  // console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}


/*
Caroussel

*/
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
