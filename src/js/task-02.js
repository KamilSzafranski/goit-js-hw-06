const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const createLi = ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  ul.append(li);
  return;
});
