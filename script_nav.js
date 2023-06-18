/*
Display Menu upon Click on Image or Press 'v' 
*/

document.addEventListener("keydown", (e) => {
  if (e.key === "v") {
    document.querySelector("#nav-playground").classList.toggle("hideHeader");
    document.querySelector("#favicon").href = "./images/smile_inv.ico";
  } else {
    console.log(`"${e.key}" is not the right key. Try again :)`);
  }
});

document
  .querySelector(".profile-picture-img")
  .addEventListener("click", (e) => {
    document.querySelector("#nav-playground").classList.toggle("hideHeader");
    document.querySelector("#favicon").href = "./images/smile_inv.ico";
  });

document
  .querySelector(".profile-picture-img")
  .addEventListener("touchstart", (e) => {
    setTimeout(() => {
      document.querySelector("#nav-playground").classList.remove("hideHeader");
    }, 4000);
  });

/*
 * Animation
 */

const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("div-opacity-transition");
    } else {
      entry.target.classList.remove("div-opacity-transition");
    }
  });
});

document.querySelectorAll(".div-opacity").forEach((i) => {
  if (i) {
    observer.observe(i);
  }
});

/*
 * Read more
 */

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myReadMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
