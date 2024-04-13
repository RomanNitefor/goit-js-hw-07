function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Element.append(el) - add elem
const body = document.body;
const color = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', () => {
  const resultRandomColor = getRandomHexColor();
  body.style.backgroundColor = resultRandomColor;
  color.textContent = resultRandomColor;
});
