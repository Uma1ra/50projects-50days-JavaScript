const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let x;
let y;

colorEl.value = "black";
let color = colorEl.value;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if(isPressed) {
    const newX = e.offsetX;
    const newY = e.offsetY;

    drawCircle(newX, newY);
    drawLine(x, y, newX, newY);

    x = newX;
    y = newY;
  }
});