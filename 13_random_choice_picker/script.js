const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")


function createTags(input) {
  const tags = input.split(" ").filter(tag => tag.trim() !== "").map(tag => tag.trim());
}

function highlightTag(tag) {
  tag.classList.add("highlight")
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight")
}