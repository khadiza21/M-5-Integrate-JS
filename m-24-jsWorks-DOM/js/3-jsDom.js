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

//explore query selector
let p1 = document.querySelector("#blog p");
const pAll = document.querySelectorAll("p");
const pAl2 = document.querySelectorAll(".blog");

//nodelist , htmlcollection,setAttribute,parentNode,childnodes

//add article
const article = document.createElement("article");
article.classList.add("blog");
// const h3 = document.createElement("h3");
// h3.innerText = " New blog";
// const p = document.createElement("p");
// p.innerText =
//   "ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellendus totam enim architecto animi nesciunt illum iste minima quidem, omnis ex ducimus pariatur cumque voluptatum, deserunt voluptatibus exercitationem? Reprehenderit, sed";
// article.appendChild(h3);
// article.appendChild(p);
article.innerHTML = `<h3>New blog</h3> 
<p>ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellendus totam enim architecto animi nesciunt illum iste minima quidem, omnis ex ducimus</p>`;

//parent of article
const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);

//explore get elements by className
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  console.log(blog);
  blog.style.border = "3px solid black";
  blog.style.borderRadius = "14px";
  blog.style.padding = "15px";
  blog.style.margin = "35px";
}
