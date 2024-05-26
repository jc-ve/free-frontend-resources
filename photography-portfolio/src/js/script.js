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

// gsap.registerPlugin(ScrollTrigger);

// let sectionsHome = gsap.utils.toArray(".panel");

// gsap.to(sectionsHome, {
//   xPercent: -100 * (sectionsHome.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".home-container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sectionsHome.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   },
// });

const cards = gsap.utils.toArray(".videos__content");

cards.forEach((card, index) => {
  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: () => `top bottom-=100`,
      end: () => `top top+=40`,
      scrub: true,
      invalidateOnRefresh: true,
    },
    ease: "none",
    scale: () => 1 - (cards.length - index) * 0.025,
  });

  ScrollTrigger.create({
    trigger: card,
    start: "top top",
    pin: true,
    pinSpacing: false,

    id: "pin",
    end: "max",
    invalidateOnRefresh: true,
  });
});
