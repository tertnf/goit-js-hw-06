const inputAreaRef = document.querySelector("input, #name-input");
const textAreaRef = document.querySelector("span, #name-output");
inputAreaRef.addEventListener("input", onInputAreaInput);
const initialTextArea =
  document.querySelector("span, #name-output").textContent;
function onInputAreaInput(event) {
  //   console.log(event);
  //   console.log(event.data);

  //   console.log(event.currentTarget.value);
  textAreaRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textAreaRef.textContent = initialTextArea;
  }
}
