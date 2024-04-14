function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.getElementById('controls');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');
const input = controlsDiv.querySelector('input');

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }
  let size = 30;
  boxesDiv.innerHTML = '';
  let listBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    box.classList.add('generate-new');
    listBoxes.push(box);
  }
  listBoxes.forEach(box => boxesDiv.appendChild(box));
  input.value = '';
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const inputValue = Number(input.value);
  createBoxes(inputValue);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
