const input = document.querySelector("#filter")
const titles = document.querySelectorAll("li ")

input.addEventListener("input", filtro)


function filtro() {
  if (!input.value == "") {
    for (let title of titles) {
      const text = title.querySelector("h2").textContent.toLowerCase();
      const filtedText = input.value.toLowerCase()
      if (!text.includes(filtedText)) {
        title.style.display = "none"
      } else {
        title.style.display = "block"
      }
    }
  } else {
    for (let title of titles) {
      title.style.display = "block"
    }
  }
}