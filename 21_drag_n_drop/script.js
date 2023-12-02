const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

enpties.forEach(empty => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", drop);
});

function dragStart() {
  this.className += " hold"
  setTimeout(() => this.className = "invisible", 0)
}