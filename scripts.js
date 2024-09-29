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
