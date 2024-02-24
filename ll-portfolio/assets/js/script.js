"use strict";

if (document.querySelector("body").classList.contains("use-lax")) {
  window.onload = function () {
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });
  };
}
