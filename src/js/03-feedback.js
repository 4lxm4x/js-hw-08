import _ from 'lodash';

const formElement = document.querySelector('form');
const emailElement = document.querySelector('input');
const msgElement = document.querySelector('textarea');
if (localStorage) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  emailElement.value = email;
  msgElement.value = message;
}
formElement.addEventListener('input', _.throttle(onFormInput, 500));
formElement.addEventListener('submit', onSubmit);

function onFormInput() {
  const data = new FormData(formElement);
  const formData = {
    email: data.get('email'),
    message: data.get('message'),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  formElement.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.clear();
}
