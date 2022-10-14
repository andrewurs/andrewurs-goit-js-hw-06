const inputChange = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')
 
inputChange.value = 16;

inputChange.addEventListener('input', onInputResize);

function onInputResize() {
  spanText.style.fontSize = inputChange.value + 'px';
}
// inputChange.addEventListener('change', elt => {
//     spanText.style.fontSize = `${elt.target.value }px`
// })

