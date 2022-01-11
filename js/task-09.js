function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const changeColorButtonRef = document.querySelector("button.change-color");
const spanColorRef = document.querySelector("span.color");

changeColorButtonRef.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = getRandomHexColor();
}
