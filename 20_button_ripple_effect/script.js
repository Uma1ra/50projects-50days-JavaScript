const buttons = document.querySelectorAll(".ripple");

function handleButtonClick(e) {
  const x = e.pageX;
  const y = e.pageY;
  
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
}

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});