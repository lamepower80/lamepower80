gsap.registerPlugin(ScrollToPlugin);

//menu burger
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".fa-bars");
const burgerX = document.querySelector(".fa-times");
const menu = document.querySelector("nav>aside");

const showBurger = () => {
  const scrollHeight = window.scrollY;
  if (scrollHeight < bannerDist && !burgerX.classList.contains("show")) {
    document.querySelector("div.burger").style.display = "none";
  }
  if (scrollHeight > bannerDist) {
    document.querySelector("div.burger").style.display = "block";
  }
};

window.addEventListener("scroll", showBurger);

burger.addEventListener("click", function () {
  burgerMenu.classList.toggle("show");
  burgerX.classList.toggle("show");
  menu.classList.toggle("show");
});

// arrow
const btnArrow = document.querySelector(".arrow");

const goUp = function () {
  window.scrollTo(0, 0);
};

btnArrow.addEventListener("click", goUp);

const showArrow = () => {
  const scrollHeight = window.scrollY;
  if (!bannerDist) {
    if (scrollHeight < 450) {
      document.querySelector("div.arrow").style.display = "none";
    }
    if (scrollHeight > 450) {
      document.querySelector("div.arrow").style.display = "block";
    }
  }
  if (scrollHeight < bannerDist) {
    document.querySelector("div.arrow").style.display = "none";
  }
  if (scrollHeight > bannerDist) {
    document.querySelector("div.arrow").style.display = "block";
  }
};

window.addEventListener("scroll", showArrow);

//theme

const themeContainer = document.querySelector(".theme-container");
const themeLightSvg = document.querySelector(".light-mode svg");
const themeDarkSvg = document.querySelector(".dark-mode svg");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeContainer.classList.add("active");
  themeDarkSvg.style.fill = "white";
  themeLightSvg.style.fill = "black";
}

themeContainer.addEventListener("click", () => {
  if (!themeContainer.classList.contains("active")) {
    themeContainer.classList.toggle("active");
    document.body.classList.toggle("dark");
    themeDarkSvg.style.fill = "white";
    themeLightSvg.style.fill = "black";
    localStorage.setItem("theme", "dark");
  } else {
    themeContainer.classList.toggle("active");
    document.body.classList.toggle("dark");
    themeDarkSvg.style.fill = "black";
    themeLightSvg.style.fill = "white";
    localStorage.setItem("theme", "light");
  }
});
