const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// third
const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = `${ingredient}`
  return liEl
})
list.append(...elements)

console.log(elements)