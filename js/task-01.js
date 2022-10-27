

const ulChildren = document.querySelector("#categories").children;

console.log(`Numbers of categories ${ulChildren.length}`);

for (let child of ulChildren){
  console.log(child)
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Element: ${child.lastElementChild.children.length}`);
}


