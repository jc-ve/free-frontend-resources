"use strict";

const panels = document.querySelector(".panels");
const contacts = document.querySelector(".contacts");
const videos = document.querySelector(".videos");
const photos = document.querySelector(".photos");

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
      end: "+=3500",
    },
  });
}

if (videos) {
  const buildSwiperSlider = (sliderElm) => {
    const sliderIdentifier = sliderElm.dataset.id;
    return new Swiper(`#${sliderElm.dataset.id}`, {
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

      navigation: {
        nextEl: `.swiper-button-next-${sliderIdentifier}`,
        prevEl: `.swiper-button-prev-${sliderIdentifier}`,
      },
      pagination: {
        el: `.swiper-pagination-${sliderIdentifier}`,
        type: "fraction",
      },
    });
  };

  // Get all of the swipers on the page
  const allSliders = document.querySelectorAll(".swiper");

  allSliders.forEach((slider) => {
    buildSwiperSlider(slider);
  });
}
