const input = document.querySelector("#validation-input");


input.addEventListener("blur", (event) => {
  const inputLenght = event.currentTarget.value.split("").length;
  if (inputLenght === 6 ) {
    input.classList.add("valid");
    input.classList.remove("invalid")
    return 
  }

  return input.classList.add("invalid");
});
