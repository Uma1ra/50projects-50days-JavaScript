const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");

  if(html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
})

function setTime() {
  const now = new Date();

  const date = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();

  const hours = now.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours; //logic for a 12-hour clock format

  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const amPm = hours >= 12 ? "PM" : "AM";
}