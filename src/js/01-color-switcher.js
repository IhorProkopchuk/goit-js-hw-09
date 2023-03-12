const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const DELAY = 1000;
const body = document.body;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startChangeColor() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function stopChangeColor() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);