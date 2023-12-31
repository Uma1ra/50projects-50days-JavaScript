const sliderContainer = document.querySelector(".slider-container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");

const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

downButton.addEventListener("click", () => changeSlide("down"));
upButton.addEventListener("click", () => changeSlide("up"));

// using the arrow function as per ES6
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if(direction === "up") {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if(direction === "down") {
    activeSlideIndex--;
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};