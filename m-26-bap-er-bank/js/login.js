document.getElementById("login-submit").addEventListener("click", function () {
  //console.log('button clicked');
  //get email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //console.log(userEmail);
  //get pass
  const passField = document.getElementById("user-pass");
  const userPass = passField.value;
  //console.log(userPass);
  //check email and pass
  if (userEmail == "b@gmail.com" && userPass == "secret") {
    window.location.href = "banking.html";
  }
});

//document.getElementById("user-pass");
