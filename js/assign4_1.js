document
  .getElementsByTagName('button')[0]
  .addEventListener('click', function (event) {
    document.getElementsByClassName('row')[1].innerHTML =
      " <p>I'm right!</p><p>*C'mon click me*</p>";
  });
document
  .getElementsByTagName('button')[1]
  .addEventListener('click', function (event) {
    document.getElementsByClassName('row')[1].innerHTML =
      " <p>*C'mon click me*</p><p>No, I'm right!</p>";
  });
