"use strict";

// SELECTORS
const header = document.querySelector(".header");
const navigationList = document.querySelector(".navigation__list");
const btnMobileNav = document.getElementById("btn-mobile-open");
const iconMobile = document.querySelector(".icon-mobile");

const showNavigation = () => {
  // Toggle active class
  header.classList.toggle("active");

  // Switch icon
  iconMobile.getAttribute("name") === "menu"
    ? iconMobile.setAttribute("name", "close")
    : iconMobile.setAttribute("name", "menu");
};

btnMobileNav.addEventListener("click", showNavigation);
