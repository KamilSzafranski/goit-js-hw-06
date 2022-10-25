const loginForm = document.querySelector(".login-form");

const sendLoginForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  event
  if (!email.value || !password.value) {
    return alert("WSZYSTKIE POLA POWINNY ZOSTAĆ UZUPEŁIONE!!!");
  }
  const formObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formObj);
  event.currentTarget.reset();
};

loginForm.addEventListener("submit", sendLoginForm);
