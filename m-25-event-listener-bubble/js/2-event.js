function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//handle purple btn click by setting function name
const PurpleBtn = document.getElementById("make-purple");
console.log(PurpleBtn);

// just set the name of the function
PurpleBtn.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}
