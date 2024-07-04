"use strict";

const API_KEY_YOUTUBE = "AIzaSyCfL7EF9bpu3y1kXn2PXHyedAE95YnWJrk";
const CHANNEL_ID = "UCakOD76rxddFiEgCukv5Ozw";
const UPLOADS_ID = "UUakOD76rxddFiEgCukv5Ozw";

const urlYoutube = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUakOD76rxddFiEgCukv5Ozw&key=${API_KEY_YOUTUBE}`;

const navigationList = document.querySelector(".navigation__list");
const navigationBtns = document.querySelectorAll(".navigation__btn");

const sections = document.querySelectorAll(".section");

const listActivities = document.querySelector(".list--activities");
const listYoutube = document.querySelector(".list--youtube");

const showSection = (e) => {
  const clicked = e.target.closest(".navigation__btn");

  if (!clicked) return;

  navigationBtns.forEach((btn) =>
    btn.classList.remove("navigation__btn--active")
  );
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  clicked.classList.add("navigation__btn--active");
  document
    .querySelector(`.section--${clicked.dataset.content}`)
    .classList.add("active");
};

navigationList.addEventListener("click", showSection);

const displayYoutubeVideos = (videos) => {
  videos.items.forEach((video) => {
    const markup = `
      <li class="list__item">
        <a href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}" target="_blank" class="list__link">${video.snippet.title}</a>
      </li>
    `;
    listYoutube.insertAdjacentHTML("beforeend", markup);
  });
};

const getYoutubeVideos = () => {
  fetch(urlYoutube)
    .then((res) => res.json())
    .then((data) => {
      displayYoutubeVideos(data);
    });
};

getYoutubeVideos();
