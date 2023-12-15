const sliderContainer = document.querySelector(".slider-container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");

const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;