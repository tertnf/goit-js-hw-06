// const categoriesEl = document.querySelector("ul#categories");
// console.log(categoriesEl);
let liItemEl = document.querySelectorAll("li.item");
// console.log(liItemEl);
let categoryNumEl = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoryNumEl}`);
liItemEl.forEach((element) => {
  //   console.log(element);
  let numLiEl = element.querySelectorAll("li").length;
  let categoryRef = element.querySelector("h2").textContent;
  console.log(`Category: ${categoryRef}`);
  console.log(`Elements: ${numLiEl}`);
});
