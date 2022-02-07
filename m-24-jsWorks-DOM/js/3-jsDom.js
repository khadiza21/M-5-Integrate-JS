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

let b2Color = document.getElementById('b-2').style.backgroundColor='blue';
console.log(b2Color);


const b1 = document.getElementById('b-1');
b1.style.textAlign = 'center';
b1.innerText = 'My First Blog About Bot';
b1.style.padding = '10px';
b1.style.color = 'white';
b1.style.backgroundColor = 'black';
b1.style.margin = '40px';