const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newIngredients = [];
const ingredientsEL = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  let newIngridient = document.createElement("li");
  newIngridient.classList.add("item");
  newIngridient.textContent = ingredient;
  newIngredients.push(newIngridient);
  return;
});
ingredientsEL.append(...newIngredients);
