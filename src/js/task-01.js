const animalList = document.querySelector(".item:first-child");
const animalNestedList = document.querySelector(".item:first-child ul");

const productList = document.querySelector(".item:nth-child(2)");
const productNestedList = document.querySelector(".item:nth-child(2) ul");

const technologiesList = document.querySelector(".item:last-child");
const technologiesNestedList = document.querySelector(".item:last-child ul");

const numberOfCategories =
  document.querySelector("#categories").children.length;

console.log(`Numbers of categories ${numberOfCategories}

Category: ${animalList.firstElementChild.textContent}
Element: ${animalNestedList.children.length} 

Category: ${productList.firstElementChild.textContent}
Element: ${productNestedList.children.length} 

Category: ${technologiesList.firstElementChild.textContent}
Element: ${technologiesNestedList.children.length} `);
