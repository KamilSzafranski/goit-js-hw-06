const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const someFunction = (event) => {
  if (!event.currentTarget.value) {
    return (span.textContent = "Anonymous");
  }
  return (span.textContent = event.currentTarget.value);
};

input.addEventListener("input", someFunction);
