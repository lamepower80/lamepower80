gsap.registerPlugin(ScrollToPlugin);

//menu burger

let bannerDist = document.querySelector(".banner").offsetTop;
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
  window.removeEventListener("scroll", showSection);
  window.scrollTo(0, 0);
  window.addEventListener("scroll", showSection);
};

btnArrow.addEventListener("click", goUp);

const showArrow = () => {
  const scrollHeight = window.scrollY;
  if (scrollHeight < bannerDist) {
    document.querySelector("div.arrow").style.display = "none";
  }
  if (scrollHeight > bannerDist) {
    document.querySelector("div.arrow").style.display = "block";
  }
};

window.addEventListener("scroll", showArrow);

//banner slider
const slideList = [
  {
    img: "img/banner/1n.webp",
    text: "",
  },
  {
    img: "img/banner/2n.webp",
    text: "",
  },
  {
    img: "img/banner/3n.webp",
    text: "",
  },
  {
    img: "img/banner/4n.webp",
    text: "",
  },
  {
    img: "img/banner/5n.webp",
    text: "",
  },
];

const image = document.querySelector("img.banner-slider");
const h1Img = document.querySelector("h1.h1-slider");
const dots = [...document.querySelectorAll(".dots span")];
const btn1 = document.querySelector(".dots .one");
const btn2 = document.querySelector(".dots .two");
const btn3 = document.querySelector(".dots .three");
const btn4 = document.querySelector(".dots .four");
const btn5 = document.querySelector(".dots .five");

const time = 9000;
let active = 1;

function myStopFunction() {
  clearInterval(interval);
}

const changeDot = () => {
  const activeDot = dots.findIndex((dot) =>
    dot.classList.contains("dots-active")
  );
  dots[activeDot].classList.remove("dots-active");
  dots[active].classList.add("dots-active");
};

setTimeout(changeDot, 9000);

