const input = document.querySelector("#validation-input");


input.addEventListener("blur", (event) => {
  const inputLenght = event.currentTarget.value.split("").length;
  if (inputLenght < 6) {
    return input.classList.add("invalid");
  }

  return input.classList.add("valid");
});
