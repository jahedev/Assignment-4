function calculateVolume() {
  const radius = Number(document.getElementById('radius').value);
  const msgEl = document.querySelector('#msg');

  if (isNaN(radius) || radius == 0) {
    msgEl.innerText = 'That is not a valid number.';
    return;
  }

  const volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2);
  msgEl.innerText = `Volume: (4/3) * pi * ${radius}^3 = ${volume}`;
}
