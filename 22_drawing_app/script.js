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

colorEl.value = "#000000";
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

canvas.addEventListener("mouseenter", () => {
  canvas.classList.add("within-canvas");
});

canvas.addEventListener("mouseleave", () => {
  canvas.classList.remove("within-canvas");
  isPressed = false;
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

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

function drawLine(initX, initY, newX, newY) {
  ctx.beginPath();
  ctx.moveTo(initX, initY);
  ctx.lineTo(newX, newY);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

function updateSizeOnScreen() {
  sizeEl.innerText = size
};

increaseBtn.addEventListener("click", () => {
  size += 5;

  if(size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if(size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => color = e.target.value);

clearEl.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));