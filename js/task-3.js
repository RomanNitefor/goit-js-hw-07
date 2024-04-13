const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const result = nameInput.value.trim();
  if (result === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = result;
  }
});
