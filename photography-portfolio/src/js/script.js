"use strict";

const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const navigationTabs = document.querySelectorAll(".navigation__tab");
const navBtn = document.querySelector(".btn--navigation");
const content = document.querySelectorAll(".content");

navBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

navigation.addEventListener("click", function (e) {
  const clicked = e.target.closest(".navigation__tab");

  if (!clicked) return;

  navigationTabs.forEach((tab) =>
    tab.classList.remove("navigation__tab--active")
  );
  content.forEach((c) => c.classList.remove("content--active"));

  clicked.classList.add("navigation__tab--active");

  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add("content--active");
});
