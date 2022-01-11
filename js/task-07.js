const inputRangeRef = document.querySelector("input, #font-size-control");

const spanTextRef = document.querySelector("span#text");

// let inputRangeValue = 30;

// inputRangeRef.setAttribute("value", inputRangeValue);

inputRangeRef.addEventListener("input", onInputRangeClick);

function onInputRangeClick(event) {
  //   console.log(event);
  const { value } = event.target;
  //   console.log(`${value}`);
  spanTextRef.style.fontSize = `${value}px`;
}
