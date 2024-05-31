"use strict";

const panels = document.querySelector(".panels");
const contacts = document.querySelector(".contacts");
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

if (contacts) {
  const opts = {
    slides: document.querySelectorAll(".greetings__item"),
    list: document.querySelector(".greetings__list"),
    duration: 6,
    lineHeight: 110,
  };

  const slide = new TimelineMax({ paused: true, repeat: -1 });

  opts.slides.forEach(function (i) {
    slide.to(opts.list, opts.duration / opts.slides.length, {
      y: i * -1 * opts.lineHeight,
      ease: Elastic.easeOut.config(1, 0.4),
    });
  });

  slide.play();
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