const changeSlide = () => {
  active++;
  if (active == slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  const t2 = new TimelineMax();
  t2.fromTo(image, time / 3000, { opacity: 0 }, { opacity: 1 })
    .fromTo(image, time / 3000, { opacity: 1 }, { opacity: 1 })
    .fromTo(image, time / 3000, { opacity: 1 }, { opacity: 0 });
  h1Img.textContent = slideList[active].text;
  changeDot();
};

setTimeout(changeSlide, 9000);

const anim = () => {
  image.style.animation = "none";
  setTimeout(function () {
    image.style.animation = "";
  }, 10);
};

const slideImg1 = () => {
  active = 0;
  image.src = slideList[active].img;
  h1Img.textContent = slideList[active].text;
  anim();
  changeDot();
  myStopFunction();
  interval = setInterval(changeSlide, time);
};

const slideImg2 = () => {
  active = 1;
  image.src = slideList[active].img;
  h1Img.textContent = slideList[active].text;
  anim();
  changeDot();
  myStopFunction();
  interval = setInterval(changeSlide, time);
};

const slideImg3 = () => {
  active = 2;
  image.src = slideList[active].img;
  h1Img.textContent = slideList[active].text;
  anim();
  changeDot();
  myStopFunction();
  interval = setInterval(changeSlide, time);
};

const slideImg4 = () => {
  active = 3;
  image.src = slideList[active].img;
  h1Img.textContent = slideList[active].text;
  anim();
  changeDot();
  myStopFunction();
  interval = setInterval(changeSlide, time);
};

const slideImg5 = () => {
  active = 4;
  image.src = slideList[active].img;
  h1Img.textContent = slideList[active].text;
  anim();
  changeDot();
  myStopFunction();
  interval = setInterval(changeSlide, time);
};

btn1.addEventListener("click", slideImg1);
btn2.addEventListener("click", slideImg2);
btn3.addEventListener("click", slideImg3);
btn4.addEventListener("click", slideImg4);
btn5.addEventListener("click", slideImg5);

let count = 0;

if (count === 0) {
  active = 0;
  changeSlide();
  count++;
}

let interval = setInterval(changeSlide, time);

const keyChange = (e) => {
  if (e.keyCode == 37) {
    active--;
  } else if (e.keyCode == 39) {
    active++;
  }
  if (active == slideList.length) {
    active = 0;
  } else if (active == -1) {
    active = slideList.length - 1;
  }
  image.src = slideList[active].img;
  h1Img.textContent = slideList[active].text;
  anim();
  changeDot();
  myStopFunction();
  interval = setInterval(changeSlide, time);
};

window.addEventListener("keydown", keyChange);

//menu main

const getOffsetTop = (element) => {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
};
const btnMenuIFG = document.querySelector(".autostrafe-ifg");
const btnMenuAutostrafe4 = document.querySelector(".autostrafe-4");
const btnMenuE2S = document.querySelector(".ex-e25");
const btnMenuGaszenie = document.querySelector(".gaszenie");
const btnMenuGaz = document.querySelector(".gaz-fm-200");
let IFGDist = document.querySelector("article:nth-of-type(2)").offsetTop;
let Autostrafe4Dist = document.querySelector(
  "article:nth-of-type(3)"
).offsetTop;
let E2SDist = document.querySelector("article:nth-of-type(4)").offsetTop;
let GaszDist = document.querySelector("article:nth-of-type(5)").offsetTop;
let GazDist = document.querySelector("article:nth-of-type(6)").offsetTop;

const goToMenuIFG = () => {
  window.scrollTo(0, IFGDist);
};

const goToMenuAutostrafe4 = () => {
  window.scrollTo(0, Autostrafe4Dist);
};

const goToMenuE2S = () => {
  window.scrollTo(0, E2SDist);
};

const goToMenuGaszenie = () => {
  window.scrollTo(0, GaszDist);
};

const goToMenuGaz = () => {
  window.scrollTo(0, GazDist);
};

btnMenuIFG.addEventListener("click", goToMenuIFG);
btnMenuAutostrafe4.addEventListener("click", goToMenuAutostrafe4);
btnMenuE2S.addEventListener("click", goToMenuE2S);
btnMenuGaszenie.addEventListener("click", goToMenuGaszenie);
btnMenuGaz.addEventListener("click", goToMenuGaz);

const btnMenuStrefaI = document.querySelector(".strefaI-menu");
const btnMenuStrefaII = document.querySelector(".strefaII-menu");
const btnMenuIskrobezpieczne = document.querySelector(".iskrobezpieczne-menu");
const btnMenuSeriaOgolna = document.querySelector(".seria-ogolna-menu");
let strefaIDist = document.querySelector(".strefaI").offsetTop;
let strefaIIDist = document.querySelector(".strefaII").offsetTop;
let iskrobezpieczneDist = document.querySelector(".iskrobezpieczne").offsetTop;
let seriaOgolnaIDist = document.querySelector(".seria-ogolna").offsetTop;
let seriaOgolnaIHeight = document.querySelector(".seria-ogolna").clientHeight;

function showSection() {
  const scrollHeight = window.scrollY;
  if (scrollHeight < strefaIDist) {
    document.querySelector("nav.e25-menu").classList.remove("fix");
    document.querySelector(".strefaI-menu").classList.remove("active-menu");
    document.querySelector(".strefaII-menu").classList.remove("active-menu");
    document
      .querySelector(".iskrobezpieczne-menu")
      .classList.remove("active-menu");
    document
      .querySelector(".seria-ogolna-menu")
      .classList.remove("active-menu");
  } else if (scrollHeight < strefaIIDist) {
    document.querySelector("nav.e25-menu").classList.add("fix");
    document.querySelector(".strefaI-menu").classList.add("active-menu");
    document.querySelector(".strefaII-menu").classList.remove("active-menu");
    document
      .querySelector(".iskrobezpieczne-menu")
      .classList.remove("active-menu");
    document
      .querySelector(".seria-ogolna-menu")
      .classList.remove("active-menu");
  } else if (scrollHeight < iskrobezpieczneDist) {
    document.querySelector("nav.e25-menu").classList.add("fix");
    document.querySelector(".strefaI-menu").classList.remove("active-menu");
    document.querySelector(".strefaII-menu").classList.add("active-menu");
    document
      .querySelector(".iskrobezpieczne-menu")
      .classList.remove("active-menu");
    document
      .querySelector(".seria-ogolna-menu")
      .classList.remove("active-menu");
  } else if (scrollHeight < seriaOgolnaIDist) {
    document.querySelector("nav.e25-menu").classList.add("fix");
    document.querySelector(".strefaI-menu").classList.remove("active-menu");
    document.querySelector(".strefaII-menu").classList.remove("active-menu");
    document
      .querySelector(".iskrobezpieczne-menu")
      .classList.add("active-menu");
    document
      .querySelector(".seria-ogolna-menu")
      .classList.remove("active-menu");
  } else if (scrollHeight < seriaOgolnaIDist + seriaOgolnaIHeight) {
    document.querySelector("nav.e25-menu").classList.add("fix");
    document.querySelector(".strefaI-menu").classList.remove("active-menu");
    document.querySelector(".strefaII-menu").classList.remove("active-menu");
    document
      .querySelector(".iskrobezpieczne-menu")
      .classList.remove("active-menu");
    document.querySelector(".seria-ogolna-menu").classList.add("active-menu");
  } else {
    document.querySelector("nav.e25-menu").classList.remove("fix");
    document.querySelector(".strefaI-menu").classList.remove("active-menu");
    document.querySelector(".strefaII-menu").classList.remove("active-menu");
    document
      .querySelector(".iskrobezpieczne-menu")
      .classList.remove("active-menu");
    document
      .querySelector(".seria-ogolna-menu")
      .classList.remove("active-menu");
  }
}

const goToMenuStrefaI = function () {
  document.querySelector("nav.e25-menu").classList.add("fix");
  document.querySelector(".seria-ogolna-menu").classList.remove("active-menu");
  document
    .querySelector(".iskrobezpieczne-menu")
    .classList.remove("active-menu");
  document.querySelector(".strefaII-menu").classList.remove("active-menu");
  document.querySelector(".strefaI-menu").classList.add("active-menu");
  window.scrollTo(0, strefaIDist);
};

const goToMenuStrefaII = function () {
  document.querySelector("nav.e25-menu").classList.add("fix");
  document.querySelector(".seria-ogolna-menu").classList.remove("active-menu");
  document
    .querySelector(".iskrobezpieczne-menu")
    .classList.remove("active-menu");
  document.querySelector(".strefaII-menu").classList.add("active-menu");
  document.querySelector(".strefaI-menu").classList.remove("active-menu");
  window.scrollTo(0, strefaIIDist);
};

const goToMenuIskrobezpieczne = function () {
  document.querySelector("nav.e25-menu").classList.add("fix");
  document.querySelector(".seria-ogolna-menu").classList.remove("active-menu");
  document.querySelector(".iskrobezpieczne-menu").classList.add("active-menu");
  document.querySelector(".strefaII-menu").classList.remove("active-menu");
  document.querySelector(".strefaI-menu").classList.remove("active-menu");
  window.scrollTo(0, iskrobezpieczneDist);
};

const goToMenuSeriaOgolna = function () {
  document.querySelector("nav.e25-menu").classList.add("fix");
  document.querySelector(".seria-ogolna-menu").classList.add("active-menu");
  document
    .querySelector(".iskrobezpieczne-menu")
    .classList.remove("active-menu");
  document.querySelector(".strefaII-menu").classList.remove("active-menu");
  document.querySelector(".strefaI-menu").classList.remove("active-menu");
  window.scrollTo(0, seriaOgolnaIDist);
};

btnMenuStrefaI.addEventListener("click", goToMenuStrefaI);
btnMenuStrefaII.addEventListener("click", goToMenuStrefaII);
btnMenuIskrobezpieczne.addEventListener("click", goToMenuIskrobezpieczne);
btnMenuSeriaOgolna.addEventListener("click", goToMenuSeriaOgolna);

window.addEventListener("scroll", showSection);

window.addEventListener("resize", () => {
  bannerDist = document.querySelector(".banner").offsetTop;
  strefaIDist = document.querySelector(".strefaI").offsetTop;
  strefaIIDist = document.querySelector(".strefaII").offsetTop;
  iskrobezpieczneDist = document.querySelector(".iskrobezpieczne").offsetTop;
  seriaOgolnaIDist = document.querySelector(".seria-ogolna").offsetTop;
  seriaOgolnaIHeight = document.querySelector(".seria-ogolna").clientHeight;
  IFGDist = document.querySelector("article:nth-of-type(2)").offsetTop;
  Autostrafe4Dist = document.querySelector("article:nth-of-type(3)").offsetTop;
  E2SDist = document.querySelector("article:nth-of-type(4)").offsetTop;
  GaszDist = document.querySelector("article:nth-of-type(5)").offsetTop;
  GazDist = document.querySelector("article:nth-of-type(6)").offsetTop;
});

//cookies
const cookieContainer = document.querySelector(".cookie-container");
const cookieContainerBtn = document.querySelector(".cookie-container-button");

cookieContainerBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active");
}, 2000);

/* rodo */

const blur = document.querySelector(".blur");
const rodo = document.querySelector(".rodo-text");
const rodoX = document.querySelector(".rodo-x");
const rodoButton = document.querySelector(".rodo-button");
const footerRodoButton = document.querySelector(".footer__rodo");
const cookieRodoButton = document.querySelector(".rodo");

const t1 = new TimelineMax();
t1.pause()
  .addLabel("start")
  .fromTo(rodo, 1, { x: "-400%" }, { opacity: "1", zIndex: 61 }, "start")
  .to(blur, 1, { zIndex: 60, opacity: "1" }, "start")
  .to(rodo, 1, { x: "-0%" })
  .to(window, 1, { scrollTo: 10 }, "start");

footerRodoButton.addEventListener("click", () => {
  t1.play();
});

cookieRodoButton.addEventListener("click", () => {
  t1.play();
});

rodoX.addEventListener("click", () => {
  t1.reverse();
});

rodoButton.addEventListener("click", () => {
  t1.reverse();
});

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
