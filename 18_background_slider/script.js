const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

rightButton.addEventListener("click", () => {
  activeSlide++;

  if(activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
})

leftButton.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
})