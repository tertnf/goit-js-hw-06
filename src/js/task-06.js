const validationInputRef = document.querySelector("input, #validation-input");
const inputLengthRef = document.querySelector("input, [data-length]");

// console.log(validationInputRef.dataset.length);

// validationInputRef.addEventListener("input", onValidationInputInput);

validationInputRef.addEventListener("blur", onValidationInputBlur);

// function onValidationInputInput(event) {
//   //   console.log(event.currentTarget.value.length);
//   let validationInputLength = event.currentTarget.value.length;
//   return validationInputLength;
// }

function onValidationInputBlur(event) {
  if (
    Number(validationInputRef.dataset.length) ===
    event.currentTarget.value.length
  ) {
    // console.log("grean");
    validationInputRef.classList.add("valid");
  }
  //   console.log("red");
  else validationInputRef.classList.add("invalid");
  //   console.log(validationInputRef.dataset.length);

  //   console.log(event.currentTarget.value.length);

  //   console.log(
  //     Number(validationInputRef.dataset.length) ===
  //       event.currentTarget.value.length
  //   );

  //   alert(typeof Number(validationInputRef.dataset.length));
  //   alert(typeof event.currentTarget.value.length);
}
