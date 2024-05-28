"use strict";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".section");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".panels",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: "+=4000",
  },
});

const highlightedTexts = gsap.utils.toArray(".highlight");

highlightedTexts.forEach((highlight) => {
  ScrollTrigger.create({
    trigger: ".highlight",
    start: "-100px center",
    onEnter: () => highlight.classList.add("active"),
  });
});
