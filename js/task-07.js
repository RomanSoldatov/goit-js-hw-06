const inputEl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputEl.addEventListener("input", onInputRange);
function onInputRange() {
  textSize.style.fontSize = `${inputEl.value}px`;
}
