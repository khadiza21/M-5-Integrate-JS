document.getElementById("login-submit").addEventListener("click", function () {
  //console.log('button clicked');
  //get email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  console.log(userEmail);
  //get pass
  const passField = document.getElementById("user-pass");
  const userPass = passField.value;
  console.log(userPass);
});

document.getElementById("user-pass");
