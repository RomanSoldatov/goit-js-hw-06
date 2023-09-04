const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);

const lengthData = parseInt(inputEl.dataset.length);

function onInputBlur() {
  if (inputEl.value.length === lengthData) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
