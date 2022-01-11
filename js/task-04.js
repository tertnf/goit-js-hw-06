let counterValue = 0;
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector("#value");
// console.log(decrementBtnRef);
// console.log(incrementBtnRef);
decrementBtnRef.addEventListener("click", (event) => {
  //   counterValue -= 1;
  counterRef.textContent = counterValue -= 1;
  //   console.log(counterValue);
});
incrementBtnRef.addEventListener("click", (event) => {
  //   counterValue += 1;
  counterRef.textContent = counterValue += 1;
  //   console.log(counterValue);
});
