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
    document.querySelector("#darkJokeID").innerHTML = "Last one ! Promise  ! ;p";
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

var numberOfDrumButtons= document.querySelectorAll(".drum").length;



function makeSound(keyPressed) {
    switch (keyPressed) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(keyPressed);
            break;
    };
} ;


for (let i = 0 ; i < numberOfDrumButtons ; i++) {
     document.querySelectorAll(".btn_drum")[i].addEventListener("click", function (){
        // var keyPressed = this.innerHTML ;
        makeSound(this.innerHTML) ;
        buttonAnimation(this.innerHTML);

     });
      
 };

 document.addEventListener('keydown', function (event) {
    // var keyPressed = event.key ;
    // console.log(event.key);
    makeSound(event.key) ;
    buttonAnimation(event.key);
 }
 );

 function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function () {
    activeButton.classList.remove("pressed")
   }, 100)
 }
