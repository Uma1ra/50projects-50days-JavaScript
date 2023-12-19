const btn = document.getElementById("button");
const toasts = document.getElementById("toast");

const messages = [
  "standard error",
  "protocol error",
  "spelling error",
  "useful info",
  "info loading",
  "no info",
  "saving successful",
  "install success",
  "download success"
];

const types = ["info", "success", "error"];

btn.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getType());

  notification.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notification);

  // setTimeout(() => {notification.remove()}, 3000);
};

