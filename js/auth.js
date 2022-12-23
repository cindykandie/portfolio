// validate form section

const email = document.getElementById('email');
document.querySelector('#authBtn').addEventListener('click', (e) => {
  const name = document.getElementById('name');
  if (!name.validity.valid) {
    document.getElementById('warning-msg').innerHTML = 'Form not sent! Kindly input valid name';
    e.preventDefault();
    return;
  }
  if (email.validity.typeMismatch) {
    document.getElementById('warning-msg').innerHTML = 'Form not sent! Kindly input valid email.';
    e.preventDefault();
    return;
  }
  if (email.validity.patternMismatch) {
    document.getElementById('warning-msg').innerHTML = 'Form not sent! Kindly input email in lowercase';
    e.preventDefault();
    return;
  }
  const text = document.getElementById('client-msg');
  if (!text.validity.valid) {
    document.getElementById('warning-msg').innerHTML = 'Form not sent! Kindly input valid message';
    e.preventDefault();
    return;
  }
  document.getElementById('contact-form').press();
});

// preserve data in the browser
const contactData = document.querySelectorAll('.store');
const storedData = {
  name: '',
  email: '',
  message: '',
};
contactData.forEach((input) => {
  input.addEventListener('input', () => {
    storedData[input.name] = input.value;
    storedData[input.email] = input.value;
    storedData[input.message] = input.value;
    localStorage.setItem('info', JSON.stringify(storedData));
  });
});
const infoStored = JSON.parse(localStorage.getItem('info'));
if (infoStored) {
  contactData.forEach((element) => {
    element.value = infoStored[element.name];
  });
}