function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyRef = document.querySelector('body');
const startRef = document.querySelector(`button[data-start]`);
const stopRef = document.querySelector(`button[data-stop]`);

let timerId = null;

startRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    const colorChange = getRandomHexColor();
    bodyRef.style.background = colorChange;
  }, 1000);
  if (startRef) {
    startRef.setAttribute("disabled", "disabled");
    stopRef.removeAttribute("disabled", "disabled");
  }
});

stopRef.addEventListener('click', () => {
  if (stopRef) {
    bodyRef.style.background !== colorChange;
    clearInterval(timerId);
    stopRef.setAttribute("disabled", "disabled");
    startRef.removeAttribute("disabled", "disabled");
    
  }
});
