document.createElement("p");

//create and add element by js

//create the element
const li = document.createElement("li");
li.innerText = "Blog-9 ";

//where to add
const ul = document.getElementById("blog-list");

//append new element
ul.appendChild(li);

// remove and append child
//consolde.log(firends.children);
const fifth = ul.children[4];
console.log(fifth);
ul.removeChild(fifth);

// crate element
const fr = document.createElement("li");
fr.innerText = 'friend - extra';
ul.appendChild(fr);
