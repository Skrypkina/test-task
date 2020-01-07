"use strict";

const container = document.querySelector(".container");

const imageArray = ["./img/image.jpg", "./img/testImage.png"];

// setting  backgroundImage

function BackgroundLoader(url) {
  setTimeout(function() {
    const image = new Image();
    container.style.backgroundImage = "url('" + url + "')";
    container.style.opacity = "0.5";
    image.src = url;
  }, 2000);
  setTimeout(function() {
    container.style.opacity = "1";
  }, 3000);
}
BackgroundLoader("./img/testImage.png");

// setting dinamic changes of background images

function RandomImageLoader(array) {
  setInterval(function() {
    const randomImage = array[Math.floor(array.length * Math.random())];
    container.style.backgroundImage = "url('" + randomImage + "')";
  }, 28800000);
}
RandomImageLoader(imageArray);
