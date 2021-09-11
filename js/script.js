//splash

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 1910);
});

//lang chooser

const lang = document.querySelector(".lang-chooser");

const btnPl = document.querySelector(".pl img");
const btnEng = document.querySelector(".eng img");

btnPl.addEventListener("click", () => {
  lang.style.display = "none";
});
btnEng.addEventListener("click", () => lang.classList.add("display-none"));
