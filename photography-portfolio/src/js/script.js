"use strict";

const photos = document.querySelector(".photos");
const videos = document.querySelector(".videos");
const contacts = document.querySelector(".contacts");

const btnNav = document.querySelector(".navigation__btn");
const elNav = document.querySelector(".navigation");

const html = document.querySelector("html");
const body = document.querySelector("body");

btnNav.addEventListener("click", () => {
  html.classList.toggle("active");
  body.classList.toggle("active");
  elNav.classList.toggle("active");
});

const renderVideos = () => {
  if (!videos) return;
  AOS.init();
};

const renderGallery = () => {
  if (!photos) return;

  const gallery = document.querySelector(".gallery");

  const msnry = new Masonry(gallery, {
    itemSelector: ".gallery__item",
    gutter: 10,
    percentPosition: true,
    horizontalOrder: true,
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
};

const renderGreetings = () => {
  if (!contacts) return;

  const firstHeading = document.querySelector("#heading--greetings--1");
  const secondHeading = document.querySelector("#heading--greetings--2");
  const thirdHeading = document.querySelector("#heading--greetings--3");
  const fourthHeading = document.querySelector("#heading--greetings--4");
  const fifthHeading = document.querySelector("#heading--greetings--5");
  const tl = new TimelineMax({ repeat: -1 });

  tl.to(firstHeading, 0.5, { alpha: 1, ease: Power1.easeIn }, "+=0.3")
    .to(firstHeading, 0.5, { alpha: 0, ease: Power1.easeOut }, "+=0.3")
    .to(secondHeading, 0.5, { alpha: 1, ease: Power1.easeIn })
    .to(secondHeading, 0.5, { alpha: 0, ease: Power1.easeOut }, "+=0.3")
    .to(thirdHeading, 0.5, { alpha: 1, ease: Power1.easeIn })
    .to(thirdHeading, 0.5, { alpha: 0, ease: Power1.easeOut }, "+=0.3")
    .to(fourthHeading, 0.5, { alpha: 1, ease: Power1.easeIn })
    .to(fourthHeading, 0.5, { alpha: 0, ease: Power1.easeOut }, "+=0.3")
    .to(fifthHeading, 0.5, { alpha: 1, ease: Power1.easeIn })
    .to(fifthHeading, 0.5, { alpha: 0, ease: Power1.easeOut }, "+=0.3");
};

const emailFunction = () => {
  let isValid;

  if (!isValid) return;

  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};

renderGallery();
renderVideos();
renderGreetings();
