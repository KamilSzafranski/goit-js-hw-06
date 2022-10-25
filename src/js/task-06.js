const input = document.querySelector("#validation-input");

const someEvent = (event) => {
  const inputLenght = event.currentTarget.value.split("").length;
  if (inputLenght < 7) {
    return input.classList.add("valid");
  }

  return input.classList.add("invalid");
};

input.addEventListener("blur", someEvent);
