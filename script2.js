const filterElement = document.querySelector('header input')

const cards = document.querySelectorAll('.cards li')
console.log(cards)
filterElement.addEventListener('input', filterCards)

function filterCards() {
  if (filterElement.value !== '') {
    for (let card of cards) {
      let title = card.querySelector('h2')

      title = title.textContent.toLocaleLowerCase()

      let filterText = filterElement.value.toLocaleLowerCase()

      if (!title.includes(filterText)) {
        card.style.display = 'none'
      } else {
        card.style.display = 'block'
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = 'block'
    }
  }
}
