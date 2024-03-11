"use strict";

const header = document.querySelector(".header");
const btnMobileNav = document.getElementById("btn-mobile-open");
const iconMobile = document.querySelector(".icon-mobile");

btnMobileNav.addEventListener("click", () => {
  header.classList.toggle("active");

  iconMobile.getAttribute("name") === "menu"
    ? iconMobile.setAttribute("name", "close")
    : iconMobile.setAttribute("name", "menu");
});
