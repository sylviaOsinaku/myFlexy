"use strict";

const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");
const arrow5 = document.querySelector(".arrow5");
const arrow6 = document.querySelector(".arrow6");

const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answer5 = document.querySelector(".answer5");
const answer6 = document.querySelector(".answer6");

const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const middleDiv = document.querySelector(".middle");

arrow1.addEventListener("click", function () {
  answer1.classList.toggle("hidden");
});
arrow2.addEventListener("click", function () {
  answer2.classList.toggle("hidden");
});
arrow3.addEventListener("click", function () {
  answer3.classList.toggle("hidden");
});
arrow4.addEventListener("click", function () {
  answer4.classList.toggle("hidden");
});
arrow5.addEventListener("click", function () {
  answer5.classList.toggle("hidden");
});
arrow6.addEventListener("click", function () {
  answer6.classList.toggle("hidden");
});
menu.addEventListener("click", function () {
  middleDiv.style.display = "flex";
  menu.style.display = "none";
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  middleDiv.style.display = "none";
  menu.style.display = "block";
  closeIcon.classList.add("hidden");
});
