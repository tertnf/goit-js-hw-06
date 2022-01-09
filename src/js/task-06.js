const validationInputRef = document.querySelector("input, #validation-input");
const inputLengthRef = document.querySelector("input, [data-length]");

validationInputRef.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  if (
    Number(validationInputRef.dataset.length) ===
    event.currentTarget.value.length
  ) {
    validationInputRef.classList.add("valid");
  } else validationInputRef.classList.add("invalid");
  //   console.log(validationInputRef.dataset.length);
  //   console.log(event.currentTarget.value.length);

  //   alert(typeof Number(validationInputRef.dataset.length));
  //   alert(typeof event.currentTarget.value.length);
}
validationInputRef.addEventListener("focus", onValidationInputFocus);

function onValidationInputFocus(event) {
  validationInputRef.classList.remove("valid");
  validationInputRef.classList.remove("invalid");
}
