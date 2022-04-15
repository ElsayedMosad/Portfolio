// Genral functions
function removeClass(ArrayOfElements, classTargetToRemove, newIndexForClass) {
  ArrayOfElements.forEach((element, index) => {
    if (element.classList.contains(classTargetToRemove)) {
      element.classList.remove(classTargetToRemove);
    }
    if (index === newIndexForClass) {
      element.classList.add(classTargetToRemove);
    }
  });
}
const leftSide = document.querySelector(".left-side");
const navLinks = document.querySelectorAll(".nav .nav-link");

// navLinks.forEach((index))
// add active link to a clicked
navLinks.forEach((e, index) => {
  e.addEventListener("click", function () {
    if (!e.classList.contains("active-link")) {
      removeClass(navLinks, "active-link", index);
      // e.classList.add("active-link");
      // console.log(index);
      currentIndex = index;
      showCurrentSec(currentIndex);

      // Play-left on large media
      if (funWorkOnLargeM()) {
        classPlayLeft(index);
      }
    }
  });
});
// Return true in large media
function funWorkOnLargeM() {
  if (window.innerWidth > 992) {
    return true;
  } else return false;
}

// class play left depand on index
function classPlayLeft(index) {
  if (index === 0 || index === navLinks.length - 1) {
    if (leftSide.classList.contains("play-left")) {
      leftSide.classList.remove("play-left");
    }
  } else if (!leftSide.classList.contains("play-left")) {
    leftSide.classList.add("play-left");
  }
}

// return to true style
window.addEventListener("resize", reportWindowSize);
function reportWindowSize() {
  if (funWorkOnLargeM()) {
    navLinks.forEach((e, index) => {
      if (e.classList.contains("active-link")) {
        classPlayLeft(index);
      }
    });
  }
}

// Toggle side
const toggleSide = document.querySelector(".toggle-side");
const containrContent = document.querySelector(".content .container");
toggleSide.addEventListener("click", (e) => {
  toggleSide.classList.toggle("toggle-open");
  containrContent.classList.toggle("more-list");
});

// Date at Right side

const d = new Date();

// console.log(d)

const dateDay = document.getElementById("date-day");
dateDay.innerText = d.getDate();

const dateMonth = document.getElementById("date-month");
dateMonth.innerText = `${d} + `.slice(4, 7);

const dateYear = document.getElementById("date-year");
dateYear.innerText = d.getFullYear();

const sections = document.querySelectorAll(".section");
const mainContent = document.querySelector(".main-content");

// console.log(sections);

let currentIndex = 0;

function showCurrentSec(i) {
  sections.forEach((element, index) => {
    if (index === i) {
      element.classList.remove("show-sec");
      // element.classList.add("anim-sec");
    } else {
      element.classList.add("show-sec");
      // element.classList.remove("anim-sec");
    }
    mainContent.style.cssText = `transform: translateY(calc(-100% * ${i}));`;
  });
}
showCurrentSec(currentIndex);

const moveButs = document.querySelectorAll(".move .move-but");

moveButs.forEach((but) => {
  but.addEventListener("click", () => {
    // console.log(but)
    if (but.classList.contains("move-up")) {
      currentIndex++;
      if (currentIndex === navLinks.length) {
        currentIndex = 0;
      }
      showCurrentSec(currentIndex);
      removeClass(navLinks, "active-link", currentIndex);
      classPlayLeft(currentIndex);
    } else if (but.classList.contains("move-down")) {
      currentIndex--;
      if (currentIndex === -1) {
        currentIndex = navLinks.length - 1;
      }
      showCurrentSec(currentIndex);
      removeClass(navLinks, "active-link");
      removeClass(navLinks, "active-link", currentIndex);
      classPlayLeft(currentIndex);
    }
  });
});

const about = document.querySelector(".about");
const aboutMe = document.querySelector(".about-me");
const aboutIcons = document.querySelector(".about-icons");
const aboutIconNum = document.querySelectorAll(".icon-num");
// console.log(aboutIconNum);

let start = false;
about.addEventListener("scroll", () => {
  if (about.offsetTop + about.scrollTop + 200 > aboutIcons.offsetTop) {
  // if (about.scrollTop + 200 > aboutMe.clientHeight) {
    if (!start) {
      aboutIconNum.forEach((e) => {
        counterIcon(e, e.dataset.number);
      });
      start = true;
    }
  }
});

function counterIcon (ele, end) {
  let count = setInterval( () =>  {
    ele.textContent ++;
    if (ele.textContent == end) {
      clearInterval(count)
    }
  },100)
}