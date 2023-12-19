const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

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

button.addEventListener('click', () => createNotification())

function createNotification() {
  const message = getRandomMessage();
  const type = getType(message);

  const notification = document.createElement("div");

  notification.classList.add("toast");
  notification.classList.add(type);

  notification.innerText = message;

  toasts.appendChild(notification)

  // setTimeout(() => {notification.remove()}, 3000);
};

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
};

function getType(message) {
  const lowerCaseMessage = message.toLowerCase();

  for (const messageType of types) {
    if (lowerCaseMessage.includes(messageType)) {
      return messageType;
    }
  }
}