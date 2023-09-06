function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

bodyEl.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  spanEl.textContent = randomHexColor;
}
