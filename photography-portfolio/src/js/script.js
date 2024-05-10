"use strict";

// Selectors

const navBtn = document.querySelector(".btn--navigation");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
