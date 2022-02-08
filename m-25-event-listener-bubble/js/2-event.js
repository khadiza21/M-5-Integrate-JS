//type 2: use onclick function
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

//type 3: handle purple btn click by setting function name
const PurpleBtn = document.getElementById("make-purple");
//console.log(PurpleBtn);

// just set the name of the function
PurpleBtn.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// type 4 : event handler with anonymous function
const grayBtn = document.getElementById("make-gray");
//console.log(grayBtn);
// grayBtn.onclick = function makeGray() {
//     document.body.style.backgroundColor = 'gray';
// }
//anonymous function
grayBtn.onclick = function () {
  document.body.style.backgroundColor = "gray";
};
