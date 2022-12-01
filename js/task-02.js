const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const recipeEl = [];

const listEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  recipeEl.push(itemEL);
});

listEl.append(...recipeEl);

console.log(recipeEl);


