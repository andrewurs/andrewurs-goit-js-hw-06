const boxes = document.querySelector('#boxes')
const inputNum = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')


btnCreate.addEventListener('click', onClickCreateBoxes);
btnDestroy.addEventListener('click', onClickDestroyBoxes);

let boxSize = 30;
const boxStep = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickCreateBoxes(amount) {
  let boxesMarkup = [];
  amount = inputNum.value;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = boxSize + 'px';
    boxEl.style.height = boxSize + 'px';
    boxesMarkup.push(boxEl);
    boxSize += boxStep;
  }

  boxes.append(...boxesMarkup);
}

function onClickDestroyBoxes() {
  boxes.innerHTML = '';
  inputNum.value = '';
  boxSize = 30;
}

