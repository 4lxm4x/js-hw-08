import _ from 'lodash';

const formElement = document.querySelector('form');
const emailElement = document.querySelector('input');
const msgElement = document.querySelector('textarea');
<<<<<<< HEAD

const localStorageContent = localStorage.getItem('feedback-form-state');

if (localStorageContent) {
  const { email, message } = JSON.parse(localStorageContent);

  emailElement.value = email;
  msgElement.value = message;
} else {
  console.log('empty storage');
=======

>>>>>>> 2883a89c1ca5371fa9926c6a889cad86b724fdbf
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
