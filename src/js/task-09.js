function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const changeColor = (event) => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
};

btn.addEventListener("click", changeColor);
