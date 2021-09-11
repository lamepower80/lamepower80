gsap.registerPlugin(ScrollToPlugin);

//menu burger
const bannerDist = document.querySelector(".banner").offsetTop;
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

//banner slider
const slideList = [
  {
    img: "img/banner/1n.jpg",
    text: "",
  },
  {
    img: "img/banner/2n.jpg",
    text: "",
  },
  {
    img: "img/banner/3n.jpg",
    text: "",
  },
  {
    img: "img/banner/4n.jpg",
    text: "",
  },
  {
    img: "img/banner/5n.jpg",
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
let active = 4;

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
  active = 3;
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

//animation button
/*
const animationButton = document.querySelector(".animation-container");
const currentAnimationFlag = localStorage.getItem("animationFlag");
const animationState = document.querySelector(".animation-state");

if (currentAnimationFlag === "false") {
  animationButton.classList.remove("active");
  animationState.classList.remove("active");
  animationState.style.color = "LawnGreen";
  if (document.body.classList.contains("en")) {
    animationState.innerHTML = "on";
  } else {
    animationState.innerHTML = "wł";
  }
} else {
  animationButton.classList.add("active");
  animationState.classList.add("active");
  animationState.style.color = "DarkRed";
  if (document.body.classList.contains("en")) {
    animationState.innerHTML = "off";
  } else {
    animationState.innerHTML = "wył";
  }
}

animationButton.addEventListener("click", () => {
  if (animationButton.classList.contains("active")) {
    localStorage.setItem("animationFlag", "false");
    animationButton.classList.remove("active");
    animationState.classList.remove("active");
    animationState.style.color = "LawnGreen";
    if (document.body.classList.contains("en")) {
      animationState.innerHTML = "on";
    } else {
      animationState.innerHTML = "wł";
    }
  } else if (!animationButton.classList.contains("active")) {
    animationButton.classList.add("active");
    localStorage.setItem("animationFlag", "true");
    animationState.style.color = "DarkRed";
    if (document.body.classList.contains("en")) {
      animationState.innerHTML = "off";
    } else {
      animationState.innerHTML = "wył";
    }
    animationState.classList.add("active");
  }
  window.location.reload(true);
});
*/
//animations
/*
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
const p = document.querySelectorAll("p.text");

if (currentAnimationFlag === "false") {
  p.forEach((item) =>
    gsap.fromTo(
      item,
      { y: "+=90", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      }
    )
  );
} else {
  p.forEach((item) => {
    gsap.set(item, { opacity: 1 });
  });
}

const li = document.querySelectorAll("li.text");
if (currentAnimationFlag === "false") {
  li.forEach((item) =>
    gsap.fromTo(
      item,
      { y: "+=90", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      }
    )
  );
} else {
  li.forEach((item) => {
    gsap.set(item, { opacity: 1 });
  });
}

const h2 = document.querySelectorAll("h2");
if (currentAnimationFlag === "false") {
  let text = "";
  h2.forEach((item) => {
    text = item.textContent;
    gsap.fromTo(
      item,
      1.4,
      {
        text: "",
        opacity: 0,
      },
      {
        text: text,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      }
    );
  });
} else {
  h2.forEach((item) => {
    gsap.set(item, { opacity: 1 });
  });
}

const h3 = document.querySelectorAll("h3");
let text2 = "";
if (currentAnimationFlag === "false") {
  h3.forEach((item) => {
    text2 = item.textContent;
    gsap.fromTo(
      item,
      1.4,
      {
        text: "",
        opacity: 0,
      },
      {
        text: text2,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      }
    );
  });
} else {
  h3.forEach((item) => {
    gsap.set(item, { opacity: 1 });
  });
}

const h4 = document.querySelectorAll("h4");
if (currentAnimationFlag === "false") {
  let text3 = "";
  h4.forEach((item) => {
    text3 = item.textContent;
    gsap.fromTo(
      item,
      1.4,
      {
        text: "",
        opacity: 0,
      },
      {
        text: text3,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      }
    );
  });
} else {
  h3.forEach((item) => {
    gsap.set(item, { opacity: 1 });
  });
}
*/
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
