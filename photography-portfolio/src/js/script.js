"use strict";

const panels = document.querySelector(".panels");
const contact = document.querySelector(".contacts");
const videos = document.querySelector(".videos");

if (panels) {
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
}

if (videos) {
  NodeList.prototype.forEach = Array.prototype.forEach;

  const buildSwiperSlider = (sliderElm) => {
    console.log(sliderElm.dataset.id);
    const sliderIdentifier = sliderElm.dataset.id;

    return new Swiper(`.${sliderElm.id}`, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  };

  // Get all of the swipers on the page
  const allSliders = document.querySelectorAll(".swiper");

  allSliders.forEach((slider) => buildSwiperSlider(slider));
}
