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

