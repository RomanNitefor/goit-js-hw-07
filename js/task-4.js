const form = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const info = {
    email: formEl.email.value,
    pass: formEl.password.value,
  };
  if (info.email === '' || info.pass === '') {
    return alert('All form fields must be filled in');
  }
  console.log(info);
  event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
