"use strict";

const btnYellow = document
  .querySelector(".btn-yellow")
  .addEventListener("click", () => setRootColor("#f8f28c"));

const btnRed = document
  .querySelector(".btn-red")
  .addEventListener("click", () => setRootColor("#f2406a"));

const btnBlue = document
  .querySelector(".btn-blue")
  .addEventListener("click", () => setRootColor("#33f1ff"));

function setRootColor(color) {
  document.documentElement.style.setProperty("--main-color", color);
  localStorage.setItem("rootColor", color);
}

function loadColor() {
  const savedColor = localStorage.getItem("rootColor");
  if (savedColor) {
    setRootColor(savedColor);
  }
}

window.onload = loadColor;

const btnWork = document.querySelector(".btn-work");
const btnAbout = document.querySelector(".btn-about");
const btnContact = document.querySelector(".btn-contact");
const workSection = document.querySelector(".work-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");

function showSection(sectionToShow) {
  workSection.style.display = "none";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
  sectionToShow.style.display = "grid";
}

btnWork.addEventListener("click", () => showSection(workSection));
btnAbout.addEventListener("click", () => showSection(aboutSection));
btnContact.addEventListener("click", () => showSection(contactSection));

showSection(workSection);
