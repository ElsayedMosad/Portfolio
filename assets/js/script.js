// Genral functions
function removeClass(ArrayOfElements, classTargetToRemove) {
  ArrayOfElements.forEach((element) => {
    if (element.classList.contains(classTargetToRemove)) {
      element.classList.remove(classTargetToRemove);
    }
  });
}
const leftSide = document.querySelector(".left-side");
const navLinks = document.querySelectorAll(".nav .nav-link");
// console.log(leftSide);

// add active link to a clicked
navLinks.forEach((e, index) => {
  e.addEventListener("click", function () {
    if (!e.classList.contains("active-link")) {
      removeClass(navLinks, "active-link");
      e.classList.add("active-link");
      if (index === 0 || index === navLinks.length - 1) {
        if (leftSide.classList.contains("play-left")) {
          leftSide.classList.remove("play-left");
        }
      } else if (!leftSide.classList.contains("play-left")) {
        leftSide.classList.add("play-left");
      }
    }
  });
});

// Toggle side
const toggleSide = document.querySelector(".toggle-side");
const containrContent = document.querySelector(".content .container");
toggleSide.addEventListener("click", (e) => {
  toggleSide.classList.toggle("toggle-open");
  containrContent.classList.toggle("more");
});
