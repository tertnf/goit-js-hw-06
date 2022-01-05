const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// вар 2
// const makeGalaryImage = ({url, alt})=>{
//   let listItemRef = document.createElement("li");
//   let pictureRef = document.createElement("img");
//   pictureRef.src = ${url};
//   pictureRef.alt = ${alt};
//   listItemRef.appendChild(pictureRef);
//   return listItemRef;
// }

// // console.log(makeGalaryImage(images[1]));

// const imageGalery = images.map(makeGalaryImage);

// console.log(imageGalery);

// const listRef = document.querySelector("ul, .galery");
//  listRef.append(...imageGalery);

const makeGalaryMarkup = ({ url, alt }) => {
  return `<li class = "galery--item"> 
  <img src ="${url}" alt = "${alt}" class = "galert--image"></img> 
  </li>`;
};

const makeGalary = images.map(makeGalaryMarkup).join("");

const listRef = document.querySelector("ul, .galery");
listRef.classList.add("flex-box-galery", "list");
const bodyRef = document.querySelector("body");
bodyRef.classList.add("container");

listRef.insertAdjacentHTML("beforeend", makeGalary);
