


/*
Display Menu upon Click on Image or Press 'v' 
*/


document.addEventListener("keydown", (e) => {
  if (e.key === 'v') {
    document.querySelector('nav').classList.toggle('hideHeader');
    document.querySelector('#favicon').href="./images/smile_inv.ico";
  } else {
    console.log(`"${e.key}" is not the right key. Try again :)`);
  }
});

document.querySelector(".profile-picture-img").addEventListener("click", (e) => {
    document.querySelector('nav').classList.toggle('hideHeader');
    document.querySelector('#favicon').href="./images/smile_inv.ico";
  }
);

document.querySelector(".profile-picture-img").addEventListener("touchstart", (e) => {
  setTimeout( () => {document.querySelector('nav').classList.remove('hideHeader');} , 4000)
}
);

/*
* Display arrow with delay
*/

document.querySelector(".back-image").addEventListener("touchstart", (e) => {
  document.querySelector('.first-flex-arrow').classList.toggle('hideArrow');
  setTimeout( () => {document.querySelector('.first-flex-arrow').classList.add('hideArrow');} , 3000);
}
);

document.querySelector(".back-image").addEventListener("click", (e) => {
  document.querySelector('.first-flex-arrow').classList.toggle('hideArrow');
  setTimeout( () => {document.querySelector('.first-flex-arrow').classList.add('hideArrow');} , 3000);
}
);



