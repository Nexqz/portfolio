"use strict";

const btnYellow = document
  .querySelector(".btn-yellow")
  .addEventListener("click", function () {
    document.documentElement.style.setProperty("--main-color", "#f8f28c");
  });

const btnRed = document
  .querySelector(".btn-red")
  .addEventListener("click", function () {
    document.documentElement.style.setProperty("--main-color", "#f2406a");
  });

const btnBlue = document
  .querySelector(".btn-blue")
  .addEventListener("click", function () {
    document.documentElement.style.setProperty("--main-color", "#33f1ff");
  });
