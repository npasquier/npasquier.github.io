
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
