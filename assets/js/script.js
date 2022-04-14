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
      // console.log(index);

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
function classPlayLeft (index) {
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
  if(funWorkOnLargeM()) {
    navLinks.forEach((e, index) => {
      if (e.classList.contains("active-link")) {
        classPlayLeft(index)
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

const dateDay = document.getElementById('date-day');
dateDay.innerText = d.getDate()

const dateMonth = document.getElementById('date-month');
dateMonth.innerText = `${d} + `.slice(4, 7)

const dateYear = document.getElementById('date-year');
dateYear.innerText = d.getFullYear()



// console.log(d.getFullYear());//Get the year as a four digit number (yyyy)
// console.log(d.getMonth());//Get the month as a number (0-11)
// console.log(d.getDate());//Get the day as a number (1-31)
// console.log(d.getHours());//Get the hour (0-23)
// console.log(d.getMinutes());//Get the minute (0-59)
// console.log(d.getSeconds());//Get the second (0-59)
// console.log(d.getMilliseconds());//Get the millisecond (0-999)
// console.log(d.getTime());//Get the time (milliseconds since January 1, 1970)
// console.log(("0" + (d.getMonth() + 1)).slice(-2));//Get the time (milliseconds since January 1, 1970)
// console.log(`${d} + `.slice(4, 7))