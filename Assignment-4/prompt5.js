function findVolume() {
  let radV = document.getElementById("rad").value;

  let vol = (4 / 3) * Math.PI * Math.pow(radV, 3);

  // the prettier extension will remove extra lines it think are not needed
  // not a fan of that
  // I like to do my own new lines sometimes

  // find out how to edit that

  alert("The volume is " + vol);
}
