


/*
Display Menu upon Click on Image or Press 'v' 
*/


document.addEventListener("keydown", (e) => {
  if (e.key === 'v') {
    document.querySelector('nav').classList.toggle('hideHeader');
  } else {
    console.log(`"${e.key}" is not the right key. Try again :)`);
  }
});

document.querySelector("img").addEventListener("click", (e) => {
    document.querySelector('nav').classList.toggle('hideHeader');
  }
);

document.querySelector("img").addEventListener("touchstart", (e) => {
  setTimeout( () => {document.querySelector('nav').classList.remove('hideHeader');} , 4000)
}
);

/*
* Display arrow with delay
*/

setTimeout(() => {
  document.querySelector('.textArrow').classList.remove('hideArrow');
  document.querySelector('.arrow').classList.remove('hideArrow');
}, 3000);

