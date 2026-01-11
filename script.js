function moveRandomEl(elm) {
  elm.style.position = "fixed";
  elm.style.top = Math.floor(Math.random() * 85 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 85 + 5) + "%";
  elm.style.zIndex = "100";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    moveRandomEl(e.target);
  });

  // Touch support for mobile
  moveRandom.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveRandomEl(e.target);
  });
}