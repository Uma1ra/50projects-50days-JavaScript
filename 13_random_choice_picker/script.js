const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)

  if(e.key === "Enter") {
    setTimeout(()=> {
      e.target.value = ""
    }, 10)
  }
})

function createTags(input) {
  const tags = input.split(" ").filter(tag => tag.trim() !== "").map(tag => tag.trim());

  tagsEl.innerHTML = ""

  tags.forEach(tag => {
    const tagEl = document.createElement("span")
    tagEl.classList.add("tag")
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  });
}

function highlightTag(tag) {
  tag.classList.add("highlight")
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight")
}