const loader = document.getElementById("loader");
window.addEventListener("load", function () {
  // console.log('load')
  // console.log(loader)
  loader.style.display = "none";
  // console.log('load')
  // console.timeEnd
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

//  slider
const slides = document.getElementsByClassName("test-box"); // this selection is a live collection; any changes in DOM is updated in the variable unlike querySelectors
const testimonialBullets = document.querySelectorAll(".item-bullet");
const btnLeft = document.querySelector(`.btn-left`);
const btnRight = document.querySelector(`.btn-right`);

let currentSlideIndex = 0;
let lastSlideIndex = slides.length - 1;

// go to a slide;
function goToSlide(slideIndex) {
  [...slides].forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slideIndex)}%)`;
  });
  currentSlideIndex = slideIndex;
}
goToSlide(currentSlideIndex);

// make ready the next slide if current slide is the first or the last slide
function readyNextSlide() {
  // if currentSlide is the last slide, shift the first slide to the end
  if (currentSlideIndex === lastSlideIndex) {
    slides[lastSlideIndex].insertAdjacentElement("afterend", slides[0]);
    slides[lastSlideIndex].style.transform = `translateX(${100}%)`;
    currentSlideIndex--; //this is because current slide is now the second last slide
  }
  // if currentSlide is the first slide, shift the last slide to the beginning
  if (currentSlideIndex === 0) {
    slides[0].insertAdjacentElement("beforebegin", slides[lastSlideIndex]);
    slides[0].style.transform = `translateX(-${100}%)`;
    currentSlideIndex++; //this is because current slide is now the second slide
  }
}

// put the last slide in the beginning; ('if' condition is not necessary but providing if condition is future proof if user sets the initial slide to be shown as the last slide )
if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0)
  readyNextSlide();

let bulletIndex = 0;
// shift all slides left or right based on direction provided
function shiftSlides(direction) {
  direction ? currentSlideIndex++ : currentSlideIndex--;
  // console.log(currentSlideIndex)
  if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0)
    readyNextSlide();
  goToSlide(currentSlideIndex);
  // Add for bullets active
  bulletIndex++;
  if (bulletIndex === testimonialBullets.length) {
    bulletIndex = 0;
  }
  removeClass(testimonialBullets, "active-bullet", bulletIndex);
}

// //button click events
// btnRight.addEventListener("click", shiftSlides.bind(null, 1));
// btnLeft.addEventListener("click", shiftSlides.bind(null, 0));
let conutShift = setInterval(shiftSlides.bind(null, 1), 3000);

// testimonialBullets.forEach((element, index) => {
//   element.addEventListener("click", () => {
// clearInterval(conutShift);
// currentSlideIndex = index;
// if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0)
//   readyNextSlide();
// goToSlide(currentSlideIndex);
// console.log(index)
// removeClass(testimonialBullets, "active-bullet", index);

// console.log(currentSlideIndex)
// setInterval(shiftSlides.bind(null, 1), 3000);
// console.log(element)
// console.log(index)
// // currentSlideIndex = 3;
// readyNextSlide();
// goToSlide(index);
// bulletIndex = index;
// removeClass(testimonialBullets, "active-bullet", bulletIndex);
// // shiftSlides.bind(null, 1)
//   });
// });
// about.scrollTop = about.scrollHeight;
// showCurrentSec(1);

const cursorOne = document.querySelector(".cursor-1");
const cursorTwo = document.querySelector(".cursor-2");
document.addEventListener("mousemove", function (e) {
  cursorOne.style.cssText = `top: ${e.clientY}px;left: ${e.clientX}px`;
  cursorTwo.style.cssText = `top: ${e.clientY}px;left: ${e.clientX}px`;
  if (
    e.target.tagName.toLowerCase() === "a" ||
    e.target.parentElement.tagName.toLowerCase() === "a" ||
    e.target.tagName.toLowerCase() === "button" ||
    e.target.parentElement.tagName.toLowerCase() === "button"
  ) {
    cursorOne.classList.add("active-cursor")
  } else {
    cursorOne.classList.remove("active-cursor")
    
  }
});
