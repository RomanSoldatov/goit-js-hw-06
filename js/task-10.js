function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.querySelector("#controls");
const btnCreateEl = document.querySelector("[data-create]");
const btnCloseEl = document.querySelector("[data-destroy]");
const divBoxesEL = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnCloseEl.addEventListener("click", destroyBoxes);

let i = 1;
let width = 30;
let height = 30;
function createBoxes() {
  while (i <= divEl.firstElementChild.value) {
    const divEl = document.createElement("div");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;

    divBoxesEL.appendChild(divEl);

    i += 1;
    width += 10;
    height += 10;
  }
}
function destroyBoxes() {
  divBoxesEL.innerHTML = "";
  document.location.reload();
}
