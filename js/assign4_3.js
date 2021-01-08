const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

const errorUsername = document.getElementById('error-username');
const errorEmail = document.getElementById('error-email');
const errorPassword1 = document.getElementById('error-password1');
const errorPassword2 = document.getElementById('error-password2');

const submit = document.querySelector('button');

submit.addEventListener('click', function (event) {
  let noError = true;

  // Validate Username
  if (username.value === '') {
    errorUsername.innerHTML = 'Enter a valid username';
    noError = false;
  } else errorUsername.innerHTML = '';

  // Validate Email
  if (!validateEmail(email.value)) {
    errorEmail.innerHTML = 'Email is invalid';
    noError = false;
  } else errorEmail.innerHTML = '';

  // Validate Password1
  if (password1.value != '123456789') {
    errorPassword1.innerHTML = 'Wrong password';
    noError = false;
  } else errorPassword1.innerHTML = '';

  // Validate Password2
  if (password1.value !== password2.value) {
    errorPassword2.innerHTML = 'Passwords do not match';
    noError = false;
  } else errorPassword2.innerHTML = '';

  if (noError) alert('Open Sesame: You may enter');
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
