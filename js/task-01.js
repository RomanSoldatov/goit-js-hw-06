const navEl = document.querySelector("#categories");
console.log(`Number of categories: ${navEl.childElementCount}`);
const newArr = [...navEl.children];
newArr.forEach((child) => {
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Elements: ${child.lastElementChild.childElementCount}`);
  return;
});
