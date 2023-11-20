const smallCups = document.querySelectorAll(".cups");
const litres = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightsCups(idx));
})

function highlightsCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains("full"))idx--;
  else if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.contains("full")) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add("full")
    } else {
      cup.classList.remove("full")
    }
  })
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length
  const totalCups = smallCups.length
}