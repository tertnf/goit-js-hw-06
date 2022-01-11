const loginformRef = document.querySelector("form.login-form");

loginformRef.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  let object = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  if (object.email === "" || object.password === "") {
    const alertMessage = "Все поля должы быть заполнены!";
    alert(alertMessage);
  } else console.log(object);
  loginformRef.reset();
}
