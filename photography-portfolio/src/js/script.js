"use strict";

// Selectors

const navBtn = document.querySelector(".btn--navigation");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

const headingGreeting = document.querySelector(".heading--greeting");

const headerText = [
  "Hola at me 🤙",
  "Let's talk ☎️",
  "Get in touch ✍️",
  "Hit me up 📲",
  "Say hello 🙋‍♂️",
];

let counter = 0;

const changeGreeting = () => {
  headingGreeting.innerHTML = headerText[counter];
  counter++;
  if (counter >= headerText.length) counter = 0;
};

setInterval(changeGreeting, 3000);
