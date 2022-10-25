function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    console.log(div);
    boxes.append(div);
  }

};
const destroyBoxes= ()=> boxes.innerHTML="";

  btnCreate.addEventListener("click", ()=> createBoxes(input.value));
  btnDestroy.addEventListener("click", destroyBoxes);

