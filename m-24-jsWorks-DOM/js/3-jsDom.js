//get elements by tagname
let blogname = document.getElementsByTagName("h3");
console.log(blogname);
for (const h3 of blogname) {
  console.log(h3);
}

let paraname = document.getElementsByTagName("p");
console.log(paraname);
for (const p of paraname) {
  console.log(p.innerText);
}

//get element by id
let b2Color = (document.getElementById("b-2").style.backgroundColor = "blue");
console.log(b2Color);

const b1 = document.getElementById("b-1");
b1.style.textAlign = "center";
b1.innerText = "My First Blog About Bot";
b1.style.padding = "10px";
b1.style.color = "white";
b1.style.backgroundColor = "black";
b1.style.margin = "40px";

//explore get elements by className
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  console.log(blog);
  blog.style.border = "3px solid black";
  blog.style.borderRadius = "14px";
  blog.style.padding = "15px";
  blog.style.margin = "35px";
}

//explore query selector
let p1 = document.querySelector("#blog p");
const pAll = document.querySelectorAll("p");
const pAll = document.querySelectorAll(".blog");

//nodelist , htmlcollection,setAttribute,parentNode,childnodes
