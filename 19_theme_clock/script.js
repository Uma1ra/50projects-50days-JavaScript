const toggleEl = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html");

  if(html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHtml = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHtml = "Light Mode";
  }
})