function checkPassword() {
  let password = document.getElementById("pass");

  if (password.value == "12345678") {
    //alert("You are right")

    // sometimes there are issues pulling a value directly

    document.getElementById("id1").innerText = "You got it right!";
  } else {
    document.getElementById("id1").innerText = "What is the password?";

    // the prettier extension will remove extra lines it think are not needed
    // not a fan of that
    // I like to do my own new lines sometimes

    // find out how to edit that

    alert("Wrong");
  }
}
