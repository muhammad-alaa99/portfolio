
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("svg").classList.add("fa-sun")
  } else {
    dayNight.querySelector("svg").classList.add("fa-moon")
  }
});



let StyleSwitcher = document.querySelector(".switcher-toggler");
StyleSwitcher.addEventListener("click", () => {
  document.querySelector(".switcher").classList.toggle("open");
  document.querySelector(".switcher-toggler svg").classList.toggle("fa-spin");
});
// =================== remov switcher whin scroll ===============================
window.addEventListener("scroll", () => {
  if (document.querySelector(".switcher").classList.contains("open")) {
    document.querySelector(".switcher").classList.remove("open");
    document.querySelector(".switcher-toggler svg").classList.toggle("fa-spin");
  }
});
// ==================== thems color======================
// check in local storege
let mainColor = localStorage.getItem("mainColor");
if (mainColor != null) {
  document.documentElement.style.setProperty("--skin", mainColor);
  // active class
  document.querySelectorAll(".colors span").forEach((span) => {
    span.classList.remove("active");
    if (mainColor == span.dataset.color) {
      span.classList.add("active");
    }
  });
}


const styleColor = document.querySelectorAll(".colors span");
styleColor.forEach((span) => {
  span.addEventListener("click", (e) => {
    document.documentElement.style.setProperty("--skin", e.target.dataset.color);
    // save in local storege
    localStorage.setItem("mainColor", e.target.dataset.color);
    // remov active in span
    styleColor.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// ===================== theme light and dark mode======================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("svg").classList.toggle("fa-sun");
  dayNight.querySelector("svg").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
