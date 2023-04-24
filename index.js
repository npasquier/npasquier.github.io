


// document.addEventListener('keydown', function (event) {
//     console.log(event.key);
//  }
//  );

document.addEventListener("keydown", (e) => {
    if (e.key === 'v') {
      document.querySelector('nav').classList.toggle('hideHeader');
    } else {
      console.log(`"${e.key}" is not the right key. Try again :)`);
    }
  });


// document.addEventListener("keydown", function (e) {
//       console.log(e.key);
//   });