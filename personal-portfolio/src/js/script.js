"use strict";

const main = document.querySelector(".main");

const navigationList = document.querySelector(".navigation__list");
const navigationBtns = document.querySelectorAll(".navigation__btn");

const section = document.querySelector(".section");

const btnHome = document.getElementById("btn-home");
const btnAbout = document.getElementById("btn-about");
const btnActivities = document.getElementById("btn-activities");
const btnYoutube = document.getElementById("btn-youtube");

const addActiveNav = (e) => {
  const clicked = e.target.closest(".navigation__btn");
  if (!clicked) return;
  navigationBtns.forEach((btn) =>
    btn.classList.remove("navigation__btn--active")
  );
  clicked.classList.add("navigation__btn--active");
};

navigationList.addEventListener("click", addActiveNav);

const clear = () => (main.innerHTML = "");

const displayHome = () => {
  clear();

  const markup = `
    <section class="section">
      <div class="u-container">
        <h2 class="heading heading--secondary u-margin-bottom-lg">Projects</h2>
          <ul class="list">
            <li class="list__item">
              <a href="#" class="list__link">frontend-challenges</a> &mdash;
              <span class="list__description"
                >curated collection of different challenges I finished from
                Frontend Mentor, Codewell & FrontendPro.</span
              >
            </li>
            <li class="list__item">
              <a href="#" class="list__link">css-frameworks</a> &mdash;
              <span class="list__description"
                >compilation of projects I finished using different CSS
                frameworks such as Tailwind, Bootstrap & Bulma.</span
              >
            </li>
            <li class="list__item">
              <a href="#" class="list__link">freecodecamp-projects</a> &mdash;
              <span class="list__description"
                >projects included in freeCodeCamps's core curriculum.</span
              >
            </li>
            <li class="list__item">
              <a href="#" class="list__link">api-projects</a> &mdash;
              <span class="list__description">
                projects using different free API's I found across the net.
              </span>
            </li>
          </ul>
      </div>
    </section>
  `;
  main.insertAdjacentHTML("afterbegin", markup);
};

const displayAbout = () => {
  clear();

  const markup = `
  <section class="section">
    <div class="u-container">
      <h2 class="heading heading--secondary u-margin-bottom-lg">About</h2>
    </div>
  </section>
  `;
  main.insertAdjacentHTML("afterbegin", markup);
};

const displayActivities = () => {
  clear();
  const markup = `
  <section class="section">
    <div class="u-container">
      <h2 class="heading heading--secondary u-margin-bottom-lg">Activities</h2>
    </div>
  </section>
  `;
  main.insertAdjacentHTML("afterbegin", markup);
};

const displayYoutube = () => {
  clear();
  const markup = `
  <section class="section">
    <div class="u-container">
      <h2 class="heading heading--secondary u-margin-bottom-lg">Youtube</h2>
    </div>
  </section>
  `;
  main.insertAdjacentHTML("afterbegin", markup);
};

btnHome.addEventListener("click", displayHome);
btnAbout.addEventListener("click", displayAbout);
btnActivities.addEventListener("click", displayActivities);
btnYoutube.addEventListener("click", displayYoutube);
