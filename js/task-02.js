const ingredients = [ 
  'Potatoes', 
  'Mushrooms', 
  'Garlic', 
  'Tomatos', 
  'Herbs', 
  'Condiments', 
]; 
 
let listRef = document.querySelector("ul, #ingridients"); 
// console.log(listRef); 
 
let array = []; 
 
ingredients.forEach(element => { 
  const listItemRef = document.createElement("li"); 
listItemRef.textContent = element; 
 
listItemRef.classList.add("item"); 
array.push(listItemRef); 
// listRef.appendChild(listItemRef); 
// console.log(listItemRef); 
}); 
// console.log(listRef); 
// console.log(array); 
listRef.append(...array);
