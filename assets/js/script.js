const loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
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

// Music buttons
const audioOne = new Audio("assets/music/m1.mp3");
const audioTwo = new Audio("assets/music/m5.mp3");

const leftSide = document.querySelector(".left-side");
const navLinks = document.querySelectorAll(".nav .nav-link");

// add active link to a clicked
navLinks.forEach((e, index) => {
  e.addEventListener("click", function () {
    if (!funWorkOnLargeM() && containrContent.classList.contains("more-list")) {
      containrContent.classList.toggle("more-list");
      toggleSide.classList.toggle("toggle-open");
    }
    if (!e.classList.contains("active-link")) {
      removeClass(navLinks, "active-link", index);
      currentIndex = index;
      showCurrentSec(currentIndex);
      // Play-left on large media
      if (funWorkOnLargeM()) {
        classPlayLeft(index);
      }
    }
  });
});

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
    if (but.classList.contains("move-up")) {
      currentIndex++;
      if (currentIndex === navLinks.length) {
        currentIndex = 0;
      }
      showCurrentSec(currentIndex);
      removeClass(navLinks, "active-link", currentIndex);
      classPlayLeft(currentIndex);
      audioOne.play();
    } else if (but.classList.contains("move-down")) {
      currentIndex--;
      if (currentIndex === -1) {
        currentIndex = navLinks.length - 1;
      }
      showCurrentSec(currentIndex);
      removeClass(navLinks, "active-link");
      removeClass(navLinks, "active-link", currentIndex);
      classPlayLeft(currentIndex);
      audioTwo.play();
    }
  });
});

const about = document.querySelector(".about");
const aboutMe = document.querySelector(".about-me");
const aboutIcons = document.querySelector(".about-icons");
const aboutIconNum = document.querySelectorAll(".icon-num");

let start = false;
about.addEventListener("scroll", () => {
  if (about.scrollTop + about.offsetTop + 250 > aboutIcons.offsetTop) {
    if (!start) {
      aboutIconNum.forEach((e) => {
        counterIcon(e, e.dataset.number, 4000 / e.dataset.number);
      });
      start = true;
    }
  }
});

function counterIcon(ele, end, t) {
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == end) {
      clearInterval(count);
    }
  }, t);
}

const spanSkills = document.querySelectorAll(".span-show");
const spanParSkill = document.querySelectorAll(".span-text");
const aboutDesign = document.querySelector(".skills-design");
let doWidth = false;
about.addEventListener("scroll", () => {
  if (about.scrollTop + about.offsetTop + 200 > aboutDesign.offsetTop) {
    if (!doWidth) {
      // take span width from data width
      spanSkills.forEach((span) => {
        span.style.width = span.dataset.width;
      });
      spanParSkill.forEach((per) => {
        counterIcon(per, per.dataset.width, 2500 / per.dataset.width);
        // per.style.width = per.dataset.width;
      });
      doWidth = true;
    }
  }
});

// Recent Works Button in home section
const hireMe = document.querySelector(".hire-me");

hireMe.onclick = function () {
  currentIndex = 5;
  showCurrentSec(currentIndex);
  removeClass(navLinks, "active-link", currentIndex);
  if (funWorkOnLargeM()) {
    classPlayLeft(5);
  }
};

// Recent Works Button in home section
const recentWorks = document.querySelector(".home-works");

recentWorks.onclick = function () {
  currentIndex = 3;
  showCurrentSec(currentIndex);
  removeClass(navLinks, "active-link", currentIndex);
  if (funWorkOnLargeM()) {
    classPlayLeft(3);
  }
};
// Works search
const worksButs = document.querySelectorAll(".work-but");
const projectBox = document.querySelectorAll(".project-box");

worksButs.forEach((e, index) => {
  e.addEventListener("click", () => {
    currentItems(projectBox, e.dataset.type);
    removeClass(worksButs, "active-but", index);
  });
});
function currentItems(elements, currentData) {
  elements.forEach((e) => {
    if (e.dataset.pro == currentData && currentData !== "all") {
      e.style.cssText = `display: block;`;
    } else {
      e.style.cssText = `display: none;`;
    }
    if (currentData === "all") {
      e.style.cssText = `display: block;`;
    }
  });
}

const cursorOne = document.querySelector(".cursor-1");
const cursorTwo = document.querySelector(".cursor-2");

document.addEventListener("mousemove", function (e) {
  if (funWorkOnLargeM()) {
    cursorOne.style.cssText = `top: ${e.clientY}px;left: ${e.clientX}px`;
    cursorTwo.style.cssText = `top: ${e.clientY}px;left: ${e.clientX}px`;
    if (
      e.target.tagName.toLowerCase() === "a" ||
      e.target.parentElement.tagName.toLowerCase() === "a" ||
      e.target.tagName.toLowerCase() === "button" ||
      e.target.parentElement.tagName.toLowerCase() === "button"
    ) {
      cursorOne.classList.add("active-cursor");
    } else {
      cursorOne.classList.remove("active-cursor");
    }
  }
});

// //  slider

