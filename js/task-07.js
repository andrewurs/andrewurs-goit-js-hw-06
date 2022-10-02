const inputChange = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputChange.addEventListener('change', elt => {
    spanText.style.fontSize = `${elt.target.value }px`
})